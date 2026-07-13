const languageToggle = document.querySelector('.lang-toggle');
const savedLanguage = localStorage.getItem('spaced-language') || 'en';
document.documentElement.lang = savedLanguage;
languageToggle?.addEventListener('click', () => {
  const root = document.documentElement;
  root.lang = root.lang === 'en' ? 'ko' : 'en';
  localStorage.setItem('spaced-language', root.lang);
});
