import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();

  return (
    <motion.div
      className="p-10 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-3xl font-bold text-gray-800 dark:text-black">
        {t("Welcome to my website")}
      </h1>
      <p className="text-gray-600 dark:text-gray-300 mt-4">
        {t("Home description")}
      </p>
    </motion.div>
  );
};

export default Home;
