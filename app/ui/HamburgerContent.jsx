import Link from "next/link";
import React, { useState } from "react";
import { hamburger } from "../lib/hamburger";
import { Github, Instagram, Linkedin } from "lucide-react";
import { usePathname } from "next/navigation";
import Button from "./Button";

const HamburgerContent = () => {
  const pathname = usePathname();

  const getColours = () => {
    switch (pathname) {
      case "/about":
        return { accent: "#E24E62" };
      case "/project":
        return { accent: "#91D2F9" };
      case "/contact-me":
        return { accent: "#4D81ED" };
      default:
        return { accent: "#4949CE" };
    }
  };
  

  const colours = getColours();
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

  return (
    <div className="flex flex-col ">
      <Link className="flex gap-4 mb-10 items-center" href="/">
        <span className="font-NeueMachina code-content">01</span>
        <span
          style={{ color: pathname === "/" ? colours.accent : "white" }}
          className="font-ObjectSans text-2xl"
        >
          home
        </span>
      </Link>
      <Link className="flex gap-4 mb-10 items-center" href="/about">
        <span className="font-NeueMachina code-content">02</span>
        <span
          style={{ color: pathname === "/about" ? colours.accent : "white" }}
          className="font-ObjectSans text-2xl"
        >
          about
        </span>
      </Link>
      <Link className="flex gap-4 mb-10 items-center" href="/project">
        <span className="font-NeueMachina code-content">03</span>
        <span
          style={{ color: pathname === "/project" ? colours.accent : "white" }}
          className="font-ObjectSans text-2xl"
        >
          projects
        </span>
      </Link>
      <Link className="flex gap-4 mb-10 items-center" href="/contact-me">
        <span className="font-NeueMachina code-content">04</span>
        <span
          style={{ color: pathname === "/contact-me" ? colours.accent : "white" }}
          className="font-ObjectSans text-2xl"
        >
          contact-me
        </span>
      </Link>

      <div className="flex gap-8 mt-60  m-auto">
        <Link className="cursor-pointer" href="https://www.linkedin.com/in/saransh-b3729022b/">
          <Linkedin />
        </Link>
        <Link className="cursor-pointer" href="https://github.com/Saransh240705">
          <Github />
        </Link>
        <Link className="cursor-pointer" href="https://leetcode.com/u/vsaransh6/">
          <LeetCodeIcon className="w-6 h-6" />
        </Link>
      </div>
      <Link href="/contact-me" className="m-auto mt-6">
        <Button text="let's-in-touch↗" width={160} height={32} />
      </Link>
    </div>
  );
};

export default HamburgerContent;
