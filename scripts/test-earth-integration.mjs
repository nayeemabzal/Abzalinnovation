// Run after npm run build. SITE_URL tests a real deployment; otherwise a local
// adapter applies this project's redirect/rewrites to the actual public app.
// The adapter is not a claim of Vercel routing verification.
import assert from 'node:assert/strict';
import {createServer} from 'node:http';
import {readFile, stat} from 'node:fs/promises';
import {resolve, relative, extname} from 'node:path';
import {fileURLToPath, pathToFileURL} from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
const config = JSON.parse(await readFile(resolve(root,'vercel.json'),'utf8'));
const {chromium} = process.env.PLAYWRIGHT_MODULE_PATH
  ? await import(pathToFileURL(resolve(process.env.PLAYWRIGHT_MODULE_PATH)).href)
  : await import('playwright');
const prefix = '/earth-time-machine/';
const publicOrigin = 'https://earth-time-machine-tan.vercel.app';
let server;
function match(rule,path) {
  if(rule.source === '/(.*)') return rule.destination;
  if(!rule.source.includes(':path*')) return rule.source === path ? rule.destination : null;
  const base = rule.source.slice(0,-6);
  return path.startsWith(base) ? rule.destination.replace(':path*',path.slice(base.length)) : null;
}
async function startLocal() {
  const dist = resolve(root,'dist');
  const types = {'.html':'text/html','.js':'text/javascript','.css':'text/css','.svg':'image/svg+xml','.png':'image/png','.webp':'image/webp','.jpg':'image/jpeg','.jpeg':'image/jpeg','.ico':'image/x-icon','.json':'application/json','.xml':'text/xml','.txt':'text/plain'};
  server = createServer(async(req,res)=>{
    try {
      const url = new URL(req.url,'http://localhost');
      for(const rule of config.redirects || []) {
        const target = match(rule,url.pathname);
        if(target) {res.writeHead(rule.permanent?308:307,{Location:target+url.search});res.end();return;}
      }
      for(const rule of config.rewrites || []) {
        const target = match(rule,url.pathname);
        if(target?.startsWith('https://')) {
          const response = await fetch(target+url.search);
          res.writeHead(response.status,{'Content-Type':response.headers.get('content-type')||'application/octet-stream'});
          res.end(Buffer.from(await response.arrayBuffer()));return;
        }
      }
      let file = resolve(dist,'.'+decodeURIComponent(url.pathname));
      if(relative(dist,file).startsWith('..')) {res.writeHead(404);res.end();return;}
      if(!(await stat(file).catch(()=>null))?.isFile()) file=resolve(dist,'index.html');
      res.writeHead(200,{'Content-Type':types[extname(file)]||'application/octet-stream'});
      res.end(await readFile(file));
    } catch {res.writeHead(502);res.end('Preview request failed');}
  });
  await new Promise((done,reject)=>{server.once('error',reject);server.listen(0,'127.0.0.1',done);});
  return `http://127.0.0.1:${server.address().port}`;
}
const site = (process.env.SITE_URL || await startLocal()).replace(/\/$/,'');
let browser;
try {
  // Query bytes, including duplicates, survive the canonical-entry redirect.
  const query='?era=pangaea&check=first&check=second&encoded=a%2Bb';
  const redirect = await fetch(site+'/earth-time-machine'+query,{redirect:'manual'});
  assert([307,308].includes(redirect.status),`Expected entry redirect, got ${redirect.status}`);
  const target = new URL(redirect.headers.get('location'),site);
  assert.equal(target.pathname,prefix);assert.equal(target.search,query);
  const shell = await fetch(site+prefix+query);
  assert.equal(shell.status,200);assert((await shell.text()).includes('Interactive 3D Earth'),'App HTML missing (check deployment protection/routing)');
  const missing = await fetch(site+prefix+'assets/migration-missing-file.png');
  assert.equal(missing.status,404,'Missing app assets must not become marketing SPA HTML');
  for(const [file,type] of [['app.js','javascript'],['style.css','css'],['manifest.webmanifest','manifest'],['assets/guyana/terrain.json','json'],['assets/landmarks/mariana/terrain.json','json']]) {
    const response=await fetch(site+prefix+file);assert.equal(response.status,200,file);
    assert(response.headers.get('content-type')?.includes(type),`${file}: wrong MIME type`);
  }
  browser = await chromium.launch({headless:true,args:['--use-angle=swiftshader','--enable-unsafe-swiftshader']});
  for(const viewport of [{width:1280,height:820},{width:412,height:915}]) {
    const context=await browser.newContext({viewport,hasTouch:viewport.width<600,isMobile:viewport.width<600,deviceScaleFactor:1,reducedMotion:'reduce'});
    const page=await context.newPage();page.setDefaultTimeout(30000);
    const problems=[];const docs=[];
    page.on('pageerror',error=>problems.push(error.message));
    page.on('request',request=>{
      if(request.isNavigationRequest()&&request.frame()===page.mainFrame()) docs.push(request.url());
      if(request.url().includes('chatgpt.site')) problems.push('Old host requested');
    });
    try {
      await page.goto(site+'/studio-kids');
      await page.getByRole('link',{name:'Explore Earth Time Machine',exact:true}).click();
      await page.waitForURL(url=>url.pathname===prefix);
      await page.waitForFunction(()=>document.querySelector('#globe-stage canvas')&&document.querySelector('#globe-status').hidden);
      assert(docs.some(url=>new URL(url).pathname===prefix),'Studio Kids link did not perform document navigation');
      assert.equal(await page.locator('iframe').count(),0);
      assert.equal(await page.locator('#chapter-select').inputValue(),'5','Default entry must stay global timeline');
      await page.goBack();await page.waitForURL(url=>url.pathname==='/studio-kids');
      await page.goForward();await page.waitForURL(url=>url.pathname===prefix);
      await page.goto(site+'/earth-time-machine'+query+'#globe-stage');
      await page.waitForFunction(()=>document.querySelector('#globe-status').hidden);
      let current=new URL(page.url());assert.equal(current.pathname,prefix);assert.equal(current.hash,'#globe-stage');
      assert.deepEqual(current.searchParams.getAll('check'),['first','second']);assert.equal(current.searchParams.get('encoded'),'a+b');
      await page.reload();assert.equal(new URL(page.url()).searchParams.get('era'),'pangaea');
      await page.goto(site+prefix+'?view=guyana&place=rupununi&era=today&check=keep');
      await page.waitForFunction(()=>!document.querySelector('#photo-open').disabled&&document.querySelector('#terrain-status').hidden);
      assert.equal(new URL(page.url()).searchParams.get('place'),'rupununi');
      await page.locator('#photo-open').click();assert(await page.locator('#photo-dialog').isVisible());await page.locator('#photo-close').click();
      await page.goto(site+prefix+'?view=landmark&landmark=mariana&era=today&check=keep');
      await page.waitForFunction(()=>document.querySelector('#lm-status').hidden&&document.querySelector('#lm-stage canvas'));
      await page.locator('#lm-next').click();const stop=new URL(page.url()).searchParams.get('stop');assert(stop);
      await page.reload();await page.waitForFunction(()=>document.querySelector('#lm-status').hidden);
      assert.equal(new URL(page.url()).searchParams.get('stop'),stop);assert.equal(new URL(page.url()).searchParams.get('check'),'keep');
      await page.locator('#lm-flat-toggle').click();await page.waitForFunction(()=>{const image=document.querySelector('#lm-flat');return !image.hidden&&image.naturalWidth>0;});
      const manifest=await(await fetch(site+prefix+'manifest.webmanifest')).json();
      const start=new URL(manifest.start_url,site+prefix+'manifest.webmanifest');assert.equal(start.pathname,prefix);
      assert.equal(new URL(manifest.scope,site+prefix+'manifest.webmanifest').pathname,prefix);
      assert.equal((manifest.id===undefined?start:new URL(manifest.id,start.origin)).pathname,prefix);
      assert.deepEqual(problems,[]);
      console.log(`PASS ${viewport.width}x${viewport.height}: native Studio Kids entry, global default, no iframe/old host, history, duplicate queries/fragments, Guyana photo, landmark stop reload/flat map, manifest; 0 page errors.`);
    } finally {await context.close();}
  }
  // On plain Vite/static fallback, verify the direct link preserves every input.
  if(server) {
    const fallbackContext=await browser.newContext();const page=await fallbackContext.newPage();
    try {
      const html=await readFile(resolve(root,'dist/index.html'),'utf8');
      await page.route('**/earth-time-machine/?*',route=>route.fulfill({contentType:'text/html',body:html}));
      await page.goto(site+prefix+'?era=pangaea&view=landmark&landmark=mariana&stop=test&x=1&x=2#kept');
      const link=page.getByRole('link',{name:'Open Earth Time Machine',exact:false});
      assert.equal(await link.getAttribute('href'),publicOrigin+'/?era=pangaea&view=landmark&landmark=mariana&stop=test&x=1&x=2#kept');
      assert.equal(await page.locator('iframe').count(),0);
      console.log('PASS fallback: complete query/fragment preserved by direct public app link; no iframe.');
    } finally {await fallbackContext.close();}
  }
  console.log(`PASS routing/MIME/missing-asset checks; mode=${process.env.SITE_URL?'deployed site':'local routing adapter with live upstream'}`);
} finally {
  await browser?.close();if(server)await new Promise(done=>server.close(done));
}
