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

const MovieBase = () => {
  return (
    <div>
      <div>
        <div>
          <div className="bg-[#91D2F9] h-[9rem] w-[9rem] -z-100 top-[35rem] left-[15rem] absolute rounded-full blur-[6rem]" />
          <div className="bg-[#91D2F9] h-[9rem] w-[9rem] -z-100 top-[15rem] right-[15rem] absolute rounded-full blur-[6rem]" />
          <div className="flex h-[25rem] w-full items-center justify-center">
            <span className="font-NeueMachina">PROJECT</span>
          </div>
          <div className="flex justify-center flex-col gap-12 items-center">
            <h1 className="font-ObjectSans text-7xl">MovieBase</h1>
            <div className="ml-6 justify-center items-center w-full  flex gap-2 font-NeueMachina ">
              <span className="border w-fit border-color rounded-3xl pl-2 pr-2 text-center">
                React
              </span>
              <span className="border border-color w-fit rounded-3xl pl-2 pr-2 text-center">
                Appwrite
              </span>
              <span className="border border-color w-fit rounded-3xl pl-2 pr-2 text-center">
                TailwindCSS
              </span>
            </div>
          </div>

          <div className="flex justify-center items-center mt-38">
            <Image
              src="/assets/MovieBase.jpeg"
              width={800}
              height={600}
              alt="MovieBase"
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
              <Link href="https://movie-base-gamma.vercel.app/">
                <Button text="visit-website↗" width="10rem" height="4rem" />
              </Link>
              <Link href="https://github.com/Saransh240705/MovieBase.git">
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
            <Link href="/project/Streamify">
              <div className="flex transparent mb-20 xl:min-w-[1000px] 2xl:min-w-[1000px] max-w-[380px] xl:h-[15rem] 2xl:h-[15rem] h-[18rem] group border rounded-2xl justify-between items-center pl-5 pr-5">
                <div>
                  <div className="flex group gap-2">
                    <p className="code-content font-NeueMachina ">01</p>
                    <h1 className="xl:text-4xl 2xl:text-4xl text-2xl font-ObjectSans mb-1">
                      Streamify
                    </h1>
                  </div>
                  <div className="ml-6 group  w-full flex gap-2 font-NeueMachina ">
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
                <div className="flex group xl:none 2xl:none  xl:gap-23 2xl:gap-23 xl:items-center 2xl:items-center">
                  <div className="-mt-20 relative border rounded-2xl hover:scale-120 ease-in-out duration-200 mb-6">
                    <Image
                      className="rounded-2xl"
                      src="/assets/Streamify.png"
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
      </div>
    </div>
  );
};

export default MovieBase;
