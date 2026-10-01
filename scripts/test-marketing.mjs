import {pathToFileURL} from 'node:url';
import {resolve} from 'node:path';
const {chromium}=process.env.PLAYWRIGHT_MODULE_PATH ? await import(pathToFileURL(resolve(process.env.PLAYWRIGHT_MODULE_PATH)).href) : await import('playwright');
import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
await fs.mkdir('evidence',{recursive:true});
const MARKETING_BASE=(process.env.MARKETING_URL||'http://127.0.0.1:4176').replace(/\/$/,'');
const browser=await chromium.launch({...(process.env.BROWSER_CHANNEL ? {channel:process.env.BROWSER_CHANNEL} : {}),headless:true});
const results=[],errors=[];
const check=(name,condition)=>{assert.ok(condition,name);results.push(name)};
const paths=['/','/products','/contact','/volt','/atlas','/build','/about','/faq','/privacy-policy','/terms-of-use','/studio-kids','/one-better','/one-better/privacy','/one-better/terms','/one-better/support','/flip-tracker','/unknown'];
for(const width of [1440,390,320,844]){
 const page=await browser.newPage({viewport:{width,height:width===844?390:900},reducedMotion:'reduce'});
 page.on('pageerror',e=>errors.push(e.message));
 await page.route('**/*',r=>new URL(r.request().url()).origin===new URL(MARKETING_BASE).origin&&r.request().method()==='GET'?r.continue():r.abort());
 for(const path of paths){
  await page.goto(`${MARKETING_BASE}`+path,{waitUntil:'networkidle'});
  await page.locator('h1').first().waitFor();
  check(`${width} ${path} fits`,await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));
  check(`${width} ${path} has one h1`,await page.locator('h1').count()===1);
  if(['/','/products','/contact','/volt','/atlas','/build','/about','/faq'].includes(path)){
   check(`${width} ${path} route title`,(await page.title()).endsWith('| Abzal Innovation'));
   check(`${width} ${path} h1 inside main`,await page.locator('main h1').count()===1);
  }
  if(width===1440||width===390)if(['/','/products','/contact'].includes(path)){
   await page.locator('img').evaluateAll(async imgs=>{await Promise.all(imgs.map(async img=>{img.loading='eager';try{await img.decode()}catch{}}));});
   await page.screenshot({path:`evidence/local-${width}-${path.slice(1)||'home'}.png`,fullPage:true});
  }
 }
 await page.goto(`${MARKETING_BASE}/`);
 await page.getByRole('link',{name:'Explore Products',exact:true}).click();
 check(`${width} anchor URL`,new URL(page.url()).hash==='#products');
 check(`${width} anchor focus`,await page.locator('#products').evaluate(el=>el===document.activeElement));
 await page.goBack();check(`${width} anchor Back`,new URL(page.url()).hash==='');
 if(width<1024){
  const menu=page.getByRole('button',{name:'Open navigation menu'});
  await menu.click();check(`${width} mobile open`,await page.locator('#mobile-site-nav').isVisible());
  await page.keyboard.press('Escape');check(`${width} menu Escape`,await menu.getAttribute('aria-expanded')==='false');
  check(`${width} menu focus restored`,await menu.evaluate(el=>el===document.activeElement));
  await menu.click();await page.locator('#mobile-site-nav').getByRole('link',{name:'About',exact:true}).click();
 }else{
  const products=page.getByRole('navigation',{name:'Main navigation'}).getByRole('link',{name:'Products',exact:true});
  await products.focus();const dropdown=page.locator('header').getByRole('link',{name:/Abzal Volt/});await dropdown.waitFor();check('keyboard products dropdown',await dropdown.isVisible());await dropdown.focus();
  await page.keyboard.press('Escape');await dropdown.waitFor({state:'hidden'});check('dropdown Escape',!await dropdown.isVisible());check('dropdown Escape restores focus',await products.evaluate(el=>el===document.activeElement));
  await page.getByRole('navigation',{name:'Main navigation'}).getByRole('link',{name:'About',exact:true}).click();
 }
 check(`${width} navigation about`,page.url().endsWith('/about'));await page.goBack();check(`${width} Back home`,new URL(page.url()).pathname==='/');
 await page.close();
 console.log(`Completed ${width}px routes and navigation`);
}
const page=await browser.newPage({viewport:{width:390,height:900}});
page.on('pageerror',e=>errors.push(e.message));
let mode='failure',posts=0;
await page.route('https://formsubmit.co/**',async route=>{
 posts++;check('synthetic request contains trimmed email',!route.request().postData().includes(' review@example.invalid '));
 if(mode==='pending')return;
 if(mode==='http')return route.fulfill({status:503,body:'Unavailable'});
 await route.fulfill({status:200,contentType:'application/json',body:JSON.stringify({success:mode==='success'?'true':false})});
});
await page.goto(`${MARKETING_BASE}/contact`);
await page.getByRole('button',{name:'Send Inquiry'}).click();
check('empty form makes no request',posts===0);check('empty form focuses name',await page.locator('[name=name]').evaluate(el=>el===document.activeElement));
check('errors associated with fields',await page.locator('[name=email]').getAttribute('aria-describedby')==='email-error');
await page.locator('[name=name]').fill('Synthetic Review');await page.locator('[name=email]').fill(' review@example.invalid ');await page.locator('[name=message]').fill('Synthetic test only');
for(const scenario of ['failure','http']){mode=scenario;await page.getByRole('button',{name:'Send Inquiry'}).click();await page.getByRole('alert').waitFor();check(`${scenario} retains draft`,await page.locator('[name=message]').inputValue()==='Synthetic test only');}
mode='pending';await page.getByRole('button',{name:'Send Inquiry'}).click();check('pending fields protected',await page.locator('[name=message]').isDisabled());await page.getByRole('button',{name:'Cancel waiting'}).click();await page.locator('[name=message]').waitFor();check('cancel restores editing',await page.getByRole('button',{name:'Send Inquiry'}).isEnabled());check('cancel retains draft',await page.locator('[name=message]').inputValue()==='Synthetic test only');
mode='pending';await page.getByRole('button',{name:'Send Inquiry'}).click();await page.getByRole('alert').waitFor({timeout:20000});check('timeout retains draft',await page.locator('[name=message]').inputValue()==='Synthetic test only');
mode='success';await page.getByRole('button',{name:'Send Inquiry'}).click();await page.getByText('Message sent.',{exact:true}).waitFor();check('accepted synthetic response success',await page.getByRole('status').isVisible());await page.getByRole('button',{name:'Send another message'}).click();check('success clears submitted draft',await page.locator('[name=message]').inputValue()==='');
check('zero browser errors',errors.length===0);
await fs.writeFile('evidence/local.json',JSON.stringify({checks:results.length,results,errors,syntheticRequests:posts},null,2));
console.log(JSON.stringify({checks:results.length,errors,syntheticRequests:posts}));
await browser.close();
