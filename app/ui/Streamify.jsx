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

const Streamify = () => {
  return (
    <div className="overflow-x-hidden w-full">
      <div className="bg-[#91D2F9] h-[9rem] w-[9rem] -z-100 top-[35rem] left-[15rem] absolute rounded-full blur-[6rem]" />
      <div className="bg-[#91D2F9] h-[9rem] w-[9rem] -z-100 top-[15rem] right-[15rem] absolute rounded-full blur-[6rem]" />
      <div className="flex h-[15rem] sm:h-[20rem] md:h-[25rem] w-full items-center justify-center">
        <span className="font-NeueMachina text-sm sm:text-base">PROJECT</span>
      </div>
      <div className="flex justify-center flex-col gap-6 sm:gap-8 md:gap-12 items-center px-4">
        <h1 className="font-ObjectSans text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center">Streamify</h1>
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
          src="/assets/Streamify.png"
          width={800}
          height={600}
          alt="streamify"
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
              Streamify — Real-Time Streaming & Chat App Streamify is a
              full-stack web application that enables real-time video streaming
              and interactive chat in a seamless, responsive interface. As the
              lead developer, I designed and built both the front-end and
              back-end, integrating real-time communication using the Stream API
              while ensuring smooth performance and a dynamic user experience.
              The stack includes Next.js, Node.js, Express, MongoDB, Tailwind
              CSS, and Framer Motion for refined animations and transitions. Key
              challenges involved optimizing live updates, managing concurrent
              user states, and maintaining a balance between performance,
              scalability, and visual polish.
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
                Deployment
              </span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="https://streamifyy-nlv0.onrender.com/">
              <Button text="visit-website↗" width="9rem" height="3.5rem" />
            </Link>
            <Link href="https://github.com/Saransh240705/Streamify.git">
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
      <div className="flex justify-center mt-16 sm:mt-20 md:mt-30 items-center w-full px-4">
        <Link
          href="/project/PeaceHub
        "
        >
          <div className="flex transparent mb-12 sm:mb-16 md:mb-20 w-full max-w-[380px] sm:max-w-[600px] md:max-w-[800px] lg:max-w-[1000px] h-auto sm:h-[12rem] md:h-[15rem] lg:h-[15rem] group border rounded-2xl justify-between items-center p-4 sm:pl-5 sm:pr-5">
            <div className="flex-1">
              <div className="flex group gap-2 items-center">
                <p className="code-content font-NeueMachina text-sm sm:text-base">02</p>
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-ObjectSans mb-1">
                  PeaceHub
                </h1>
              </div>
              <div className="sm:ml-6 group w-full flex gap-2 font-NeueMachina flex-wrap mt-2">
                <span className="border w-fit border-color rounded-3xl pl-2 pr-2 text-center text-xs sm:text-sm">
                  React
                </span>
                <span className="border border-color w-fit rounded-3xl pl-2 pr-2 text-center text-xs sm:text-sm">
                  Figma
                </span>
                <span className="border border-color w-fit mr-3 rounded-3xl pl-2 pr-2 text-center text-xs sm:text-sm">
                  TailwindCSS
                </span>
              </div>
            </div>
            <div className="hidden sm:flex group items-center gap-6">
              <div className="relative -mt-30 border rounded-2xl hover:scale-110 ease-in-out duration-200">
                <Image
                  className="rounded-2xl"
                  src="/assets/PeaceHub.jpeg"
                  width={433}
                  height={110}
                  alt="PeaceHub"
                />
              </div>
              <div className="flex items-center justify-center">
                <div className="font-NeueMachina font-thin text-sm">2025</div>
                <div className="font-NeueMachina font-thin text-xl">↗</div>
              </div>
            </div>
          </div>
        </Link>
      </div>

      <div className="flex justify-center items-center w-full mt-16 sm:mt-18 md:mt-22 mb-12 sm:mb-15 md:mb-18 px-4">
        <div className="-z-50">
          <div className="flex justify-center gap-6 sm:gap-8 md:gap-12 items-center max-w-[20rem] sm:max-w-[28rem] md:max-w-[34rem] text-center m-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl text-white font-ObjectSans">
              Nice things <span className="code-aqua"> people say </span>
              about my work
            </h1>
          </div>
          <div className="flex m-auto max-w-[1370px] justify-center items-center mt-16 sm:mt-20 md:mt-30 overflow-hidden">
            <div className="flex h-full w-full">
              <div className="w-full mx-auto overflow-hidden -z-50">
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
                        speed: -3, // Scrolling speed
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
      </div>
      <Collaboration />
    </div>
  );
};

export default Streamify;
