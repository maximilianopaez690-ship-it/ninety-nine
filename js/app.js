let currentLang = localStorage.getItem("kyugard_lang") || "es";

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("kyugard_lang", lang);
  applyLanguage(lang);
}

function toggleLanguage() {
  const next = currentLang === "es" ? "en" : "es";
  setLanguage(next);
}
