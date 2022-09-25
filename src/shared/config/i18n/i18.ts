import i18next from "i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

i18next
  .use(Backend)
  .use(I18nextBrowserLanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "ru",
    debug: __IS_DEV__,
    interpolation: {
      escapeValue: false,
    },
    backend: {
      // for all available options read the backend's repository readme file
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },
  });
