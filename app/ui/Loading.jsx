"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loading({ onLoadingComplete }) {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "<S>aransh";
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + fullText[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 150); // Typing speed in milliseconds

      return () => clearTimeout(timeout);
    } else {
      // Wait a bit after typing is complete, then fade out
      const completeTimeout = setTimeout(() => {
        setIsComplete(true);
        // Call the callback after fade out animation
        setTimeout(() => {
          if (onLoadingComplete) onLoadingComplete();
        }, 500);
      }, 800);

      return () => clearTimeout(completeTimeout);
    }
  }, [currentIndex, fullText.length, onLoadingComplete]);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
        >
          <div className="flex items-center justify-center">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-NeueMachina text-white">
              <span className="text-highlighted">{displayedText.slice(0, 3)}</span>
              <span>{displayedText.slice(3)}</span>
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="inline-block ml-1"
              >
                |
              </motion.span>
            </h1>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
