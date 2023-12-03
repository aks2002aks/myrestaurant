import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IMAGES } from "./Images";

const preloadImages = (images, callback) => {
  let loadedImages = 0;

  images.forEach((image, index) => {
    const img = new Image();
    img.src = image.imageSrc;
    img.onload = () => {
      loadedImages++;
      if (loadedImages === images.length) {
        callback();
      }
    };
  });
};

const App = ({ restaurantName ,homeRef}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const swipeToImage = (newImageIndex) => {
    setActiveImageIndex(newImageIndex);
  };

  useEffect(() => {
    preloadImages(IMAGES, () => {
      setImagesLoaded(true);
    });
  }, []);

  useEffect(() => {
    let interval;
    if (imagesLoaded) {
      interval = setInterval(() => {
        const newImageIndex = (activeImageIndex + 1) % IMAGES.length;
        swipeToImage(newImageIndex);
      }, 5000); // Replace image after 5 seconds
    }

    return () => clearInterval(interval);
  }, [activeImageIndex, imagesLoaded]);

  return (
    <main className="relative h-screen justify-center items-center bg-black" ref={homeRef}>
      <AnimatePresence mode="wait">
        {imagesLoaded && (
          <motion.div
            key={activeImageIndex}
            className="relative w-full h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: "easeOut", duration: 1 }}
          >
            <motion.img
              className="w-full h-full object-cover"
              src={IMAGES[activeImageIndex].imageSrc}
              alt={`Image ${activeImageIndex + 1}`}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ ease: "easeOut", duration: 1 }}
            />
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ ease: "easeOut", duration: 1 }}
            >
              <p className="text-white">
                <span className="text-md sm:text-lg md:text-2xl font-bold border px-2">
                  {restaurantName} Restaurant
                </span>
              </p>
              <p className="pt-2 text-white">
                <span className="text-5xl sm:text-6xl md:text-9xl font-">
                  Best Quality
                </span>
              </p>
              <p className="pt-2 text-white flex items-center justify-center">
                <span className="flex w-10 h-0.5 bg-red-700 mr-4"></span>
                <span className="text-lg md:text-3xl font-cursive">Food</span>
                <span className="flex w-10 h-0.5 bg-red-700 ml-4"></span>
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {IMAGES.map((_, index) => (
          <button
            key={index}
            onClick={() => swipeToImage(index)}
            className={`w-4 h-4 rounded-full bg-white ${
              index === activeImageIndex ? "opacity-100" : "opacity-50"
            }`}
          ></button>
        ))}
      </div>
    </main>
  );
};

export default App;
