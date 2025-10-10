"use client";

import { Minus, Square, X } from "lucide-react";

const WhereIWorkFrame = () => {
  return (
    <div>
      <div>
        <div className="flex justify-between items-center rounded-tl-xl rounded-tr-xl border-white bg-black border-[0.5px] h-9 max-w-[600px] cursor-move">
          <span className="font-NeueMachina pl-2 text-white">where-i-work</span>
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
        <div className="border-white text-white rounded-bl-xl rounded-br-xl bg-black border-[0.5px] h-fit p-2 max-w-[400px]">
          <ol className="list-decimal font-NeueMachina pt-2 text-[15px] pl-6 max-w-[700px]">
            <li>Currently based in New Delhi, India 🇮🇳</li>
            <li>
              Available for remote collaborations across Asia and worldwide🌏
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default WhereIWorkFrame;
