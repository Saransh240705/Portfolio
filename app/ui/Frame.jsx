"use client"; // Important in Next.js 13+ for interactive components

import { GithubIcon, House, LinkedinIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import Button from "./Button";

export default function Frame() {
  const pathname = usePathname();

  // Define color themes for each page
  const getThemeColors = () => {
    switch (pathname) {
      case '/about':
        return {
          accent: '#E24E62', 
          iconFilter: 'brightness(0) saturate(100%) invert(55%) sepia(57%) saturate(5084%) hue-rotate(336deg) brightness(95%) contrast(85%)'
        };
      case '/project':
        return {
          accent: '#91D2F9',  
          iconFilter: 'brightness(0) saturate(100%) invert(85%) sepia(27%) saturate(1453%) hue-rotate(173deg) brightness(99%) contrast(96%)'
        };
      case '/contact-me':
        return {
          accent: '#4D81ED', 
          iconFilter: 'brightness(0) saturate(100%) invert(65%) sepia(81%) saturate(2697%) hue-rotate(212deg) brightness(97%) contrast(90%)'
        };
      default:
        return {
          accent: '#4949CE', 
          iconFilter: 'none'
        };
    }
  };

  const themeColors = getThemeColors();

  return (
    <div className="relative z-50 ">
      {/* //top-bottom */}
      <div className="fixed flex backdrop-blur-xs justify-between flex-col z-50">
        <div className="w-[100vw] h-[3rem] border-[0.5px] border-gray-600">
          <div className=" h-full  flex items-center justify-center text-center font-NeueMachina text-white">
            <p className="">
              <span style={{ color: themeColors.accent }}>&lt;S&gt;</span>aransh
            </p>
          </div>
        </div>
        <div className="absolute backdrop-blur-lg z-50 w-[100vw] h-[3rem] border-[0.5px] top-[54.67rem] flex items-center p-4 border-gray-600">
          <div 
            className="h-5 w-5 text rounded-full transition-colors duration-300" 
            style={{ backgroundColor: themeColors.accent }}
          />
          <div 
            className="h-5 w-5 right-[1rem] absolute rounded-full transition-colors duration-300" 
            style={{ backgroundColor: themeColors.accent }}
          />
          <p className="absolute text-center font-NeueMachina left-[42rem] text-white">
            Based In India
          </p>
          <div className="flex absolute gap-3 left-[65rem]">
            <a 
              href="https://github.com/Saransh240705" 
              className="text-white transition-colors duration-200"
              onMouseEnter={(e) => e.currentTarget.style.color = themeColors.accent}
              onMouseLeave={(e) => e.currentTarget.style.color = 'white'}
            >
              <GithubIcon className="size-6 cursor-pointer" />
            </a>
            <a 
              href="https://linkedin.com/in/saransh-b3729022b" 
              className="text-white transition-colors duration-200"
              onMouseEnter={(e) => e.currentTarget.style.color = themeColors.accent}
              onMouseLeave={(e) => e.currentTarget.style.color = 'white'}
            >
              <LinkedinIcon className="size-6 cursor-pointer" />
            </a>
          </div>
          <div 
            className="text-white rounded-sm group cursor-pointer max-w-[14rem] max-h-[2rem] overflow-hidden flex absolute gap-2 items-center right-[5rem] border border-gray-600 font-NeueMachina transition-colors duration-200"
            onMouseEnter={(e) => e.currentTarget.style.borderColor = themeColors.accent}
            onMouseLeave={(e) => e.currentTarget.style.borderColor = '#4b5563'}
          >
            <Button text="let's-work-together →" width={235} height={32} themeColor={themeColors.accent} />
          </div>
        </div>
      </div>
      {/* left-right */}
      <div className="flex justify-between ">
        <div>
          <nav className=" border-[0.5px] fixed flex items-center justify-center border-gray-600 w-fit h-[100vh] text-gray-400 p-4 z-50">
            <ul className="flex flex-col gap-4">
              <li>
                <Link 
                  href="/" 
                  className={clsx(
                    "block transition-colors duration-200 rounded",
                    pathname === '/' ? 'text-highlighted' : 'text-gray-400 hover:text-white'
                  )}
                >
                  <House
                    className="pointer-events-none"
                    width={18}
                    height={18}
                  />
                </Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  className={clsx(
                    "block transition-colors duration-200 rounded",
                    pathname === '/about' ? 'text-white' : 'text-gray-400 hover:text-white'
                  )}
                >
                  <Image
                    src="/assets/Person.svg"
                    alt="about"
                    width={18}
                    height={18}
                    className="pointer-events-none"
                    style={{
                      filter: pathname === '/about' ? themeColors.iconFilter : 'none'
                    }}
                  />
                </Link>
              </li>
              <li>
                <Link 
                  href="/project" 
                  className={clsx(
                    "block transition-colors duration-200 rounded",
                    pathname === '/project' ? 'text-white' : 'text-gray-400 hover:text-white'
                  )}
                >
                  <Image
                    src="/assets/Laptop Coding.svg"
                    alt="projects"
                    width={18}
                    height={18}
                    className="pointer-events-none"
                    style={{
                      filter: pathname === '/project' ? themeColors.iconFilter : 'none'
                    }}
                  />
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact-me" 
                  className={clsx(
                    "block transition-colors duration-200 rounded",
                    pathname === '/contact-me' ? 'text-white' : 'text-gray-400 hover:text-white'
                  )}
                >
                  <Image
                    src="/assets/Mail.svg"
                    alt="contact-me"
                    width={18}
                    height={18}
                    className="pointer-events-none"
                    style={{
                      filter: pathname === '/contact-me' ? themeColors.iconFilter : 'none'
                    }}
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
