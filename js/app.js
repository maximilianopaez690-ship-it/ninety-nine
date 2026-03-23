const translations = {
  es: {
    heroLine1: 'Bienvenidos a <span class="brand-word">Kyugard</span>.',
    heroLine2: 'Una revolución del pensamiento.',
    start: 'Comenzar',
    patreon: 'Patreon',

    bridgeMain: 'Cada época tiene su revolución.',
    bridgeSub: 'Esta es la nuestra.',

    manifestLine1: 'Kyugard busca una revolución en la democracia:',
    manifestLine2: 'una evolución en la que los presidentes, senadores y gobernadores dejen de existir.',
    manifestLine3: '“Revolución”.',
    manifestLine4: 'Sé lo que estás pensando:',
    manifestLine5: 'que solo hay una forma de conseguirlo.',
    manifestLine6: 'Pero no.',
    manifestLine7: 'Existe otra vía.',
    manifestLine8: 'Una vía pacífica.',
    manifestLine9: 'Una vía en la que no tengas que sacrificar tu vida.',
    manifestLine10: 'Solo tengas que comprometerte a comprender qué significa la evolución de la democracia.',

    courseMain: 'Si querés entender Kyugard, este es el primer paso.',
    courseSub: 'Comenzá por sus fundamentos.',

    supportMain: 'Kyugard no se construye solo.',
    supportSub: 'Se construye con quienes deciden pensar diferente.'
  },

  en: {
    heroLine1: 'Welcome to <span class="brand-word">Kyugard</span>.',
    heroLine2: 'A revolution of thought.',
    start: 'Start',
    patreon: 'Patreon',

    bridgeMain: 'Every era has its revolution.',
    bridgeSub: 'This is ours.',

    manifestLine1: 'Kyugard seeks a revolution in democracy:',
    manifestLine2: 'an evolution in which presidents, senators and governors cease to exist.',
    manifestLine3: '“Revolution”.',
    manifestLine4: 'I know what you are thinking:',
    manifestLine5: 'that there is only one way to achieve it.',
    manifestLine6: 'But no.',
    manifestLine7: 'There is another way.',
    manifestLine8: 'A peaceful one.',
    manifestLine9: 'A path in which you do not have to sacrifice your life.',
    manifestLine10: 'You only have to commit yourself to understanding what the evolution of democracy means.',

    courseMain: 'If you want to understand Kyugard, this is the first step.',
    courseSub: 'Start with its foundations.',

    supportMain: 'Kyugard is not built alone.',
    supportSub: 'It is built by those who choose to think differently.'
  }
};

let currentLang = localStorage.getItem('lang') || 'es';

function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const key = element.getAttribute('data-i18n');
    if (translations[currentLang][key] !== undefined) {
      element.innerHTML = translations[currentLang][key];
    }
  });

  const langBtn = document.getElementById('lang-btn');
  if (langBtn) {
    langBtn.textContent = currentLang === 'es' ? 'English' : 'Español';
  }

  document.documentElement.lang = currentLang;
}

function toggleLanguage() {
  currentLang = currentLang === 'es' ? 'en' : 'es';
  localStorage.setItem('lang', currentLang);
  applyTranslations();
}

document.addEventListener('DOMContentLoaded', () => {
  applyTranslations();

  const langBtn = document.getElementById('lang-btn');
  if (langBtn) {
    langBtn.addEventListener('click', toggleLanguage);
  }
});
