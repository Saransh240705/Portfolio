"use client";

import { Minus, Square, X } from "lucide-react";
import Link from "next/link";

const MeOnline = () => {
  return (
    <div>
      <div>
        <div className="flex justify-between items-center rounded-tl-xl rounded-tr-xl border-white bg-black border-[0.5px] h-9 w-[200px] cursor-move">
          <span className="font-NeueMachina pl-2 text-white">me-online</span>
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
        <div className="border-white text-white rounded-bl-xl rounded-br-xl bg-black border-[0.5px] h-[4rem] max-w-[200px] cursor-movez">
          <ol className="list-decimal font-NeueMachina pt-2 text-[15px] pl-6 max-w-[700px]">
            <Link className="underline" href="https://github.com/Saransh240705">
              <li>Github</li>
            </Link>
            <Link
              className="underline"
              href="https://linkedin.com/in/saransh-b3729022b"
            >
              <li>linkedIn</li>
            </Link>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default MeOnline;
