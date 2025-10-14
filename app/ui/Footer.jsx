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
        y: 50
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 85%",
          end: "bottom 15%",
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
            y: 30
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: footerRef.current,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play reverse play reverse"
            },
            delay: index * 0.2
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
    <div ref={footerRef} className="mt-20 mb-10 max-w-[1370px] m-auto flex items-center justify-between bg-black">
     
        <div ref={logoRef} className="flex items-center">
          <div>
            <Image src="/assets/MyLogo.png" width={80} height={80} />
          </div>
          <div>
            <span className="font-NeueMachina">Saransh</span>
          </div>
        </div>
        <div ref={centerRef} className="font-NeueMachina code-content">
            <h2>@{year} Saransh | Freelance Web Developer</h2>
        </div>

      <div ref={linksRef} className="flex gap-14 pr-4 font-NeueMachina code-content">
        <div>
          <Link href="/about">about</Link>
        </div>
        <div>
          <Link href="/project">project</Link>
        </div>
        <div>
          <Link href="/contact-me">contact</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
