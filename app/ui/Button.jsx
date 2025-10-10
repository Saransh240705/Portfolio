"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Button({text, width, height}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="relative  rounded-sm border border-color cursor-pointer overflow-hidden flex items-center justify-center text-white "
      initial={false}
      style={{width: width, height: height}}
    >
      {/* Background animation */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: hovered
            ? "#4949CE"
            : "",
        }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      />

      {/* Text Container */}
      <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
        <motion.span
          key="text"
          animate={{
            x: hovered ? 100 : 0, // slide right on hover
            opacity: hovered ? 0 : 1,
          }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="absolute"
        >
         {text}
        </motion.span>

        <motion.span
          key="text2"
          animate={{
            x: hovered ? 0 : -100, // slide back in from left on hover end
            opacity: hovered ? 1 : 0,
          }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="absolute"
        >
          {text}
        </motion.span>
      </div>
    </motion.div>
  );
}
