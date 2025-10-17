'use client';

import { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Footer = () => {
  const footerRef = useRef(null);
  const logoRef = useRef(null);
  const centerRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Footer entrance animation
    gsap.fromTo(footerRef.current,
      {
        opacity: 0,
        y: 30
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 90%",
          end: "bottom 10%",
          toggleActions: "play reverse play reverse"
        }
      }
    );

    // Stagger animation for footer sections
    const sections = [logoRef.current, centerRef.current, linksRef.current];
    sections.forEach((section, index) => {
      if (section) {
        gsap.fromTo(section,
          {
            opacity: 0,
            y: 20
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: footerRef.current,
              start: "top 85%",
              end: "bottom 15%",
              toggleActions: "play reverse play reverse"
            },
            delay: index * 0.15
          }
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const year = new Date().getFullYear();

  return (
    <footer ref={footerRef} className="w-full bg-black text-white border-t border-gray-800 p-8 mt-20 mb-12">
      <div className="max-w-[1370px] mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div ref={logoRef} className="flex items-center gap-3">
            <Image src="/assets/MyLogo.png" width={80} height={80} alt="Logo" />
            <span className="font-NeueMachina text-white text-xl">Saransh</span>
          </div>
          
          <div ref={centerRef} className="font-NeueMachina text-gray-400 text-sm">
            <span>© {year} Saransh | Freelance Web Developer</span>
          </div>

          <div ref={linksRef} className="flex gap-8 font-NeueMachina">
            <Link href="/about" className="text-white hover:text-highlighted transition-colors duration-200">
              about
            </Link>
            <Link href="/project" className="text-white hover:text-highlighted transition-colors duration-200">
              project
            </Link>
            <Link href="/contact-me" className="text-white hover:text-highlighted transition-colors duration-200">
              contact
            </Link>
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
