"use client";
import { useEffect, useRef } from "react";
import Planet from "./Planet";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ProjectHome = () => {
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
        <div>
          <div
            ref={sectionRef}
            className="min-h-screen mt-20 relative flex items-center justify-center"
          >
            <div
              ref={planetRef}
              className="absolute inset-0 w-full h-full flex items-center justify-center scale-75 sm:scale-85 md:scale-95 lg:scale-105 xl:scale-110"
            >
              <Planet />
            </div>

            <div className="text-center px-8 max-w-4xl mx-auto">
              <h1
                ref={titleRef}
                className="text-white text-4xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-8xl 2xl:text-5xl leading-tight mb-6 sm:mb-8 font-ObjectSans"
              >
                A collection of my best{" "}
                <span className="code-aqua"> projects</span>
              </h1>
              <p
                ref={subtitleRef}
                className="text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl 2xl:text-2xl max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl mx-auto code-content font-NeueMachina"
              >
                With many years in web development, I acquired extensive
                experience working on projects across multiple industries and
                technologies. Let me show you my best creations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectHome;
