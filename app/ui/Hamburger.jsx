import { MenuIcon, X } from "lucide-react";
import React, { useState, useEffect } from "react";
import HamburgerContent from "./HamburgerContent";

const HamburgerMenu = () => {
  const [open, setOpen] = useState(false);
  
  const toggleMenu = () => {
    setOpen(!open);
  };

  // Disable/enable scrolling when menu opens/closes
  useEffect(() => {
    if (open) {
      // Disable scrolling
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${window.scrollY}px`;
      document.body.style.width = '100%';
    } else {
      // Re-enable scrolling and restore scroll position
      const scrollY = document.body.style.top;
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
    };
  }, [open]);
  
  return (
    <div className="relative lg:hidden">
      {/* Animated Hamburger/Close Icon */}
      <div 
        onClick={toggleMenu} 
        className="cursor-pointer relative z-20 p-2 transition-transform duration-300 hover:scale-110"
      >
        <div className="relative w-6 h-6">
          {/* Hamburger Icon */}
          <MenuIcon 
            className={`absolute top-0 left-0 transition-all duration-500 ease-in-out ${
              open 
                ? 'opacity-0 rotate-180 scale-75' 
                : 'opacity-100 rotate-0 scale-100'
            }`}
          />
          {/* Close Icon */}
          <X 
            className={`absolute top-0 left-0 transition-all duration-500 ease-in-out ${
              open 
                ? 'opacity-90 rotate-0 scale-100' 
                : 'opacity-0 -rotate-180 scale-75'
            }`}
          />
        </div>
      </div>

      {/* Animated Menu Container */}
      <div 
        className={`fixed top-0 right-0 h-screen w-full sm:w-[25rem] bg-black text-white z-10 transition-all duration-700 ease-in-out transform ${
          open 
            ? 'translate-y-0 opacity-100' 
            : '-translate-y-full opacity-0'
        }`}
      >
        <div className="p-6 pt-20">
          <HamburgerContent />
        </div>
      </div>

      {/* Background Overlay */}
      {open && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-5 transition-opacity duration-500 ease-in-out animate-fadeIn"
          onClick={toggleMenu}
        />
      )}
    </div>
  );
};

export default HamburgerMenu;
