import { MenuIcon } from "lucide-react";
import React, { useState } from "react";
import HamburgerContent from "./HamburgerContent";

const HamburgerMenu = () => {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen(!open);
  };
  return (
    <div>
      <MenuIcon onClick={toggleMenu} />
      {open && (
        <div className="h-[51.7rem] p-4 mt-[12.4px] opacity-90  absolute z-10 -ml-[26.9rem] m-0 pt-18 min-w-screen text-white bg-black">
          <HamburgerContent />
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
