"use client";

import Link from "next/link";
import { useRef, useEffect } from "react";
import { project } from "../lib/project";
import Button from "./Button";
import ProjectBox from "./ProjectBox";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Project = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const projectsContainerRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Title animation
    gsap.fromTo(titleRef.current,
      {
        opacity: 0,
        y: 60,
        scale: 0.8
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

    // Project boxes stagger animation
    gsap.fromTo(".project-box",
      {
        opacity: 0,
        y: 80,
        scale: 0.9,
        rotateX: -20
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        rotateX: 0,
        duration: 1.5,
        ease: "back.out(1.7)",
        stagger: 0.3,
        scrollTrigger: {
          trigger: projectsContainerRef.current,
          start: "top 75%",
          end: "bottom 25%",
          toggleActions: "play reverse play reverse"
        }
      }
    );

    // Button animation
    gsap.fromTo(buttonRef.current,
      {
        opacity: 0,
        y: 40
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
          end: "bottom 40%",
          toggleActions: "play reverse play reverse"
        },
        delay: 0.8
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

const Project = () => {
  return (
    <div ref={sectionRef} className="text-white mt-15 relative">
      <div className="bg-[#4949CE] h-[9rem] w-[9rem] -z-100 mt-220 ml-34 absolute rounded-full blur-[6rem]" />
      <div className="bg-[#4949CE] h-[9rem] w-[9rem] -z-100 mt-55 ml-270 absolute rounded-full blur-[6rem]" />
      <div className="mb-[14rem] flex w-full justify-center items-center">
        <h1 ref={titleRef} className="text-5xl font-ObjectSans">
          Project <span className="text-highlighted">Highlight</span>
        </h1>
      </div>
      <div ref={projectsContainerRef} className="w-full flex -mt-15 flex-col gap-10 justify-center items-center">
        <div>
          {project.map((p) => (
            <Link key={p.id} href={p.link}>
              <div className="project-box">
                <ProjectBox
                  key={p.id}
                  serialNo={p.serialNo}
                  name={p.name}
                  image={p.image}
                  tag1={p.tag1}
                  tag2={p.tag2}
                  tag3={p.tag3}
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Link href='/project' className="w-full -mt-6 flex justify-center items-center">
        <div ref={buttonRef}>
          <Button text="all-projects →" width={142} height={37} />
        </div>
      </Link>
    </div>
  );
};
};

export default Project;
