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
      <Link href="/contact-me" className="m-auto mt-6">
        <Button text="let's-in-touch↗" width={160} height={32} />
      </Link>
    </div>
  );
};

export default HamburgerContent;
