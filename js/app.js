const translations = {
  es: {
    heroKicker: 'Cada época tiene su revolución.<br>Esta es la nuestra.',
    heroTitle: 'Kyugard.',
    heroSubtitle: 'Una revolución del pensamiento.',
    start: 'Comenzar',
    patreon: 'Patreon'
  },
  en: {
    heroKicker: 'Every era has its revolution.<br>This is ours.',
    heroTitle: 'Kyugard.',
    heroSubtitle: 'A revolution of thought.',
    start: 'Start',
    patreon: 'Patreon'
  }
};

let currentLang = localStorage.getItem('lang') || 'es';

function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[currentLang][key]) {
      el.innerHTML = translations[currentLang][key];
    }
  });

  const btn = document.getElementById('lang-btn');
  if (btn) {
    btn.textContent = currentLang === 'es' ? 'English' : 'Español';
  }
}

function toggleLanguage() {
  currentLang = currentLang === 'es' ? 'en' : 'es';
  localStorage.setItem('lang', currentLang);
  applyTranslations();
}

document.addEventListener('DOMContentLoaded', () => {
  applyTranslations();

  const btn = document.getElementById('lang-btn');
  if (btn) {
    btn.addEventListener('click', toggleLanguage);
  }
});
