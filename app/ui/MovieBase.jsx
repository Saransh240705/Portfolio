"use client";
import Image from "next/image";
import Button from "./Button";
import Link from "next/link";
import TestimonialFrame from "./TestimonialFrame";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/dist/css/splide.min.css";
import { testimonials } from "../lib/testimonial";
import Collaboration from "./Collaboration";
import { useState, useEffect } from "react";

const MovieBase = () => {
  const [isClient, setIsClient] = useState(false);
  const [slideWidth, setSlideWidth] = useState("400px");

  useEffect(() => {
    setIsClient(true);
    const updateSlideWidth = () => {
      setSlideWidth(window.innerWidth > 768 ? "400px" : "300px");
    };
    
    updateSlideWidth();
    window.addEventListener('resize', updateSlideWidth);
    
    return () => window.removeEventListener('resize', updateSlideWidth);
  }, []);
  return (
    <div className="overflow-x-hidden w-full">
      <div className="w-full">
        <div className="w-full">
          <div className="bg-[#91D2F9] h-[6rem] w-[6rem] sm:h-[8rem] sm:w-[8rem] md:h-[9rem] md:w-[9rem] -z-100 top-[25rem] sm:top-[30rem] md:top-[35rem] left-[10rem] sm:left-[12rem] md:left-[15rem] absolute rounded-full blur-[4rem] sm:blur-[5rem] md:blur-[6rem]" />
          <div className="bg-[#91D2F9] h-[6rem] w-[6rem] sm:h-[8rem] sm:w-[8rem] md:h-[9rem] md:w-[9rem] -z-100 top-[10rem] sm:top-[12rem] md:top-[15rem] right-[10rem] sm:right-[12rem] md:right-[15rem] absolute rounded-full blur-[4rem] sm:blur-[5rem] md:blur-[6rem]" />
          <div className="flex h-[18rem] sm:h-[20rem] md:h-[25rem] w-full items-center justify-center px-4">
            <span className="font-NeueMachina text-sm sm:text-base md:text-lg">PROJECT</span>
          </div>
          <div className="flex justify-center flex-col gap-8 sm:gap-10 md:gap-12 items-center px-4">
            <h1 className="font-ObjectSans text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center">MovieBase</h1>
            <div className="justify-center items-center w-full flex gap-2 flex-wrap font-NeueMachina px-4">
              <span className="border w-fit border-color rounded-3xl px-2 py-1 text-center text-xs sm:text-sm">
                React
              </span>
              <span className="border border-color w-fit rounded-3xl px-2 py-1 text-center text-xs sm:text-sm">
                Appwrite
              </span>
              <span className="border border-color w-fit rounded-3xl px-2 py-1 text-center text-xs sm:text-sm">
                TailwindCSS
              </span>
            </div>
          </div>

          <div className="flex justify-center items-center mt-20 sm:mt-28 md:mt-38 px-4">
            <Image
              src="/assets/MovieBase.jpeg"
              width={800}
              height={600}
              alt="MovieBase"
              className="rounded-lg w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-4xl h-auto"
            />
          </div>

          <div className="max-w-[1350px] m-auto px-4 sm:px-6 lg:px-20 flex flex-col lg:flex-row mt-24 sm:mt-30 md:mt-36 mb-16 sm:mb-20 md:mb-24 gap-8 lg:gap-0">
            <div className="w-full lg:w-[70%] font-NeueMachina">
              <div className="font-NeueMachina flex flex-col">
                <span className="code-aqua text-sm sm:text-base">Year</span>
                <span className="text-sm sm:text-base">2025</span>
              </div>
              <div className="mt-12 sm:mt-14 md:mt-16">
                <span className="code-aqua text-sm sm:text-base">engagement</span>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed mt-2">
                  MovieBase is a full-stack developer tool built to simplify the
                  creation of dynamic movie discovery applications. It delivers
                  a responsive, real-time experience powered by Vite, React,
                  Tailwind CSS, and Appwrite. As the full-stack developer, I
                  designed and implemented the platform to enable real-time
                  movie search, trending content display, and user engagement
                  tracking through Appwrite’s backend integration. The project
                  emphasizes clean code architecture, scalability, and UI
                  polish, featuring custom loading animations and dynamic movie
                  cards for an immersive experience. Key highlights include a
                  high-performance Vite setup, ESLint-based code quality checks,
                  and seamless data-driven UI updates — making it a powerful
                  foundation for developers building modern entertainment or
                  content-discovery platforms.
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:ml-43 gap-8 sm:gap-10 md:gap-12 w-full lg:w-auto items-center lg:items-start">
              <div>
                <span className="code-aqua text-sm sm:text-base">services</span>
                <div className="flex flex-col gap-2 mt-2">
                  <span className="border border-color w-fit rounded-3xl px-2 py-1 text-center text-xs sm:text-sm">
                    Front-end-development
                  </span>
                  <span className="border border-color w-fit rounded-3xl px-2 py-1 text-center text-xs sm:text-sm">
                    Back-end-development
                  </span>
                  <span className="border border-color w-fit rounded-3xl px-2 py-1 text-center text-xs sm:text-sm">
                    Deployment
                  </span>
                </div>
              </div>
              <Link href="https://movie-base-gamma.vercel.app/">
                <Button text="visit-website↗" width="10rem" height="4rem" />
              </Link>
              <Link href="https://github.com/Saransh240705/MovieBase.git">
                <Button text="visit-code↗" width="10rem" height="4rem" />
              </Link>
            </div>
          </div>

          <div className="w-full flex mt-10 sm:mt-12 md:mt-15 justify-center items-center mb-10 sm:mb-12 md:mb-16">
            <h1 className="text-2xl sm:text-3xl md:text-4xl text-center">
              Up <span className="code-aqua">Next</span>
            </h1>
          </div>
          <div className="flex justify-center mt-20 sm:mt-24 md:mt-30 items-center w-full px-4 sm:px-6">
            <Link
              href="/project/Streamify"
              className="w-full max-w-[380px] sm:max-w-[500px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1000px]"
            >
              <div className="flex transparent mb-16 sm:mb-18 md:mb-20 h-auto sm:h-[16rem] md:h-[15rem] group border rounded-2xl justify-between items-center p-4 sm:p-5 flex-col sm:flex-row gap-4 sm:gap-0">
                <div className="w-full sm:w-auto">
                  <div className="flex group gap-2 justify-center sm:justify-start">
                    <p className="code-content font-NeueMachina text-sm sm:text-base">01</p>
                    <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-ObjectSans mb-1">
                      Streamify
                    </h1>
                  </div>
                  <div className="ml-0 sm:ml-6 group w-full flex gap-2 font-NeueMachina flex-wrap justify-center sm:justify-start mt-2">
                    <span className="border w-fit border-color rounded-3xl px-2 py-1 text-center text-xs sm:text-sm">
                      React
                    </span>
                    <span className="border border-color w-fit rounded-3xl px-2 py-1 text-center text-xs sm:text-sm">
                      ExpressJs
                    </span>
                    <span className="border border-color w-fit rounded-3xl px-2 py-1 text-center text-xs sm:text-sm">
                      MongoDB
                    </span>
                  </div>
                </div>
                <div className="flex group items-center gap-4 w-full sm:w-auto justify-center">
                  <div className="relative -mt-30 border rounded-2xl hover:scale-110 ease-in-out duration-200">
                    <Image
                      className="rounded-2xl w-full max-w-[200px] sm:max-w-[300px] md:max-w-[400px] h-auto"
                      src="/assets/Streamify.png"
                      width={433}
                      height={110}
                    />
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <div className="font-NeueMachina font-thin text-sm sm:text-base">2025</div>
                    <div className="font-NeueMachina font-thin text-xl sm:text-2xl">↗</div>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div className="flex justify-center items-center w-full mt-16 sm:mt-18 md:mt-22 mb-12 sm:mb-15 md:mb-18 px-4">
            <div className="-z-50 w-full">
              <div className="flex justify-center items-center max-w-[34rem] text-center m-auto">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-ObjectSans leading-tight">
                  Nice things <span className="code-aqua"> people say </span>
                  about my work
                </h1>
              </div>
              <div className="flex m-auto w-full max-w-[1370px] justify-center items-center mt-20 sm:mt-24 md:mt-30 overflow-x-visible px-4">
                <div className="flex h-full w-full">
                  <div className="w-full max-w-[1370px] mx-auto overflow-x-hidden -z-50">
                    {isClient && (
                      <>
                        <Splide
                          options={{
                            type: "loop", // Loop back to the beginning when reaching the end
                            autoScroll: {
                              pauseOnHover: true, // Do not pause scrolling when hovering over the carousel
                              pauseOnFocus: false, // Do not pause scrolling when the carousel is focused
                              rewind: true, // Rewind to start when the end is reached
                              speed: 3, // Scrolling speed
                            },
                            arrows: false, // Hide navigation arrows
                            pagination: false, // Hide pagination dots
                            gap: "20px", // Responsive gap
                            fixedWidth: slideWidth,
                          }}
                          extensions={{ AutoScroll }} // Use the AutoScroll extension
                        >
                          {testimonials.map((t) => (
                            <SplideSlide key={t.id}>
                              <TestimonialFrame name={t.name} desc={t.desc} />
                            </SplideSlide>
                          ))}
                        </Splide>
                        <div className="mt-6 sm:mt-8 md:mt-10">
                          <Splide
                            options={{
                              type: "loop", // Loop back to the beginning when reaching the end
                              autoScroll: {
                                pauseOnHover: true, // Do not pause scrolling when hovering over the carousel
                                pauseOnFocus: false, // Do not pause scrolling when the carousel is focused
                                rewind: true, // Rewind to start when the end is reached
                                speed: -3, // Scrolling speed
                              },
                              arrows: false, // Hide navigation arrows
                              pagination: false, // Hide pagination dots
                              gap: "20px", // Responsive gap
                              fixedWidth: slideWidth,
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
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Collaboration />
        </div>
      </div>
    </div>
  );
};

export default MovieBase;
