import React from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex gap-2 items-center ">
      <button
        onClick={() => changeLanguage("en")}
        className={`text-xs uppercase hover:text-yellow-400 ${i18n.language === "en" ? "font-bold text-yellow-400 cursor-pointer" : "text-gray-300"}`}
      >
        EN
      </button>
      <span className="text-gray-500">|</span>
      <button
        onClick={() => changeLanguage("es")}
        className={`text-xs uppercase hover:text-yellow-400 ${i18n.language === "es" ? "font-bold text-yellow-400" : "text-gray-300 cursor-pointer"}`}
      >
        ES
      </button>
      <span className="text-gray-500">|</span>
      <button
        onClick={() => changeLanguage("az")}
        className={`text-xs uppercase hover:text-yellow-400 ${i18n.language === "az" ? "font-bold text-yellow-400" : "text-gray-300 cursor-pointer"}`}
      >
        AZ
      </button>
    </div>
  );
};

export default LanguageSwitcher;
