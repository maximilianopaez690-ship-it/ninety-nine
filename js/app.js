const translations = {
  es: {
    hero: "Bienvenidos a Kyugard.\nUna revolución del pensamiento.",
    start: "Comenzar",
    puente: "Cada época tiene su revolución.\nEsta es la nuestra.",
    explicacion: "Pensamos diferente.\nY eso siempre fue un problema.\n\nKyugard parte de una idea simple:\nlas diferencias no deben eliminarse.\n\nDeben entenderse.\n\nPorque cuando se analizan\ny se ponen a prueba,\n\nlas diferencias dejan de ser un conflicto.\n\nSe convierten en una herramienta\npara tomar mejores decisiones.\n\nEso es una revolución del pensamiento.",
    transicion: "Kyugard comienza como pensamiento.\nY se convierte en sistema.",
    curso: "Si querés entender Kyugard,\neste es el primer paso.\n\nComenzá por sus fundamentos.",
    cierre: "Kyugard no se construye solo.\n\nSe construye con quienes deciden\npensar diferente."
  },
  en: {
    hero: "Welcome to Kyugard.\nA revolution of thought.",
    start: "Start",
    puente: "Every era has its revolution.\nThis is ours.",
    explicacion: "We think differently.\nAnd that has always been a problem.\n\nKyugard starts from a simple idea:\ndifferences should not be eliminated.\n\nThey must be understood.\n\nBecause when they are analyzed\nand tested,\n\ndifferences stop being conflict.\n\nThey become a tool\nfor better decisions.\n\nThat is a revolution of thought.",
    transicion: "Kyugard begins as thought.\nAnd becomes a system.",
    curso: "If you want to understand Kyugard,\nthis is the first step.\n\nStart with its foundations.",
    cierre: "Kyugard is not built alone.\n\nIt is built by those who choose\nto think differently."
  }
};

let lang = localStorage.getItem("lang") || "es";

function applyTranslations() {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    el.innerText = translations[lang][key];
  });
}

function toggleLanguage() {
  lang = lang === "es" ? "en" : "es";
  localStorage.setItem("lang", lang);
  applyTranslations();
}

function goCourse() {
  window.location.href = "./modules.html";
}

document.addEventListener("DOMContentLoaded", applyTranslations);
