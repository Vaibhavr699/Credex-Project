import { motion } from 'framer-motion';

const values = [
  { icon: '⚡', title: 'Lightning-Fast Payments', desc: 'Receive your earnings in under 24 hours after validation.' },
  { icon: '🔒', title: 'Bank-Level Security', desc: 'Your software and data are handled with strict confidentiality and protection.' },
  { icon: '🌍', title: 'Worldwide Selling Power', desc: 'List and sell your licenses to buyers across the globe with ease.' },
  { icon: '💼', title: 'Built for Businesses', desc: 'Designed to support bulk transactions for enterprises, resellers, and IT managers.' },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-white dark:bg-dark text-dark dark:text-white transition-colors duration-300 font-outfit">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">Why Choose SoftSell?</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-6 max-w-6xl mx-auto">
        {values.map((val, i) => {
          const isEven = i % 2 === 0;
          const rotatePattern = isEven
            ? [0, 5, -5, 3, -3, 0]      // Clockwise then anti
            : [0, -5, 5, -3, 3, 0];     // Anti-clockwise then clockwise

          return (
            <motion.div
              key={i}
              className="p-6 bg-gray-100 dark:bg-gray-800 rounded-xl text-center shadow hover:shadow-xl transition duration-300"
              initial={{ opacity: 0, rotate: 0 }}
              whileInView={{
                opacity: 1,
                rotate: rotatePattern,
                transition: {
                  delay: i * 0.2,
                  duration: 0.8,
                  ease: 'easeInOut',
                },
              }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <div className="text-3xl mb-3">{val.icon}</div>
              <h4 className="text-lg font-semibold mb-2">{val.title}</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">{val.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default WhyChooseUs;
