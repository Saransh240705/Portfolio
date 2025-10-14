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
      className="min-h-screen min-w-full xl:py-8 2xl:py-8 px-8 relative"
    >
      <div className="bg-[#4949CE] h-[9rem] w-[9rem] -z-100 top-[35rem] left-[15rem] absolute rounded-full blur-[6rem]" />
      <div className="bg-[#4949CE] h-[9rem] w-[9rem] -z-100 top-[15rem] right-[15rem] absolute rounded-full blur-[6rem]" />
      <div className="max-w-6xl mx-auto">
        <h1 className="text-white font-ObjectSans xl:text-5xl 2xl:text-5xl text-2xl mb-8 text-center">
          Your <span className="text-highlighted">Innovative</span> Web
          Developer
        </h1>
  <div className="relative flex">
          <motion.div className="absolute ml-5 xl:ml-18 2xl:ml-18" drag>
            <AboutFrame />
          </motion.div>
          <motion.div className="absolute xl:mt-55 xl:ml-190 ml-52 mt-250" drag>
            <PortraitFrame />
          </motion.div>
          <motion.div
            className="absolute xl:mt-130 xl:ml-115 2xl:mt-130 2xl:ml-115 mt-250 inset-0"
            drag
          >
            <MeOnline />
          </motion.div>
          <motion.div className="absolute hidden xl:block 2xl:block mt-107 ml-140" drag>
            <CollaborationFrame />
          </motion.div>
          <motion.div className="absolute xl:mt-107 2xl:mt-107 mt-210" drag>
            <WhereIWorkFrame />
          </motion.div>
        </div>
        </div>

      <div className="text-white xl:mt-190 xl:ml-155 mt-320 ml-28 rounded-sm group cursor-pointer max-w-fit max-h-[2rem] overflow-hidden flex gap-2 items-center  border border-gray-600 font-NeueMachina hover:border-[#4949CE] transition-colors duration-200">
        <Button text="about-me →" width={145} height={32} className="w-fit" />
      </div>
    </section>
  );
};

export default About;
