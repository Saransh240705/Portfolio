"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ContactMeForm from "../ui/ContactMeForm"
import ContactMeHome from "../ui/ContactMeHome"
import Frame from "../ui/Frame"
import Footer from "../ui/Footer";

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
          <ContactMeHome />
          <ContactMeForm />
          <Footer />
        </div>
      </div>
    </>
  )
}

export default page