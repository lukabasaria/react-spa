import { useFetchData } from "../hooks/useFetchData";
import { motion } from "framer-motion";

const DataPage = () => {
  const { data, loading, error } = useFetchData(
    "https://jsonplaceholder.typicode.com/posts"
  );

  if (loading)
    return (
      <motion.div
        className="text-center p-10 text-gray-500 dark:text-gray-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        Loading...
      </motion.div>
    );
  if (error)
    return (
      <motion.div
        className="text-center p-10 text-red-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        Error loading data
      </motion.div>
    );

  return (
    <motion.div
      className="p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
        Data from API
      </h1>
      <ul className="space-y-3">
        {data.slice(0, 10).map((item) => (
          <motion.li
            key={item.id}
            className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow"
            whileHover={{ scale: 1.02 }}
          >
            {item.title}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default DataPage;
