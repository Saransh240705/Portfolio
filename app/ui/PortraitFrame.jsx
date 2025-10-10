"use client";

import { Minus, Square, X } from "lucide-react";
import Image from "next/image";

const PortraitFrame = () => {
  return (
    <div className="cursor-move">
      <div>
        <div className="flex justify-between items-center rounded-tl-xl rounded-tr-xl border-white bg-black border-[0.5px] h-9   max-w-[200px] ">
          <span className="font-NeueMachina pl-2 text-white">portrait</span>
          <div className="flex gap-2 pr-2 items-center justify-center">
            <span className="text-white">
              <Minus />
            </span>
            <span className=" text-white">
              <Square />
            </span>
            <span className="text-white">
              <X />
            </span>
          </div>
        </div>
        <div className="border-white text-white rounded-bl-xl rounded-br-xl bg-black border-[0.5px] h-fit w-fit  max-w-[200px] overflow-hidden">
          <Image 
            src="/assets/MyPic.jpeg" 
            alt="Portrait of Saransh" 
            width={200} 
            height={300}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  )
}

export default PortraitFrame