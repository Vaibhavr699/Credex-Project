import { motion } from 'framer-motion';

const steps = [
  { icon: '📤', title: 'Upload License', desc: 'Submit your software license details securely.' },
  { icon: '💡', title: 'Get Valuation', desc: 'We evaluate and price your license instantly.' },
  { icon: '💸', title: 'Get Paid', desc: 'Receive payment directly to your account.' },
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-dark text-center font-outfit text-dark dark:text-white transition-colors duration-300">
      <h2 className="text-3xl font-bold mb-12">How It Works</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-6 max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className={`bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-xl transition duration-300 relative`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.3 }}
          >
            {/* Step Number */}
            <div className="absolute top-[-10px] left-[-10px] bg-red-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
              {index + 1}
            </div>

            {/* Step Icon */}
            <div className="text-4xl mb-4">{step.icon}</div>

            {/* Step Title */}
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>

            {/* Step Description */}
            <p className="text-gray-600 dark:text-gray-300">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
