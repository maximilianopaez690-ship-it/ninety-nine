const translations = {
  es: {
    heroKicker: "Cada época tiene su revolución.<br>Esta es la nuestra.",
    heroTitle: "Kyugard.",
    heroSubtitle: "Una revolución del pensamiento.",
    start: "Comenzar",
    patreon: "Patreon",

    block1Line1: "Pensamos que la democracia es perfecta.",
    block1Line2: "Que ya no puede evolucionar.",

    manifest1: "Kyugard busca una revolución en la democracia.",
    manifest2: "Una revolución en la que los presidentes, gobernadores y representantes en general dejen de existir.",
    manifest3: "“Revolución”.",
    manifest4: "Sé lo que estás pensando:",
    manifest5: "que solo hay una forma de conseguirlo.",
    manifest6: "Que implica derramar sangre.",
    manifest7: "Pero no.",
    manifest8: "Existe otra vía.",
    manifest9: "Una vía pacífica.",
    manifest10: "Una vía en la que no tengas que sacrificar tu vida.",
    manifest11: "Solo tenés que comprometerte a entender qué significa esta evolución de la democracia.",

    idea1: "Kyugard comienza como una revolución del pensamiento.",
    idea2: "Para que la democracia evolucione, primero tenemos que entender algo fundamental:",
    idea3: "la democracia no es perfecta.",
    idea4: "Es gris.",
    idea5: "Y solo cuando entendemos eso, podemos empezar a transformarla.",

    course1: "Si querés entender Kyugard, este es el primer paso.",
    course2: "Comenzá por entender sus fundamentos.",

    wake1: "Es momento de despertar.",
    wake2: "A los hombres y mujeres grises del mundo.",

    support1: "Kyugard no se construye solo.",
    support2: "Se construye con quienes deciden pensar diferente."
  },

  en: {
    heroKicker: "Every era has its revolution.<br>This is ours.",
    heroTitle: "Kyugard.",
    heroSubtitle: "A revolution of thought.",
    start: "Start",
    patreon: "Patreon",

    block1Line1: "We believe democracy is perfect.",
    block1Line2: "That it can no longer evolve.",

    manifest1: "Kyugard seeks a revolution in democracy.",
    manifest2: "A revolution in which presidents, governors and representatives cease to exist.",
    manifest3: "“Revolution”.",
    manifest4: "I know what you're thinking:",
    manifest5: "that there is only one way to achieve it.",
    manifest6: "That it requires bloodshed.",
    manifest7: "But no.",
    manifest8: "There is another way.",
    manifest9: "A peaceful way.",
    manifest10: "A way where you don't have to sacrifice your life.",
    manifest11: "You just have to commit to understanding what this evolution of democracy means.",

    idea1: "Kyugard begins as a revolution of thought.",
    idea2: "For democracy to evolve, we must first understand something fundamental:",
    idea3: "democracy is not perfect.",
    idea4: "It is gray.",
    idea5: "And only when we understand that, we can begin to transform it.",

    course1: "If you want to understand Kyugard, this is the first step.",
    course2: "Start by understanding its foundations.",

    wake1: "It's time to awaken.",
    wake2: "The gray men and women of the world.",

    support1: "Kyugard is not built alone.",
    support2: "It is built by those who choose to think differently."
  }
};

// idioma actual
let currentLang = localStorage.getItem("lang") || "es";

// aplicar traducciones
function applyTranslations() {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    const value = translations[currentLang][key];

    if (value) {
      el.innerHTML = value;
    }
  });

  const btn = document.getElementById("lang-btn");
  if (btn) {
    btn.textContent = currentLang === "es" ? "English" : "Español";
  }

  document.documentElement.lang = currentLang;
}

// cambiar idioma
function toggleLanguage() {
  currentLang = currentLang === "es" ? "en" : "es";
  localStorage.setItem("lang", currentLang);
  applyTranslations();
}

// iniciar
document.addEventListener("DOMContentLoaded", () => {
  applyTranslations();

  const btn = document.getElementById("lang-btn");
  if (btn) {
    btn.addEventListener("click", toggleLanguage);
  }
});
