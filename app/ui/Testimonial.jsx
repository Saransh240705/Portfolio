"use client";

import { useRef, useEffect } from "react";
import TestimonialFrame from "./TestimonialFrame";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/dist/css/splide.min.css";
import { testimonials } from "../lib/testimonial";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Testimonial = ({color}) => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const carouselRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Title animation
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

    // Carousel animation
    gsap.fromTo(carouselRef.current,
      {
        opacity: 0,
        y: 60
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "bottom 30%",
          toggleActions: "play reverse play reverse"
        },
        delay: 0.3
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);


  return (
    <div ref={sectionRef} className="mt-40  mb-23">
      <div className=" flex justify-center gap-12 items-center max-w-[34rem] text-center m-auto">
        <h1 ref={titleRef} className="text-5xl text-white font-ObjectSans ">
          Nice things <span className={`${color}`}> people say </span>
          about my work
        </h1>
      </div>
      <div ref={carouselRef} className="flex m-auto  max-w-[1370px] justify-center items-center mt-30 overflow-x-visible">
        <div className="flex h-full ">
          <div className="max-w-[1350px] mx-auto overflow-x-hidden">
            <Splide
              options={{
                type: "loop", // Loop back to the beginning when reaching the end
                autoScroll: {
                  pauseOnHover: true, // Pause scrolling when hovering over the carousel
                  pauseOnFocus: false, // Do not pause scrolling when the carousel is focused
                  rewind: true, // Rewind to start when the end is reached
                  speed: 3, // Scrolling speed
                },
                arrows: false, // Hide navigation arrows
                pagination: false, // Hide pagination dots
                gap: "30px", // Gap between slides
                fixedWidth: "400px",
                drag: false, // Disable dragging to prevent conflicts with hover
                wheel: false, // Disable wheel scrolling
              }}
              extensions={{ AutoScroll }} // Use the AutoScroll extension
            >
              {testimonials.map((t) => (
                <SplideSlide key={t.id}>
                  <TestimonialFrame name={t.name} desc={t.desc} />
                </SplideSlide>
              ))}
            </Splide>
            <div className="mt-10 ">
              <Splide
                options={{
                  type: "loop", // Loop back to the beginning when reaching the end
                  autoScroll: {
                    pauseOnHover: true, // Pause scrolling when hovering over the carousel
                    pauseOnFocus: false, // Do not pause scrolling when the carousel is focused
                    rewind: true, // Rewind to start when the end is reached
                    speed: -3, // Scrolling speed (negative for reverse direction)
                  },
                  arrows: false, // Hide navigation arrows
                  pagination: false, // Hide pagination dots
                  gap: "30px", // Gap between slides
                  fixedWidth: "400px",
                  drag: false, // Disable dragging to prevent conflicts with hover
                  wheel: false, // Disable wheel scrolling
                }}
                extensions={{ AutoScroll }} // Use the AutoScroll extension
              >
                {testimonials.map((t) => (
                <SplideSlide key={`second-${t.id}`}>
                  <TestimonialFrame name={t.name} desc={t.desc} />
                </SplideSlide>
              ))}
              </Splide>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
