"use client";

import { useRef } from "react";
import AboutFrame from "./AboutFrame";
import { motion } from "framer-motion";
import PortraitFrame from "./PortraitFrame";
import CollaborationFrame from "./CollaborationFrame";
import WhereIWorkFrame from "./WhereIWorkFrame";
import MeOnline from "./MeOnline";
import Button from "./Button";

const AboutTwo = () => {
  const constraintref = useRef(null);
  return (
    <section
      ref={constraintref}
      className="min-h-screen min-w-full py-8 px-8 relative"
    >
      <div className="bg-[#E24E62] opacity-50 h-[9rem] w-[9rem] -z-100 top-[35rem] left-[15rem] absolute rounded-full blur-[6rem]" />
      <div className="bg-[#E24E62] opacity-50 h-[9rem] w-[9rem] -z-100 top-[15rem] right-[15rem] absolute rounded-full blur-[6rem]" />
      <div className="max-w-6xl mx-auto">
  <div className="relative flex">
          <motion.div className="absolute  ml-18" drag>
            <AboutFrame />
          </motion.div>
          <motion.div className="absolute mt-55 ml-190" drag>
            <PortraitFrame />
          </motion.div>
          <motion.div
            className="absolute mt-130 ml-115   inset-0"
            drag
          >
            <MeOnline />
          </motion.div>
          <motion.div className="absolute  mt-107 ml-140" drag>
            <CollaborationFrame />
          </motion.div>
          <motion.div className="absolute mt-107" drag>
            <WhereIWorkFrame />
          </motion.div>
        </div>
        </div>
    </section>
  );
};

export default AboutTwo;
