"use client";
import { useEffect, useRef } from "react";
import Planet from "./Planet";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const aboutHome = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const planetRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Title animation on scroll - bidirectional
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
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play reverse play reverse",
        },
      }
    );

    // Subtitle animation with slight delay - bidirectional
    gsap.fromTo(
      subtitleRef.current,
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          end: "bottom 25%",
          toggleActions: "play reverse play reverse",
        },
      }
    );

    // Planet subtle animation - bidirectional
    gsap.fromTo(
      planetRef.current,
      {
        opacity: 0,
        scale: 0.8,
        rotateY: -30,
      },
      {
        opacity: 1,
        scale: 1,
        rotateY: 0,
        duration: 1.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 90%",
          end: "bottom 10%",
          toggleActions: "play reverse play reverse",
        },
      }
    );

    // Enhanced parallax effect - fully bidirectional
    gsap.fromTo(
      sectionRef.current,
      {
        y: 0,
        opacity: 1,
      },
      {
        y: -100,
        opacity: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "bottom 70%",
          end: "bottom top",
          scrub: 1,
          toggleActions: "play reverse play reverse",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
  return (
    <div>
      <div>
        <div
          ref={sectionRef}
          className="min-h-screen mt-16 sm:mt-20 md:mt-24 lg:mt-28 relative flex items-center justify-center overflow-hidden"
        >
          <div 
            ref={planetRef} 
            className="absolute inset-0 w-full h-full flex items-center justify-center scale-75 sm:scale-85 md:scale-95 lg:scale-105 xl:scale-110"
          >
            <Planet />
          </div>

          <div className="relative z-10 text-center px-4 sm:px-6 md:px-8 lg:px-12 max-w-6xl mx-auto">
            <h1
              ref={titleRef}
              className="text-white text-4xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-8xl 2xl:text-5xl leading-tight mb-6 sm:mb-8 font-ObjectSans">
              Let's get to know <span className="code-red">each other</span>
            </h1>
            <p
              ref={subtitleRef}
              className="text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-3xl mx-auto code-content font-NeueMachina leading-relaxed"
            >
              Let me introduce myself, my workflows, my collaborations, and the
              technologies I like to use to bring my projects to life.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default aboutHome;
