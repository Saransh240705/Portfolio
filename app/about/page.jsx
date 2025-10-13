"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Frame from "../ui/Frame"
import AboutHome from "../ui/AboutHome"
import AboutTwo from "../ui/AboutTwo"
import TechStack from "../ui/TechStack"
import Footer from "../ui/Footer";


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
          <AboutHome />
          <AboutTwo />
          <TechStack />
          <Footer />
        </div>
      </div>
    </>
  )
}

export default page