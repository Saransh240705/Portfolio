"use client"; // Important in Next.js 13+ for interactive components

import { GithubIcon, House, LinkedinIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import Button from "./Button";

export default function Frame() {
  return (
    <div className="relative">
      {/* //top-bottom */}
      <div className="fixed flex justify-between flex-col ">
        <div className="w-[100vw] h-[3rem] border-[0.5px] border-gray-600">
          <div className="absolute left-[43.3rem] opacity-30 top-[0.7rem]">
            <p className="flex items-center justify-center text-center font-NeueMachina text-white">
              <span className="text-[#4949CE]">&lt;S&gt;</span>aransh
            </p>
          </div>
        </div>
        <div className="absolute z-10 w-[100vw] h-[3rem] border-[0.5px] top-[54.67rem] flex items-center p-4 border-gray-600">
          <div className="h-5 w-5 bg-[#4949CE] text rounded-full" />
          <div className="h-5 w-5 right-[1rem] absolute bg-[#4949CE] rounded-full" />
          <p className="absolute text-center font-NeueMachina left-[42rem] text-white">
            Based In India
          </p>
          <div className="flex absolute gap-3 left-[65rem]">
            <a href="https://github.com/Saransh240705" className="text-white hover:text-[#4949CE] transition-colors duration-200">
              <GithubIcon className="size-6 cursor-pointer" />
            </a>
            <a href="https://linkedin.com/in/saransh-b3729022b" className="text-white hover:text-[#4949CE] transition-colors duration-200">
              <LinkedinIcon className="size-6 cursor-pointer" />
            </a>
          </div>
          <div></div>
          <div className="text-white rounded-sm group cursor-pointer max-w-[14rem] max-h-[2rem] overflow-hidden flex absolute gap-2 items-center right-[5rem] border border-gray-600 font-NeueMachina hover:border-[#4949CE] transition-colors duration-200">
            <Button text="let's-work-together →" width={235} height={32} />
          </div>
        </div>
      </div>
      {/* left-right */}
      <div className="flex justify-between ">
        <div>
          <nav className="bg-transparent border-[0.5px] fixed flex items-center justify-center border-gray-600 w-fit h-[100vh] text-gray-400 p-4 ">
            <ul className="flex flex-col gap-4">
              <li>
                <Link href="/" className="block text-[#4949CE] transition-colors duration-200">
                  <House
                    className="p-0"
                    width={18}
                    height={18}
                  />
                </Link>
              </li>
              <li>
                <Link href="/about" className="block hover:text-[#4949CE] transition-colors duration-200">
                  <Image
                    src="/assets/Person.svg"
                    alt="about"
                    width={18}
                    height={18}
                    className="hover:opacity-80"
                  />
                </Link>
              </li>
              <li>
                <Link href="/projects" className="block hover:text-[#4949CE] transition-colors duration-200">
                  <Image
                    src="/assets/Laptop Coding.svg"
                    alt="projects"
                    width={18}
                    height={18}
                    className="hover:opacity-80"
                  />
                </Link>
              </li>
              <li>
                <Link href="/contact-me" className="block hover:text-[#4949CE] transition-colors duration-200">
                  <Image
                    src="/assets/Mail.svg"
                    alt="contact-me"
                    width={18}
                    height={18}
                    className="hover:opacity-80"
                  />
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="fixed right-0 h-[100vh] w-[3rem] border-[0.5px] border-gray-600"></div>
      </div>
    </div>
  );
}
