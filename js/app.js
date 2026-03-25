const t = {
  es: {
    heroKicker: "Cada época tiene su revolución.<br>Esta es la nuestra.",
    heroTitle: "Kyugard.",
    heroSubtitle: "Una revolución del pensamiento.",
    start: "Comenzar",
    patreon: "Patreon",

    block1: "Pensamos que la democracia es perfecta.",
    block2: "Que ya no puede evolucionar.",

    m1: "Kyugard busca una revolución en la democracia.",
    m2: "Una revolución en la que los presidentes, gobernadores y representantes en general dejen de existir.",
    m3: "“Revolución”.",
    m4: "Sé lo que estás pensando:",
    m5: "que solo hay una forma de conseguirlo.",
    m6: "Que implica derramar sangre.",
    m7: "Pero no.",
    m8: "Existe otra vía.",
    m9: "Una vía pacífica.",
    m10: "Una vía en la que no tengas que sacrificar tu vida.",
    m11: "Solo tenés que comprometerte a entender qué significa esta evolución de la democracia.",

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
    patreon: "Patreon"
  }
};

let lang = localStorage.getItem("lang") || "es";

function apply() {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    let key = el.dataset.i18n;
    if (t[lang][key]) el.innerHTML = t[lang][key];
  });

  document.getElementById("lang-btn").textContent =
    lang === "es" ? "English" : "Español";
}

document.getElementById("lang-btn").onclick = () => {
  lang = lang === "es" ? "en" : "es";
  localStorage.setItem("lang", lang);
  apply();
};

apply();
