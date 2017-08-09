const getLange = () => {
  let currentLang = navigator.language;
  if (!currentLang) {
    currentLang = navigator.browserLanguage;
  } else {
    currentLang = navigator.language;
  }
  return currentLang;
};
export default getLange;
