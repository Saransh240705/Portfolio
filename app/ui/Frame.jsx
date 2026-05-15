"use client"; // Important in Next.js 13+ for interactive components

import { GithubIcon, House, LinkedinIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import Button from "./Button";
import HamburgerMenu from "./Hamburger";

export default function Frame() {
  const pathname = usePathname();

  // Define color themes for each page
  const getThemeColors = () => {
    switch (pathname) {
      case "/about":
        return {
          accent: "#E24E62",
          iconFilter:
            "brightness(0) saturate(100%) invert(55%) sepia(57%) saturate(5084%) hue-rotate(336deg) brightness(95%) contrast(85%)",
        };
      case "/project":
        return {
          accent: "#91D2F9",
          iconFilter:
            "brightness(0) saturate(100%) invert(85%) sepia(27%) saturate(1453%) hue-rotate(173deg) brightness(99%) contrast(96%)",
        };
      case "/project/Streamify":
        return {
          accent: "#91D2F9",
          iconFilter:
            "brightness(0) saturate(100%) invert(85%) sepia(27%) saturate(1453%) hue-rotate(173deg) brightness(99%) contrast(96%)",
        };
      case "/project/PeaceHub":
        return {
          accent: "#91D2F9",
          iconFilter:
            "brightness(0) saturate(100%) invert(85%) sepia(27%) saturate(1453%) hue-rotate(173deg) brightness(99%) contrast(96%)",
        };
      case "/project/Brainwave":
        return {
          accent: "#91D2F9",
          iconFilter:
            "brightness(0) saturate(100%) invert(85%) sepia(27%) saturate(1453%) hue-rotate(173deg) brightness(99%) contrast(96%)",
        };
      case "/project/SafenGo":
        return {
          accent: "#91D2F9",
          iconFilter:
            "brightness(0) saturate(100%) invert(85%) sepia(27%) saturate(1453%) hue-rotate(173deg) brightness(99%) contrast(96%)",
        };
      case "/project/MovieBase":
        return {
          accent: "#91D2F9",
          iconFilter:
            "brightness(0) saturate(100%) invert(85%) sepia(27%) saturate(1453%) hue-rotate(173deg) brightness(99%) contrast(96%)",
        };
      case "/contact-me":
        return {
          accent: "#4D81ED",
          iconFilter:
            "brightness(0) saturate(100%) invert(65%) sepia(81%) saturate(2697%) hue-rotate(212deg) brightness(97%) contrast(90%)",
        };
      default:
        return {
          accent: "#4949CE",
          iconFilter: "none",
        };
    }
  };

  const themeColors = getThemeColors();

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
    <div className="relative z-50">
      {/* Top Navigation Bar */}
      <div className="fixed top-0 w-full z-50 backdrop-blur-sm">
        <div className="w-full h-12 border-b border-gray-600 bg-black/50 relative">
          {/* Top-left corner overlap */}
          <div className="absolute -left-px -top-px w-12 h-12 bg-black/50 border-r border-b border-gray-600"></div>
          {/* Top-right corner overlap */}
          <div className="absolute -right-px -top-px w-12 h-12 bg-black/50 border-l border-b border-gray-600"></div>
          
          <div className="h-full flex items-center justify-center px-4 relative">
            {/* Logo - Centered */}
            <Link href="/" className="font-NeueMachina text-white absolute">
              <span style={{ color: themeColors.accent }}>&lt;S&gt;</span>
              aransh
            </Link>

            {/* Hamburger Menu - Centered in top-right corner box */}
            <div className="absolute right-0 top-0 w-12 h-12 flex items-center justify-center">
              <HamburgerMenu />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Status Bar */}
      <div className="fixed bottom-0 w-full z-50 backdrop-blur-sm">
        <div className="w-full h-12 border-t border-gray-600 bg-black/50 relative">
          {/* Bottom-left corner overlap */}
          <div className="absolute -left-px -bottom-px w-12 h-12 bg-black/50 border-r border-t border-gray-600"></div>
          {/* Bottom-right corner overlap */}
          <div className="absolute -right-px -bottom-px w-12 h-12 bg-black/50 border-l border-t border-gray-600"></div>
          
          {/* Bottom bar content */}
          <div className="h-full flex items-center justify-between px-4 relative">
            {/* Left indicator */}
            <div
              className="h-3 w-3 rounded-full transition-colors duration-300 relative z-10"
              style={{ backgroundColor: themeColors.accent }}
            />

            {/* Center text - Absolutely centered */}
            <p className="font-NeueMachina text-white text-sm absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">Based In India</p>

            {/* Right section with social links and CTA */}
            <div className="flex items-center gap-4">
              {/* Social Links */}
              <div className="hidden lg:block xl:block 2xl:block">
                <div className="flex gap-3">
                  <a
                    href="https://github.com/Saransh240705"
                    className="text-white transition-colors duration-200 hover:opacity-80"
                    style={{ color: "white" }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = themeColors.accent)
                    }
                    onMouseLeave={(e) => (e.currentTarget.style.color = "white")}
                  >
                    <GithubIcon className="size-5" />
                  </a>
                  <a
                    href="https://linkedin.com/in/saransh-b3729022b"
                    className="text-white transition-colors duration-200 hover:opacity-80"
                    style={{ color: "white" }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = themeColors.accent)
                    }
                    onMouseLeave={(e) => (e.currentTarget.style.color = "white")}
                  >
                    <LinkedinIcon className="size-5" />
                  </a>
                  <a
                    href="https://leetcode.com/u/vsaransh6/"
                    className="text-white transition-colors duration-200 hover:opacity-80"
                    style={{ color: "white" }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = themeColors.accent)
                    }
                    onMouseLeave={(e) => (e.currentTarget.style.color = "white")}
                  >
                    <LeetCodeIcon className="size-5" />
                  </a>
                </div>
              </div>

              {/* CTA Button */}
              <div className="hidden mr-3 lg:block">
                <Link href="/contact-me">
                  <Button
                    text="let's-work-together →"
                    width={200}
                    height={28}
                    themeColor={themeColors.accent}
                  />
                </Link>
              </div>

              {/* Right indicator */}
              <div
                className="h-3 w-3 rounded-full transition-colors duration-300 relative z-10"
                style={{ backgroundColor: themeColors.accent }}
              />
            </div>
          </div>
        </div>
      </div>
      {/* Side Navigation - Desktop Only */}
      <div className="hidden xl:block lg:block 2xl:block">
        <div className="flex justify-between">
          <div>
            <nav className="border-r border-gray-600 fixed left-0 top-12 bottom-12 flex items-center justify-center w-12 text-gray-400 z-40">
              <ul className="flex flex-col gap-6">
                <li>
                  <Link
                    href="/"
                    className={clsx(
                      "block transition-colors duration-200 rounded p-2",
                      pathname === "/"
                        ? "text-highlighted"
                        : "text-gray-400 hover:text-white"
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
                      "block transition-colors duration-200 rounded p-2",
                      pathname === "/about"
                        ? "text-white"
                        : "text-gray-400 hover:text-white"
                    )}
                  >
                    <Image
                      src="/assets/Person.svg"
                      alt="about"
                      width={18}
                      height={18}
                      className="pointer-events-none"
                      style={{
                        filter:
                          pathname === "/about"
                            ? themeColors.iconFilter
                            : "none",
                      }}
                    />
                  </Link>
                </li>
                <li>
                  <Link
                    href="/project"
                    className={clsx(
                      "block transition-colors duration-200 rounded p-2",
                      pathname === "/project"
                        ? "text-white"
                        : "text-gray-400 hover:text-white"
                    )}
                  >
                    <Image
                      src="/assets/Laptop Coding.svg"
                      alt="projects"
                      width={18}
                      height={18}
                      className="pointer-events-none"
                      style={{
                        filter:
                          pathname === "/project"
                            ? themeColors.iconFilter
                            : "none",
                      }}
                    />
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact-me"
                    className={clsx(
                      "block transition-colors duration-200 rounded p-2",
                      pathname === "/contact-me"
                        ? "text-white"
                        : "text-gray-400 hover:text-white"
                    )}
                  >
                    <Image
                      src="/assets/Mail.svg"
                      alt="contact-me"
                      width={18}
                      height={18}
                      className="pointer-events-none"
                      style={{
                        filter:
                          pathname === "/contact-me"
                            ? themeColors.iconFilter
                            : "none",
                      }}
                    />
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="fixed right-0 top-12 bottom-12 w-12 border-l border-gray-600"></div>
        </div>
      </div>
    </div>
  );
}
