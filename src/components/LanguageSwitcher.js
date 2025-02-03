import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  return (
    <div className="flex space-x-2">
      <button
        className={`px-4 py-1 rounded ${
          i18n.language === "en" ? "bg-blue-500 text-white" : "bg-gray-200"
        }`}
        onClick={() => i18n.changeLanguage("en")}
      >
        EN
      </button>
      <button
        className={`px-4 py-1 rounded ${
          i18n.language === "ka" ? "bg-blue-500 text-white" : "bg-gray-200"
        }`}
        onClick={() => i18n.changeLanguage("ka")}
      >
        KA
      </button>
    </div>
  );
};

export default LanguageSwitcher;
