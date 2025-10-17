"use client";

import { useRef, useEffect, useState } from "react";
import AboutFrame from "./AboutFrame";
import { motion } from "framer-motion";
import PortraitFrame from "./PortraitFrame";
import CollaborationFrame from "./CollaborationFrame";
import WhereIWorkFrame from "./WhereIWorkFrame";
import MeOnline from "./MeOnline";
import Button from "./Button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const About = () => {
  const constraintref = useRef(null);
  const titleRef = useRef(null);
  const aboutFrameRef = useRef(null);
  const portraitFrameRef = useRef(null);
  const meOnlineRef = useRef(null);
  const collaborationFrameRef = useRef(null);
  const whereIWorkFrameRef = useRef(null);
  const buttonRef = useRef(null);
  const [isDesktop, setIsDesktop] = useState(false);

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

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Title animation
    gsap.fromTo(
      titleRef.current,
      {
        opacity: 0,
        y: 50,
        scale: 0.9,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: constraintref.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play reverse play reverse",
        },
      }
    );

    // Stagger animation for frame components
    const frames = [
      aboutFrameRef.current,
      portraitFrameRef.current,
      meOnlineRef.current,
      collaborationFrameRef.current,
      whereIWorkFrameRef.current,
    ];

    frames.forEach((frame, index) => {
      if (frame) {
        gsap.fromTo(
          frame,
          {
            opacity: 0,
            y: 60,
            scale: 0.8,
            rotation: -5,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            rotation: 0,
            duration: 1.5,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: constraintref.current,
              start: "top 70%",
              end: "bottom 30%",
              toggleActions: "play reverse play reverse",
            },
            delay: index * 0.2,
          }
        );
      }
    });

    // Button animation
    gsap.fromTo(
      buttonRef.current,
      {
        opacity: 0,
        x: -50,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: constraintref.current,
          start: "top 60%",
          end: "bottom 40%",
          toggleActions: "play reverse play reverse",
        },
        delay: 1,
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
  return (
    <section
      ref={constraintref}
      className="min-h-screen xl:min-w-full lg:min-w-full xl:py-8 2xl:py-8 px-8 relative"
    >
      <div className="bg-[#4949CE] h-[9rem] w-[9rem] -z-100 top-[35rem] left-[15rem] absolute rounded-full blur-[6rem]" />
      <div className="bg-[#4949CE] h-[9rem] w-[9rem] -z-100 top-[15rem] right-[15rem] absolute rounded-full blur-[6rem]" />
      <div className="max-w-6xl mx-auto">
        <h1
          ref={titleRef}
          className="text-white xl:w-full 2xl:w-full lg:w-full w-[20rem] font-ObjectSans xl:text-5xl 2xl:text-5xl text-3xl m-auto mb-8 text-center"
        >
          Your <span className="text-highlighted">Innovative</span> Web
          Developer
        </h1>
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

      <div
        ref={buttonRef}
        className="text-white xl:mt-190 xl:ml-155 mt-300 ml-28 rounded-sm group cursor-pointer max-w-fit max-h-[2rem] overflow-hidden flex gap-2 items-center  border border-gray-600 font-NeueMachina hover:border-[#4949CE] transition-colors duration-200"
      >
        <Button text="about-me →" width={145} height={32} className="w-fit" />
      </div>
    </section>
  );
};

export default About;
