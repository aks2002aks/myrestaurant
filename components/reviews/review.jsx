import React, { useState, useEffect } from "react";
import EventRating from "./rating";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Review = ({reviewRef}) => {
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    const fetchRestaurantReviews = async () => {
      const response = await fetch("/api/getRestaurantReviews");
      const data = await response.json();
      console.log(data);
      setReviews(data);
    };
    fetchRestaurantReviews();
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
    <div className="bg-yellow-50" ref={reviewRef}>
      <motion.section
        className="text-gray-600 body-font "
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        ref={ref}
      >
        <div className="container px-5 py-24 mx-auto">
          <motion.h1
            className="text-center text-3xl  font-extrabold title-font  text-gray-900 mb-20"
            variants={itemVariants}
          >
            Customer Reviews
          </motion.h1>
          <motion.div
            className="flex flex-nowrap -m-4 overflow-x-auto"
            style={{ overflowY: "hidden" }} // Add this line to hide horizontal scroll
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            ref={ref}
          >
            {reviews?.map((review, index) => (
              <motion.div
                className=" lg:mb-0 mb-6 p-4"
                style={{ minWidth: "300px" }}
                variants={itemVariants}
                key={index}
              >
                <div className="h-full text-center">
                  <img
                    alt="testimonial"
                    className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                    src={`/person_${index + 1}.jpg`}
                    width={302}
                    height={302}
                  />
                  <EventRating rating={review?.rating} />
                  <p className="leading-relaxed pt-2">{review?.comment}</p>
                  <span className="inline-block h-1 w-10 rounded bg-red-500 mt-6 mb-4"></span>
                  <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                    {review?.customer_name}
                  </h2>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Review;
