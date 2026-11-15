const root = document.documentElement;
let savedLanguage = 'ko';
try { savedLanguage = localStorage.getItem('spaced-language') || 'ko'; } catch (e) {}
root.lang = savedLanguage === 'en' ? 'en' : 'ko';
document.querySelector('.lang-toggle')?.addEventListener('click', () => {
  root.lang = root.lang === 'en' ? 'ko' : 'en';
  try { localStorage.setItem('spaced-language', root.lang); } catch (e) {}
  if (menu) setMenu(menu.getAttribute('aria-expanded') === 'true');
});

const menu = document.querySelector('.menu-button');
const nav = document.querySelector('.nav');
function setMenu(open) {
  if (!menu || !nav) return;
  menu.setAttribute('aria-expanded', String(open));
  nav.classList.toggle('open', open);
  menu.textContent = open ? (document.documentElement.lang==='en'?'Close ×':'닫기 ×') : (document.documentElement.lang==='en'?'Menu ☰':'메뉴 ☰');
}
menu?.addEventListener('click', () => setMenu(menu.getAttribute('aria-expanded') !== 'true'));
nav?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', e => { if (e.key === 'Escape') setMenu(false); });

const siteHeader=document.querySelector('header');const markScrolled=()=>siteHeader&&siteHeader.classList.toggle('scrolled',window.scrollY>40);window.addEventListener('scroll',markScrolled,{passive:true});markScrolled();
document.querySelectorAll('.nav-group').forEach(g=>{const b=g.querySelector('.nav-drop');b.addEventListener('click',e=>{e.stopPropagation();const o=!g.classList.contains('open');g.classList.toggle('open',o);b.setAttribute('aria-expanded',String(o))});});document.addEventListener('click',e=>{document.querySelectorAll('.nav-group.open').forEach(g=>{if(!g.contains(e.target)){g.classList.remove('open');g.querySelector('.nav-drop').setAttribute('aria-expanded','false')}})});document.addEventListener('keydown',e=>{if(e.key==='Escape')document.querySelectorAll('.nav-group.open').forEach(g=>{g.classList.remove('open');g.querySelector('.nav-drop').setAttribute('aria-expanded','false')})});
