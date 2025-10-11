'use client';

import Image from "next/image";
import Link from "next/link";

const Footer = () => {

    const year = new Date().getFullYear();

  return (
    <div className="mt-20 mb-10 max-w-[1370px] m-auto flex items-center justify-between bg-black">
     
        <div className="flex items-center">
          <div>
            <Image src="/assets/MyLogo.png" width={80} height={80} />
          </div>
          <div>
            <span className="font-NeueMachina">Saransh</span>
          </div>
        </div>
        <div className="font-NeueMachina code-content">
            <h2>@{year} Saransh | Freelance Web Developer</h2>
        </div>

      <div className="flex gap-14 pr-4 font-NeueMachina code-content">
        <div>
          <Link href="">about</Link>
        </div>
        <div>
          <Link href="">work</Link>
        </div>
        <div>
          <Link href="">contact</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
