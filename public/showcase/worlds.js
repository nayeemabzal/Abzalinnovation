
document.querySelectorAll('[data-demo]').forEach(panel=>{
  const buttons=[...panel.querySelectorAll('button[data-state]')];
  const steps=[...panel.querySelectorAll('[data-step]')];
  for(const button of buttons)button.addEventListener('click',()=>{
    const i=button.dataset.state;
    panel.style.setProperty('--state',i);
    for(const b of buttons)b.setAttribute('aria-pressed',String(b===button));
    for(const p of steps)p.hidden=p.dataset.step!==i;
    panel.querySelectorAll('[data-stage-visual],[data-stage-copy]').forEach(el=>{el.hidden=i==='0';});
  });
});
const toggle=document.querySelector('[data-quote-toggle]');
if(toggle){
  const quote=document.querySelector('[data-quote]');
  const added=quote.querySelector('[data-extra-line]');
  const total=quote.querySelector('[data-quote-total]');
  const money=new Intl.NumberFormat('en-US',{style:'currency',currency:'USD',maximumFractionDigits:0});
  const update=()=>{
    added.hidden=!toggle.checked;
    total.textContent=money.format(Number(quote.dataset.base)+(toggle.checked?Number(quote.dataset.extra):0));
  };
  toggle.addEventListener('change',update);
  window.addEventListener('pageshow',update);
  update();
}
