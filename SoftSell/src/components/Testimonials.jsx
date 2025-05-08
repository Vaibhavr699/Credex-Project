import React from "react";
import { motion } from "framer-motion";
import { assets, feedback } from "../assets/assets";

const Testimonial = () => (
  <motion.div
    initial={{ opacity: 0, x: 100 }}
    transition={{ duration: 1 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="container mx-auto py-4 pt-16 px-6 md:px-20 lg:p-22 bg-gray-50 dark:bg-dark overflow-hidden font-outfit"
    id="Testimonial"
  >
    <h1 className="text-5xl sm:text-4xl font-semibold mb-2 text-center text-gray-800 dark:text-gray-100">
      Customer
      <span className="pl-2 underline underline-offset-2 decoration-1 font-light">
        Testimonials
      </span>
    </h1>
    <p className="text-gray-500 dark:text-gray-300 max-w-80 text-center mt-2 mx-auto">
      Real Stories from those who found value with us
    </p>

    <div className="flex flex-wrap justify-center gap-8 mt-10">
      {feedback.map((testimonial, index) => (
        <div
          key={index}
          className="max-w-[340px] border border-gray-200 dark:border-gray-700 shadow-lg rounded px-8 py-12 text-center bg-white dark:bg-gray-800"
        >
          <img
            className="w-20 h-20 rounded-full mx-auto mb-4"
            src={testimonial.image}
            alt={testimonial.alt}
          />
          <h2 className="text-xl text-gray-600 dark:text-gray-200 font-medium">{testimonial.name}</h2>
          <p className="mx-auto text-gray-500 dark:text-gray-400 text-sm">{testimonial.title}</p>

          <div className="flex justify-center gap-1 text-red-500 mt-4 mb-4">
            {Array.from({ length: testimonial.rating }, (_, i) => (
              <img key={i} src={assets.star_icon} alt="star" className="w-4 h-4" />
            ))}
          </div>

          <p className="text-gray-600 dark:text-gray-300 mx-auto pt-2 italic">“{testimonial.text}”</p>
        </div>
      ))}
    </div>
  </motion.div>
);

export default Testimonial;
