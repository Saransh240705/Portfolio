"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import About from "./ui/About";
import Home from "./ui/Home";
import Frame from "./ui/Frame";
import Project from "./ui/Project";
import Testimonial from "./ui/Testimonial";
import Collaboration from "./ui/Collaboration";
import Footer from "./ui/Footer";

// Register GSAP plugins
gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

export default function Page() {
  useEffect(() => {
    // Initialize GSAP ScrollSmoother for smooth scrolling
    let smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 2, // Smooth factor (higher = smoother but slower)
      effects: true, // Enable data-speed effects
      smoothTouch: 0.1, // Smooth scrolling on touch devices
    });

    // Cleanup function
    return () => {
      if (smoother) smoother.kill();
    };
  }, []);

  return (
    <>
      <Frame />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Home />
          <About />
          <Project />
          <Testimonial color={"text-highlighted"} />
          <Collaboration />
          <Footer />
        </div>
      </div>
    </>
  );
}