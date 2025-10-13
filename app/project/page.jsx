"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "../ui/Footer"
import Frame from "../ui/Frame"
import ProjectHome from "../ui/ProjectHome"
import Projects from "../ui/Projects"
import Testimonial from "../ui/Testimonial"

// Register GSAP plugins
gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

const page = () => {
  useEffect(() => {
    // Initialize GSAP ScrollSmoother for smooth scrolling
    let smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 2,
      effects: true,
      smoothTouch: 0.1,
    });

    return () => {
      if (smoother) smoother.kill();
    };
  }, []);

  return (
    <>
      <Frame />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <ProjectHome />
          <Projects />
          <Testimonial color={"code-aqua"} />
          <Footer />
        </div>
      </div>
    </>
  )
}

export default page