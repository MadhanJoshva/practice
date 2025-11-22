import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FoodCarousel = ({ menuItems }) => {
  const [currentIndex, setCurrentIndex] = useState(0);


  const nextItem = () => {
    setCurrentIndex((prev) => (prev + 1) % menuItems.length);
  };

  const prevItem = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? menuItems.length - 1 : prev - 1
    );
  };

  return (
    <div className="relative w-full max-w-xl mx-auto overflow-hidden">
      <div className="flex">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentIndex}
            className="w-full flex-shrink-0 p-4"
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ duration: 0.5 }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={(event, info) => {
              if (info.offset.x < -50) nextItem();
              if (info.offset.x > 50) prevItem();
            }}
          >
            <div className="bg-gray-100 rounded-lg shadow p-6 text-center">
              <img
                src={menuItems[currentIndex].image}
                alt={menuItems[currentIndex].name}
                className="w-40 h-40 mx-auto object-cover rounded"
              />
              <h3 className="mt-4 font-bold">{menuItems[currentIndex].name}</h3>
              <p className="text-gray-600">{menuItems[currentIndex].description}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls */}
      <button
        onClick={prevItem}
        className="absolute top-1/2 left-0 -translate-y-1/2 bg-blue-500 text-white px-3 py-2 rounded hover:bg-blue-600"
      >
        ❮
      </button>
      <button
        onClick={nextItem}
        className="absolute top-1/2 right-0 -translate-y-1/2 bg-white/50 text-white px-3 py-2 rounded hover:bg-blue-600"
      >
        ❯
      </button>
    </div>
  );
};

export default FoodCarousel;
