"use client";
import { useEffect, useRef } from "react";
import Planet from "./Planet";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Home() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const planetRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Title animation on scroll - bidirectional
    gsap.fromTo(titleRef.current,
      {
        opacity: 0,
        y: 50,
        scale: 0.9
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
          scrub: false
        }
      }
    );

    // Subtitle animation with slight delay - bidirectional
    gsap.fromTo(subtitleRef.current,
      {
        opacity: 0,
        y: 30
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
          toggleActions: "play reverse play reverse"
        }
      }
    );

    // Planet subtle animation - bidirectional
    gsap.fromTo(planetRef.current,
      {
        opacity: 0,
        scale: 0.8,
        rotateY: -30
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
          toggleActions: "play reverse play reverse"
        }
      }
    );

    // Enhanced parallax effect - fully bidirectional
    gsap.fromTo(sectionRef.current, 
      {
        y: 0,
        opacity: 1
      },
      {
        y: -100,
        opacity: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "bottom 70%",
          end: "bottom top",
          scrub: 1,
          toggleActions: "play reverse play reverse"
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="min-h-screen mt-12 sm:mt-16 md:mt-20 relative flex items-center justify-center overflow-hidden"
    >
      {/* Background Planet */}
      <div 
        ref={planetRef}
        className="absolute inset-0 w-full h-full -z-10 flex items-center justify-center"
      >
        <div className="w-full h-full max-w-none scale-95 sm:scale-90 md:scale-100 lg:scale-110 xl:scale-125">
          <Planet />
        </div>
      </div>

      {/* Content */}
      <div className="text-center px-4 sm:px-6 md:px-8 w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-5xl mx-auto z-10">
        <h1
          ref={titleRef}
          className="text-white text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-5xl leading-tight mb-6 sm:mb-8 font-ObjectSans"
        >
          Hi, I'm <span className="text-highlighted">Saransh</span>,<br />
          an innovative developer
        </h1>
        <p 
          ref={subtitleRef}
          className="text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl 2xl:text-2xl max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl mx-auto code-content font-NeueMachina"
        >
          I bring value to web development projects by merging technical
          expertise with creativity and aesthetics.
        </p>
      </div>
    </section>
  );
}
