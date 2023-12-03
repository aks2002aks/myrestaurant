import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const Sustainability = ({sustainabilityRef}) => {
  const [sustainability, setSustainability] = useState(null);

  useEffect(() => {
    const fetchRestaurantSustainability = async () => {
      const response = await fetch("/api/getRestaurantSustainability");
      const data = await response.json();
      console.log(data);
      setSustainability(data);
    };
    fetchRestaurantSustainability();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.75, delay: 0.5 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger once when the section comes into view
  });

  const controls = useAnimation();

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <div ref={sustainabilityRef}>
      <div className="container mx-auto p-8 px-5 py-24" ref={ref}>
        <motion.header
          className="text-center mb-8"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          <motion.h1 className="text-4xl font-bold" variants={itemVariants}>
            Sustainability Initiatives
          </motion.h1>
        </motion.header>

        <motion.div
          className="flex flex-nowrap space-x-8 overflow-x-auto"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          style={{ overflowY: "hidden" }}
        >
          {sustainability?.initiatives?.map((initiative, index) => (
            <motion.div
              className="bg-white rounded-lg shadow-md mb-4 text-center"
              key={index}
              variants={itemVariants}
              style={{ minWidth: "300px" }}
            >
              <a class="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  class="object-cover object-center w-full h-full block"
                  src={`https://source.unsplash.com/random/?${initiative?.name}}`}
                />
              </a>
              <h3
                className="text-xl font-bold mb-2  p-3"
                variants={itemVariants}
              >
                {initiative?.name}
              </h3>
              <p className="text-gray-600  p-3" variants={itemVariants}>
                {initiative?.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
