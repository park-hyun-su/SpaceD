const root = document.documentElement;
let savedLanguage = 'en';
try { savedLanguage = localStorage.getItem('spaced-lang') || 'en'; } catch (e) {}
root.lang = savedLanguage === 'ko' ? 'ko' : 'en';
document.querySelector('.lang-toggle')?.addEventListener('click', () => {
  root.lang = root.lang === 'en' ? 'ko' : 'en';
  try { localStorage.setItem('spaced-lang', root.lang); } catch (e) {}
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

(()=>{const vids=[...document.querySelectorAll('video[autoplay]')];const still=matchMedia('(prefers-reduced-motion: reduce)').matches;vids.forEach(v=>{v.muted=true;if(still){v.removeAttribute('autoplay');v.pause();return;}if('IntersectionObserver' in window){new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){const p=v.play();p&&p.catch(()=>{});}else v.pause();}),{rootMargin:'120px'}).observe(v);}});})();
