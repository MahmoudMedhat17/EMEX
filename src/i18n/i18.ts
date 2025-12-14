import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { HomeEn, HomeAr, AboutEn, AboutAr, ParcelDeliveryEn, ParcelDeliveryAr, CustomsClearanceEn, CustomsClearanceAr, StorageServiceEn, StorageServiceAr, DryRefrigeratedTransportEn, DryRefrigeratedTransportAr, ContactEn, ContactAr } from "@/i18n/index";


// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    Home: HomeEn,
    About: AboutEn,
    ParcelDelivery: ParcelDeliveryEn,
    CustomsClearance: CustomsClearanceEn,
    StorageService: StorageServiceEn,
    DryRefrigeratedTransport: DryRefrigeratedTransportEn,
    Contact:ContactEn
  },
  ar: {
    Home: HomeAr,
    About: AboutAr,
    ParcelDelivery: ParcelDeliveryAr,
    CustomsClearance: CustomsClearanceAr,
    StorageService: StorageServiceAr,
    DryRefrigeratedTransport: DryRefrigeratedTransportAr,
    Contact:ContactAr    
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "ar",
    fallbackLng:"en",
    ns:["Home","About","ParcelDelivery","CustomsClearance","StorageService" , "DryRefrigeratedTransport", "Contact"],

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;