"use client";

import { Minus, Square, X } from "lucide-react";

const CollaborationFrame = () => {
  return (
    <div className="cursor-move">
      <div>
        <div className="flex justify-between items-center rounded-tl-xl rounded-tr-xl border-white bg-black border-[0.5px] h-9 max-w-[530px]  ">
          <span className="font-NeueMachina pl-2 text-white">collaborations</span>
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
        <div className="border-white text-white rounded-bl-xl rounded-br-xl bg-black border-[0.5px] h-fit max-w-[530px] w-fit p-2">
          <ol className="list-decimal font-NeueMachina pt-2 text-[15px] pl-6 max-w-[700px]">
            <li>
              My ideal collaborations are with <span className="code-green">web agencies</span> and <span className="code-blue"> digital design
              studios </span> that need <span className="code-red"> technical expertise </span> coupled with an eye for
              <span className="code-yellow"> design</span> and <span className="text-highlighted"> aesthetics</span>.
            </li>
            <li>
              I can also work with <span className="code-aqua"> independent professionals </span> such as <span className="code-green"> designers </span>
              or other <span className="code-red"> developers </span>, to complement their skills or bring
              <span className="code-yellow">additional value</span> to their projects.
            </li>
            <li>
              I achieve  my <span className="code-aqua">best results</span> in partnerships that are based on <span className="code-blue">mutual
              understanding</span> and <span className="text-highlighted"> close collaboration</span> between all involved parts,
              especially design and development.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default CollaborationFrame;
