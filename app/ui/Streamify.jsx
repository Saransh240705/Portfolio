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
    <div>
      <div className="bg-[#91D2F9] h-[9rem] w-[9rem] -z-100 top-[35rem] left-[15rem] absolute rounded-full blur-[6rem]" />
      <div className="bg-[#91D2F9] h-[9rem] w-[9rem] -z-100 top-[15rem] right-[15rem] absolute rounded-full blur-[6rem]" />
      <div className="flex h-[25rem] w-full items-center justify-center">
        <span className="font-NeueMachina">PROJECT</span>
      </div>
      <div className="flex justify-center flex-col gap-12 items-center">
        <h1 className="font-ObjectSans text-7xl">Streamify</h1>
        <div className="ml-6 justify-center items-center w-full  flex gap-2 font-NeueMachina ">
          <span className="border w-fit border-color rounded-3xl pl-2 pr-2 text-center">
            React
          </span>
          <span className="border border-color w-fit rounded-3xl pl-2 pr-2 text-center">
            ExpressJs
          </span>
          <span className="border border-color w-fit rounded-3xl pl-2 pr-2 text-center">
            MongoDB
          </span>
        </div>
      </div>

      <div className="flex justify-center items-center mt-38">
        <Image
          src="/assets/Streamify.png"
          width={800}
          height={600}
          alt="streamify"
          className="rounded-lg"
        />
      </div>

      <div className="max-w-[1350px] m-auto ml-20 flex mt-36 mb-24">
        <div className="w-[70%] font-NeueMachina">
          <div className="font-NeueMachina flex flex-col">
            <span className="code-aqua">Year</span>
            <span>2025</span>
          </div>
          <div className="mt-16">
            <span className="code-aqua">engagement</span>
            <p>
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
        <div className="flex flex-col ml-43 gap-12">
          <div>
            <span className="code-aqua ">services</span>
            <div className="flex flex-col gap-2">
              <span className="border border-color w-fit rounded-3xl pl-2 pr-2 text-center">
                Front-end-development
              </span>
              <span className="border border-color w-fit rounded-3xl pl-2 pr-2 text-center">
                Back-end-development
              </span>
              <span className="border border-color w-fit rounded-3xl pl-2 pr-2 text-center">
                Deployment
              </span>
            </div>
          </div>
          <Link href="https://streamifyy-nlv0.onrender.com/">
            <Button text="visit-website↗" width="10rem" height="4rem" />
          </Link>
          <Link href="https://github.com/Saransh240705/Streamify.git">
              <Button text="visit-code↗" width="10rem" height="4rem" />
            </Link>
        </div>
      </div>

      <div className="w-full flex mt-15 justify-center items-center mb-16">
        <h1 className="text-4xl">
          Up <span className="code-aqua">Next</span>
        </h1>
      </div>
      <div className="flex justify-center mt-30 items-center w-full">
        <Link
          href="/project/PeaceHub
        "
        >
          <div className="flex transparent mb-20 xl:min-w-[1000px] 2xl:min-w-[1000px] max-w-[380px] xl:h-[15rem] 2xl:h-[15rem] h-[18rem] group border rounded-2xl justify-between items-center pl-5 pr-5">
            <div>
              <div className="flex group gap-2">
                <p className="code-content font-NeueMachina ">02</p>
                <h1 className="xl:text-4xl 2xl:text-4xl text-2xl font-ObjectSans mb-1">
                  PeaceHub
                </h1>
              </div>
              <div className="ml-6 group  w-full flex gap-2 font-NeueMachina ">
                <span className="border w-fit border-color rounded-3xl pl-2 pr-2 text-center">
                  React
                </span>
                <span className="border border-color w-fit rounded-3xl pl-2 pr-2 text-center">
                  Figma
                </span>
                <span className="border border-color w-fit rounded-3xl pl-2 pr-2 text-center">
                  TailwindCSS
                </span>
              </div>
            </div>
            <div className="flex group xl:none 2xl:none  xl:gap-23 2xl:gap-23 xl:items-center 2xl:items-center">
              <div className="-mt-20 relative border rounded-2xl hover:scale-120 ease-in-out duration-200 mb-6">
                <Image
                  className="rounded-2xl"
                  src="/assets/PeaceHub.jpeg"
                  width={433}
                  height={110}
                />
              </div>
              <div className="flex items-center justify-center">
                <div className="font-NeueMachina font-thin">2025</div>
                <div className="font-NeueMachina font-thin text-2xl">↗</div>
              </div>
            </div>
          </div>
        </Link>
      </div>

      <div className="flex justify-center items-center w-full mt-22 mb-18">
        <div className="   -z-50">
          <div className=" flex justify-center gap-12 items-center max-w-[34rem] text-center m-auto">
            <h1 className="text-5xl text-white font-ObjectSans ">
              Nice things <span className="code-aqua"> people say </span>
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
