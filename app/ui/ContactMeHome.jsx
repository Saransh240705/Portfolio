"use client";
import { useEffect, useRef } from "react";
import Planet from "./Planet";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ContactMeHome = () => {
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
          toggleActions: "play reverse play reverse"
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
    <div>
        <div 
          ref={sectionRef}
          className="min-h-screen mt-20 relative flex items-center justify-center"
        >
              {/* Background Planet */}
              <div 
                ref={planetRef}
                className="absolute  -z-10"
              >
                <Planet />
              </div>
              
              {/* Content */}
              <div className="text-center px-8 max-w-3xl mx-auto">
                <h1 
                  ref={titleRef}
                  className="text-white text-6xl leading-tight mb-8 font-ObjectSans"
                >
                  Do you want to talk about a <span className="code-blue">project</span> ?

                </h1>
                <p 
                  ref={subtitleRef}
                  className="text-white text-xl max-w-2xl mx-auto code-content font-NeueMachina"
                >
                 Whether you have a project you want to work on together or just want us to meet and have a chat, you are in the right place: let's get in touch.
                 </p>
              </div>
            </div>
    </div>
  )
}

export default ContactMeHome