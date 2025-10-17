"use client";
import { Minus, Square, X } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const TechStackFrame = () => {
  const containerRef = useRef(null);
  const headerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Header animation
    gsap.fromTo(
      headerRef.current,
      {
        y: -50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "top 50%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Stagger animation for tech items
    gsap.fromTo(
      ".tech-item",
      {
        y: 60,
        opacity: 0,
        scale: 0.8,
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.6,
        ease: "back.out(1.7)",
        stagger: 0.1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
          end: "bottom 30%",
          toggleActions: "play none none reverse",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  // Tech stack data
  const techStack = [
    { name: "HTML", icon: "/assets/Html 5.svg" },
    { name: "CSS", icon: "/assets/CSS3.svg" },
    { name: "JavaScript", icon: "/assets/JavaScript.svg" },
    { name: "React", icon: "/assets/React.svg" },
    { name: "Node.js", icon: "/assets/Node Js.svg" },
    { name: "Express.js", icon: "/assets/Express Js.svg" },
    { name: "Python", icon: "/assets/Python.svg" },
    { name: "Tailwind CSS", icon: "/assets/Tailwindcss.svg" },
    { name: "Docker", icon: "/assets/Docker.svg" },
    { name: "TypeScript", icon: "/assets/TypeScript.svg" },
    { name: "Next.js", icon: "/assets/Nextjs.svg" },
    { name: "Figma", icon: "/assets/Figma.svg" },
    { name: "Git", icon: "/assets/Git.svg" },
    { name: "GitHub", icon: "/assets/GitHub.svg" },
    { name: "NumPy", icon: "/assets/Numpy.svg" },
    { name: "Matplotlib", icon: "/assets/Matplotlib.svg" },
    { name: "MySQL", icon: "/assets/MySQL Logo.svg" },
    { name: "PostgreSQL", icon: "/assets/PostgreSQL.svg" },
  ];

  return (
    <div className="flex justify-center items-center w-full">
      <motion.div
        ref={containerRef}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
        className="w-full max-w-sm mx-auto"
      >
        <div>
          <div className="w-full h-full">
            <motion.div
              ref={headerRef}
              className="flex justify-between items-center rounded-tl-xl rounded-tr-xl border-white bg-black border-[0.5px] h-9 w-full"
            >
            <span className="font-NeueMachina pl-2 text-white text-sm sm:text-base">tech</span>
            <div className="flex gap-2 pr-2 items-center justify-center">
              <span className="text-white cursor-pointer">
                <Minus className="w-4 h-4 sm:w-5 sm:h-5" />
              </span>
              <span className="text-white cursor-pointer">
                <Square className="w-4 h-4 sm:w-5 sm:h-5" />
              </span>
              <span className="text-white cursor-pointer">
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              </span>
            </div>
          </motion.div>
          <div className="border-white text-white rounded-bl-xl pt-3 rounded-br-xl bg-black border-[0.5px] h-fit w-full">
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2 sm:gap-3 md:gap-4 p-3 sm:p-4">
              {techStack.map((tech, index) => (
                <motion.div
                  key={index}
                  className="tech-item flex flex-col justify-center items-center p-2 sm:p-3 rounded-lg cursor-pointer"
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: "rgba(73, 73, 206, 0.1)",
                    boxShadow: "0 8px 25px rgba(73, 73, 206, 0.2)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                  }}
                >
                  <motion.div
                    whileHover={{
                      rotate: [0, -5, 5, 0],
                      transition: { duration: 0.4 },
                    }}
                  >
                    <Image
                      src={tech.icon}
                      width={102}
                      height={102}
                      alt={tech.name}
                      className="transition-all duration-300 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24"
                    />
                  </motion.div>
                  <motion.span
                    className="font-NeueMachina mt-1 sm:mt-2 text-xs sm:text-sm md:text-base text-center"
                    whileHover={{
                      color: "#4949CE",
                      scale: 1.05,
                    }}
                  >
                    {tech.name}
                  </motion.span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
      </motion.div>
    </div>
  );
};

export default TechStackFrame;
