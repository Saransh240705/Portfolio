import Link from "next/link";
import React, { useState } from "react";
import { hamburger } from "../lib/hamburger";
import { Github, Instagram, Linkedin } from "lucide-react";
import { usePathname } from "next/navigation";

const HamburgerContent = () => {
  const pathname = usePathname();

  const getColours = () => {
    switch (pathname) {
      case "/about":
        return { accent: "#4949CE" };
      case "/project":
        return { accent: "#4949CE" };
      case "/contact-me":
        return { accent: "#4949CE" };
      default:
        return { accent: "#4949CE" };
    }
  };

  const colours = getColours();

  return (
    <div className="flex flex-col ">
      <Link className="flex gap-4 mb-10 items-center" href="/">
        <span className="font-NeueMachina code-content">01</span>
        <span
          style={{ color: colours.accent }}
          className="font-ObjectSans text-white text-2xl"
        >
          home
        </span>
      </Link>
      <Link className="flex gap-4 mb-10 items-center" href="/about">
        <span className="font-NeueMachina code-content">02</span>
        <span
          style={{ color: colours.accent }}
          className="font-ObjectSans text-white text-2xl"
        >
          about
        </span>
      </Link>
      <Link className="flex gap-4 mb-10 items-center" href="/project">
        <span className="font-NeueMachina code-content">03</span>
        <span
          style={{ color: colours.accent }}
          className="font-ObjectSans text-white text-2xl"
        >
          projects
        </span>
      </Link>
      <Link className="flex gap-4 mb-10 items-center" href="/contact-me">
        <span className="font-NeueMachina code-content">04</span>
        <span
          style={{ color: colours.accent }}
          className="font-ObjectSans text-white text-2xl"
        >
          contact-me
        </span>
      </Link>

      <div className="flex gap-8 mt-80  m-auto">
        <Link className="cursor-pointer" href="">
          <Linkedin />
        </Link>
        <Link className="cursor-pointer" href="">
          <Github />
        </Link>
        <Link className="cursor-pointer" href="">
          <Instagram />
        </Link>
      </div>
    </div>
  );
};

export default HamburgerContent;
