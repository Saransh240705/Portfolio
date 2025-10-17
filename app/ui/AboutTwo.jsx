"use client";

import { useRef, useEffect, useState } from "react";
import AboutFrame from "./AboutFrame";
import { motion } from "framer-motion";
import PortraitFrame from "./PortraitFrame";
import CollaborationFrame from "./CollaborationFrame";
import WhereIWorkFrame from "./WhereIWorkFrame";
import MeOnline from "./MeOnline";

const AboutTwo = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  // Create refs for all draggable elements
  const constraintref = useRef(null);
  const aboutFrameRef = useRef(null);
  const portraitFrameRef = useRef(null);
  const meOnlineRef = useRef(null);
  const collaborationFrameRef = useRef(null);
  const whereIWorkFrameRef = useRef(null);

  useEffect(() => {
      // Check if it's desktop size
      const checkIsDesktop = () => {
        setIsDesktop(window.innerWidth >= 1024); // lg breakpoint and above
      };
  
      checkIsDesktop();
      window.addEventListener('resize', checkIsDesktop);
  
      return () => {
        window.removeEventListener('resize', checkIsDesktop);
      };
    }, []);

  return (
    <section
      ref={constraintref}
      className="min-h-screen min-w-full py-8 mb-100 px-8 relative"
    >
      <div className="bg-[#E24E62] opacity-50 h-[9rem] w-[9rem] -z-100 top-[35rem] left-[15rem] absolute rounded-full blur-[6rem]" />
      <div className="bg-[#E24E62] opacity-50 h-[9rem] w-[9rem] -z-100 top-[15rem] right-[15rem] absolute rounded-full blur-[6rem]" />
      <div className="max-w-6xl mx-auto">
        <div className="relative m-auto flex">
          <motion.div
            ref={aboutFrameRef}
            className="absolute -ml-5 xl:ml-18 2xl:ml-18"
            drag={isDesktop}
            dragConstraints={isDesktop ? constraintref : undefined}
          >
            <AboutFrame />
          </motion.div>
          <motion.div
            ref={portraitFrameRef}
            className="absolute xl:mt-55 xl:ml-190 ml-52 mt-235"
            drag={isDesktop}
            dragConstraints={isDesktop ? constraintref : undefined}
          >
            <PortraitFrame />
          </motion.div>
          <motion.div
            ref={meOnlineRef}
            className="absolute xl:mt-130 xl:ml-115 2xl:mt-130 2xl:ml-115 mt-235 inset-0"
            drag={isDesktop}
            dragConstraints={isDesktop ? constraintref : undefined}
          >
            <MeOnline />
          </motion.div>
          <motion.div
            ref={collaborationFrameRef}
            className="absolute hidden xl:block 2xl:block mt-107 ml-140"
            drag={isDesktop}
            dragConstraints={isDesktop ? constraintref : undefined}
          >
            <CollaborationFrame />
          </motion.div>
          <motion.div
            ref={whereIWorkFrameRef}
            className="absolute xl:mt-107 2xl:mt-107 mt-198"
            drag={isDesktop}
            dragConstraints={isDesktop ? constraintref : undefined}
          >
            <WhereIWorkFrame />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutTwo;
