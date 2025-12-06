import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { HomeEn, HomeAr, AboutEn, AboutAr } from "@/i18n/index";


// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    Home: HomeEn,
    About:AboutEn
  },
  ar: {
    Home: HomeAr,
    About:AboutAr
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "ar",
    fallbackLng:"en",
    ns:["Home","About"],

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;