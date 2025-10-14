import { Minus, Square, X } from "lucide-react";
import Image from "next/image";
import React from "react";

const TechStackFrame = () => {
  return (
    <div>
      <div>
        <div>
          <div className="flex justify-between items-center rounded-tl-xl rounded-tr-xl border-white bg-black border-[0.5px] h-9 w-[700px] ">
            <span className="font-NeueMachina pl-2 text-white">about-me</span>
            <div className="flex gap-2 pr-2  items-center justify-center">
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
          <div className="border-white text-white rounded-bl-xl pt-3 rounded-br-xl bg-black border-[0.5px] h-[18rem] max-w-[800px] ">
            <div className="grid grid-cols-6 grid-rows-5 gap-4">
              <div className="flex flex-col justify-center items-center">
                <Image
                  src="/assets/HTML 5.svg"
                  width={102}
                  height={102}
                  alt="HTML"
                />
                <span className="font-NeueMachina">HTML</span>
              </div>
              <div className="flex flex-col justify-center items-center">
                <Image
                  src="/assets/CSS3.svg"
                  width={102}
                  height={102}
                  alt="CSS"
                />
                <span className="font-NeueMachina">CSS</span>
              </div>
              <div className="flex flex-col justify-center items-center">
                <Image
                  src="/assets/JavaScript.svg"
                  width={102}
                  height={102}
                  alt="JavaScript"
                />
                <span className="font-NeueMachina">JavaScript</span>
              </div>
              <div className="flex flex-col justify-center items-center">
                <Image
                  src="/assets/React.svg"
                  width={102}
                  height={102}
                  alt="React"
                />
                <span className="font-NeueMachina">React</span>
              </div>
              <div className="flex flex-col justify-center items-center">
                <Image
                  src="/assets/Node Js.svg"
                  width={102}
                  height={102}
                  alt="Nodejs"
                />
                <span className="font-NeueMachina">NodeJs</span>
              </div>
              <div className="flex flex-col justify-center items-center">
                <Image
                  src="/assets/Express Js.svg"
                  width={102}
                  height={102}
                  alt="ExpressJs"
                />
                <span className="font-NeueMachina">ExpressJs</span>
              </div>
              <div className="flex flex-col justify-center items-center">
                <Image
                  src="/assets/Python.svg"
                  width={102}
                  height={102}
                  alt="Python"
                />
                <span className="font-NeueMachina">Python</span>
              </div>
              <div className="flex flex-col justify-center items-center">
                <Image
                  src="/assets/Tailwindcss.svg"
                  width={102}
                  height={102}
                  alt="TailwindCSS"
                />
                <span className="font-NeueMachina">Tailwindcss</span>
              </div>
              <div className="flex flex-col justify-center items-center">
                <Image
                  src="/assets/Docker.svg"
                  width={102}
                  height={102}
                  alt="Docker"
                />
                <span className="font-NeueMachina">Docker</span>
              </div>
              <div className="flex flex-col justify-center items-center">
                <Image
                  src="/assets/TypeScript.svg"
                  width={102}
                  height={102}
                  alt="TypeScript"
                />
                <span className="font-NeueMachina">TypeScript</span>
              </div>
              <div className="flex flex-col justify-center items-center">
                <Image
                  src="/assets/Nextjs.svg"
                  width={102}
                  height={102}
                  alt="Nextjs"
                />
                <span className="font-NeueMachina">Nextjs</span>
              </div>
              <div className="flex flex-col justify-center items-center">
                <Image
                  src="/assets/Figma.svg"
                  width={102}
                  height={102}
                  alt="Framer"
                />
                <span className="font-NeueMachina">Figma</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStackFrame;
