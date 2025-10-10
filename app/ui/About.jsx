"use client";

import { useRef } from "react";
import AboutFrame from "./AboutFrame";
import { motion } from "framer-motion";
import PortraitFrame from "./PortraitFrame";
import CollaborationFrame from "./CollaborationFrame";
import WhereIWorkFrame from "./WhereIWorkFrame";
import MeOnline from "./MeOnline";
import Button from "./Button";

const About = () => {
  const constraintref = useRef(null);
  return (
    <section
      ref={constraintref}
      className="min-h-screen min-w-full py-8 px-8 relative"
    >
      <div className="bg-[#4949CE] h-[9rem] w-[9rem] -z-100 top-[35rem] left-[15rem] absolute rounded-full blur-[6rem]" />
      <div className="bg-[#4949CE] h-[9rem] w-[9rem] -z-100 top-[15rem] right-[15rem] absolute rounded-full blur-[6rem]" />
      <div className="max-w-6xl mx-auto">
        <h1 className="text-white font-ObjectSans text-5xl mb-8 text-center">
          Your <span className="text-highlighted">Innovative</span> Web
          Developer
        </h1>
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

      <div className="text-white mt-190 ml-155 rounded-sm group cursor-pointer max-w-fit max-h-[2rem] overflow-hidden flex gap-2 items-center  border border-gray-600 font-NeueMachina hover:border-[#4949CE] transition-colors duration-200">
        <Button text="about-me →" width={145} height={32} className="w-fit" />
      </div>
    </section>
  );
};

export default About;
