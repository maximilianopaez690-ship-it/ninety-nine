const translations = {
  es: {
    hero: "Bienvenidos a Kyugard.<br>Una revolución del pensamiento.",
    start: "Comenzar",
    puente: "Cada época tiene su revolución.<br>Esta es la nuestra.",
    explicacion: "Pensamos diferente.<br>Y eso siempre fue un problema.<br><br>Kyugard parte de una idea simple:<br>las diferencias no deben eliminarse.<br><br>Deben entenderse.<br><br>Porque cuando se analizan<br>y se ponen a prueba,<br><br>las diferencias dejan de ser un conflicto.<br><br>Se convierten en una herramienta<br>para tomar mejores decisiones.<br><br>Eso es una revolución del pensamiento.",
    sistema: "Kyugard comienza como pensamiento.<br>Y se convierte en sistema. ⚙️",
    curso: "Si querés entender Kyugard,<br>este es el primer paso.<br><br>Comenzá por sus fundamentos. 🎓",
    cierre: "Kyugard no se construye solo. 🤝<br><br>Se construye con quienes deciden<br>pensar diferente."
  },
  en: {
    hero: "Welcome to Kyugard.<br>A revolution of thought.",
    start: "Start",
    puente: "Every era has its revolution.<br>This is ours.",
    explicacion: "We think differently.<br>And that has always been a problem.<br><br>Kyugard starts from a simple idea:<br>differences should not be eliminated.<br><br>They must be understood.<br><br>Because when analyzed<br>and tested,<br><br>differences stop being conflict.<br><br>They become a tool<br>for better decisions.<br><br>This is a revolution of thought.",
    sistema: "Kyugard begins as thought.<br>And becomes a system. ⚙️",
    curso: "If you want to understand Kyugard,<br>this is the first step.<br><br>Start with its foundations. 🎓",
    cierre: "Kyugard is not built alone. 🤝<br><br>It is built by those who choose<br>to think differently."
  }
};

let lang = localStorage.getItem("lang") || "es";

function applyTranslations() {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    el.innerHTML = translations[lang][key];
  });

  document.getElementById("lang-btn").textContent =
    lang === "es" ? "English" : "Español";
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
