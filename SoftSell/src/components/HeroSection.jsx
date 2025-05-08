import { motion } from "framer-motion";

const HeroSection = ({ isDarkMode }) => {
  const bgGradient = isDarkMode
    ? "bg-gradient-to-tr from-gray-800 via-gray-900 to-black"
    : "bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500";

  return (
    <section
      className={`${bgGradient} text-white py-24 px-6 min-h-screen flex items-center justify-center font-outfit transition-all duration-500 ease-in-out`}
    >
      <motion.div
        className="relative text-center z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Don’t Let Your Software Collect Dust
        </h1>
        <p className="text-xl md:text-2xl mb-6">
          Turn unused licenses into extra revenue today — fast, secure, and
          stress-free with SoftSell.
        </p>

        <a
          href="#contact"
          className="inline-block bg-white text-black font-semibold px-8 py-4 rounded-full shadow-md hover:bg-gradient-to-r hover:from-indigo-500 hover:to-sky-500 hover:text-white transition-all duration-300 ease-in-out transform hover:scale-110"
        >
          Sell My Licenses
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
