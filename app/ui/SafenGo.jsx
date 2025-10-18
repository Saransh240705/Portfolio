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

const SafenGo = () => {
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
      <div>
        <div className="bg-[#91D2F9] h-[9rem] w-[9rem] -z-100 top-[35rem] left-[15rem] absolute rounded-full blur-[6rem]" />
        <div className="bg-[#91D2F9] h-[9rem] w-[9rem] -z-100 top-[15rem] right-[15rem] absolute rounded-full blur-[6rem]" />
        <div className="flex h-[15rem] sm:h-[20rem] md:h-[25rem] w-full items-center justify-center">
          <span className="font-NeueMachina text-sm sm:text-base">PROJECT</span>
        </div>
        <div className="flex justify-center flex-col gap-6 sm:gap-8 md:gap-12 items-center px-4">
          <h1 className="font-ObjectSans text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center">SafenGo</h1>
          <div className="justify-center items-center w-full flex gap-2 font-NeueMachina flex-wrap">
            <span className="border w-fit border-color rounded-3xl pl-2 pr-2 text-center text-xs sm:text-sm">
              React
            </span>
            <span className="border border-color w-fit rounded-3xl pl-2 pr-2 text-center text-xs sm:text-sm">
              ExpressJs
            </span>
            <span className="border border-color w-fit rounded-3xl pl-2 pr-2 text-center text-xs sm:text-sm">
              MongoDB
            </span>
          </div>
        </div>

        <div className="flex justify-center items-center mt-20 sm:mt-28 md:mt-38 px-4">
          <Image
            src="/assets/safe-n-go.jpeg"
            width={800}
            height={600}
            alt="SafenGo"
            className="rounded-lg w-full max-w-[320px] sm:max-w-[500px] md:max-w-[600px] lg:max-w-[800px] h-auto"
          />
        </div>

        <div className="max-w-[1350px] m-auto px-4 sm:px-8 md:px-12 lg:px-20 flex flex-col lg:flex-row mt-20 sm:mt-28 md:mt-36 mb-16 sm:mb-20 md:mb-24 gap-8 lg:gap-0">
          <div className="w-full lg:w-[70%] font-NeueMachina">
            <div className="font-NeueMachina flex flex-col">
              <span className="code-aqua text-sm sm:text-base">Year</span>
              <span className="text-sm sm:text-base">2025</span>
            </div>
            <div className="mt-8 sm:mt-12 md:mt-16">
              <span className="code-aqua text-sm sm:text-base">engagement</span>
              <p className="text-sm sm:text-base leading-relaxed mt-2">
                Developed as part of the Smart India Hackathon 2025 Internal
                Round, this project addresses the challenge of enhancing tourist
                safety through AI, Blockchain, and Geo-Fencing technologies. The
                goal was to build a secure, scalable ecosystem for real-time
                tourist monitoring, rapid emergency response, and digital ID
                verification. As the full-stack developer, I was responsible for
                building both the front-end and back-end architecture,
                integrating blockchain-based digital ID generation, real-time
                dashboards, and AI-driven anomaly detection for safety alerts.
                The system includes a mobile application, tourism & police
                dashboards, and optional IoT integration for smart tracking
                devices. Key focus areas included data privacy, multilingual
                accessibility, and performance optimization, ensuring the
                platform remained secure, inclusive, and responsive even under
                heavy real-time workloads.
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:ml-43 gap-8 sm:gap-10 md:gap-12">
            <div>
              <span className="code-aqua text-sm sm:text-base">services</span>
              <div className="flex flex-col gap-2 mt-2">
                <span className="border border-color w-fit rounded-3xl pl-2 pr-2 text-center text-xs sm:text-sm">
                  Front-end-development
                </span>
                <span className="border border-color w-fit rounded-3xl pl-2 pr-2 text-center text-xs sm:text-sm">
                  Back-end-development
                </span>
                <span className="border border-color w-fit rounded-3xl pl-2 pr-2 text-center text-xs sm:text-sm">
                  Real-world Problem
                </span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="https://safe-n-go.vercel.app/">
                <Button text="visit-website↗" width="9rem" height="3.5rem" />
              </Link>
              <Link href="https://github.com/Saransh240705/SIH_2025_Internal_Round_Submission_Template.git">
                <Button text="visit-code↗" width="9rem" height="3.5rem" />
              </Link>
            </div>
          </div>
        </div>

        <div className="w-full flex mt-10 sm:mt-12 md:mt-15 justify-center items-center mb-10 sm:mb-12 md:mb-16">
          <h1 className="text-2xl sm:text-3xl md:text-4xl text-center">
            Up <span className="code-aqua">Next</span>
          </h1>
        </div>
        <div className="flex justify-center mt-20 sm:mt-24 md:mt-30 items-center w-full px-4 sm:px-6">
          <Link
            href="/project/MovieBase"
            className="w-full max-w-[380px] sm:max-w-[500px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1000px]"
          >
            <div className="flex transparent mb-16 sm:mb-18 md:mb-20 h-auto sm:h-[16rem] md:h-[15rem] group border rounded-2xl justify-between items-center p-4 sm:p-5 flex-col sm:flex-row gap-4 sm:gap-0">
              <div className="w-full sm:w-auto">
                <div className="flex group gap-2 justify-center sm:justify-start">
                  <p className="code-content font-NeueMachina text-sm sm:text-base">01</p>
                  <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-ObjectSans mb-1">
                    MovieBase
                  </h1>
                </div>
                <div className="ml-0 sm:ml-6 group w-full flex gap-2 font-NeueMachina flex-wrap justify-center sm:justify-start mt-2">
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
              <div className="flex group items-center gap-4 w-full sm:w-auto justify-center">
                <div className="relative -mt-30 -ml-13 border rounded-2xl hover:scale-110 ease-in-out duration-200">
                  <Image
                    className="rounded-2xl w-full max-w-[200px] sm:max-w-[300px] md:max-w-[400px] h-auto"
                    src="/assets/MovieBase.jpeg"
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
  );
};

export default SafenGo;
