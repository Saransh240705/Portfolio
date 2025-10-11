"use client";

import TestimonialFrame from "./TestimonialFrame";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/dist/css/splide.min.css";
import { testimonials } from "../lib/testimonial";

const Testimonial = () => {
  const splideOptions = {
    type: "loop",
    rewind: true,
    pagination: false,
    AutoScroll: true,
    pauseOnHover: true,
    speed: 1,
    gap: 0, // Reduced from 12 to 0
  };

  return (
    <div className="mt-50  mb-23 -z-50">
      <div className=" flex justify-center gap-12 items-center max-w-[34rem] text-center m-auto">
        <h1 className="text-5xl text-white font-ObjectSans ">
          Nice things <span className="text-highlighted"> people say </span>
          about my work
        </h1>
      </div>
      <div className="flex m-auto  max-w-[1370px] justify-center items-center mt-30 overflow-x-visible">
        <div className="flex h-full ">
          <div className="max-w-[1370px] mx-auto overflow-x-hidden -z-50">
            <Splide
              options={{
                type: "loop", // Loop back to the beginning when reaching the end
                autoScroll: {
                  pauseOnHover: true, // Do not pause scrolling when hovering over the carousel
                  pauseOnFocus: false, // Do not pause scrolling when the carousel is focused
                  rewind: true, // Rewind to start when the end is reached
                  speed: 1, // Scrolling speed
                },
                arrows: false, // Hide navigation arrows
                pagination: false, // Hide pagination dots
                gap: "30px", // Negative gap to reduce spacing between slides

                fixedWidth: "400px",
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
                    pauseOnHover: true, // Do not pause scrolling when hovering over the carousel
                    pauseOnFocus: false, // Do not pause scrolling when the carousel is focused
                    rewind: true, // Rewind to start when the end is reached
                    speed: -1, // Scrolling speed
                  },
                  arrows: false, // Hide navigation arrows
                  pagination: false, // Hide pagination dots
                  gap: "30px", // Negative gap to reduce spacing between slides
                  fixedWidth: "400px",
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
