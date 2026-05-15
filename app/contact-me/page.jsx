"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mail, Github, Linkedin, MapPin, ArrowUpRight, Copy, Check } from "lucide-react";
import { useState } from "react";
import ContactMeHome from "../ui/ContactMeHome";
import Frame from "../ui/Frame";
import Footer from "../ui/Footer";

// Register GSAP plugins
gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

const LeetCodeIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
  </svg>
);

const ContactInfoCard = ({ icon: Icon, label, value, href, isCopyable }) => {
  const [copied, setCopied] = useState(false);
  const cardRef = useRef(null);

  const handleCopy = (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <a
      ref={cardRef}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center justify-between border border-gray-700 hover:border-gray-500 rounded-xl p-5 sm:p-6 transition-all duration-300 bg-black/30 hover:bg-white/[0.03] backdrop-blur-sm"
    >
      <div className="flex items-center gap-4 sm:gap-5">
        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-gray-700 group-hover:border-[#4D81ED] flex items-center justify-center transition-colors duration-300">
          <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-[#4D81ED] transition-colors duration-300" />
        </div>
        <div className="flex flex-col">
          <span className="text-xs sm:text-sm code-aqua font-NeueMachina">{label}</span>
          <span className="text-sm sm:text-base text-white font-NeueMachina mt-1 break-all">{value}</span>
        </div>
      </div>
      <div className="flex items-center gap-2">
        {isCopyable && (
          <button
            onClick={handleCopy}
            className="p-2 rounded-lg border border-gray-700 hover:border-gray-500 transition-colors duration-200"
            title="Copy to clipboard"
          >
            {copied ? (
              <Check className="w-4 h-4 text-green-400" />
            ) : (
              <Copy className="w-4 h-4 text-gray-400 hover:text-white transition-colors duration-200" />
            )}
          </button>
        )}
        <ArrowUpRight className="w-5 h-5 text-gray-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
      </div>
    </a>
  );
};

const page = () => {
  const cardsRef = useRef(null);

  useEffect(() => {
    // Initialize GSAP ScrollSmoother for smooth scrolling
    let smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 2,
      effects: true,
      smoothTouch: 0.1,
    });

    // Animate contact cards stagger
    if (cardsRef.current) {
      const cards = cardsRef.current.querySelectorAll(".group");
      gsap.fromTo(
        cards,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    }

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

          {/* Contact Info Section */}
          <div className="max-w-[750px] mx-auto px-4 sm:px-6 md:px-8 mt-10 sm:mt-16 mb-20 sm:mb-28">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-ObjectSans text-white">
                Get in <span className="code-blue">touch</span>
              </h2>
              <p className="font-NeueMachina text-gray-400 text-sm sm:text-base mt-4 max-w-md mx-auto">
                Feel free to reach out through any of the channels below.
              </p>
            </div>

            <div ref={cardsRef} className="flex flex-col gap-4">
              <ContactInfoCard
                icon={Mail}
                label="email"
                value="vsaransh6@gmail.com"
                href="mailto:vsaransh6@gmail.com"
                isCopyable
              />
              <ContactInfoCard
                icon={Github}
                label="github"
                value="Saransh240705"
                href="https://github.com/Saransh240705"
              />
              <ContactInfoCard
                icon={Linkedin}
                label="linkedin"
                value="Saransh"
                href="https://linkedin.com/in/saransh-b3729022b"
              />
              <ContactInfoCard
                icon={LeetCodeIcon}
                label="leetcode"
                value="vsaransh6"
                href="https://leetcode.com/u/vsaransh6/"
              />
              <ContactInfoCard
                icon={MapPin}
                label="location"
                value="India"
                href="https://maps.google.com/?q=India"
              />
            </div>
          </div>

          <Footer />
        </div>
      </div>
    </>
  );
};

export default page;