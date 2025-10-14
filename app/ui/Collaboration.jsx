import { Minus, Square, X } from "lucide-react";
import Image from "next/image";
import Button from "./Button";
import Link from "next/link";

const Collaboration = () => {
  return (
    <div className="mt-50 mb-12 flex justify-center items-center">
      <div className="">
        <div>
          <div className="flex justify-between items-center rounded-tl-xl rounded-tr-xl border-white bg-black border-[0.5px] h-9 min-w-[40rem]  ">
            <span className="font-NeueMachina pl-2 text-white">
              collaborations
            </span>
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
          <div className="border-white text-white rounded-bl-xl rounded-br-xl bg-black border-[0.5px] max-w-[40rem] h-[13rem] ">
            <div className="flex gap-8 items-center justify-center h-full w-full">
              <div>
                <div className="ml-4 border border-white rounded-full relative">
                  <Image
                    src="/assets/MyPic.jpeg"
                    className="rounded-full"
                    width={150}
                    height={150}
                    alt="MyPic"
                  />
                </div>
                <div className="absolute -mt-8 left-[31.7rem] bg-black rounded-full w-7 h-7 flex justify-center items-center border border-white">
                  <span>👋</span>
                </div>
              </div>
              <div className="flex flex-col gap-4 justify-center h-full pr-[2px]">
                <h1 className="text-4xl font-ObjectSans">
                  Let’s work together on your next project
                </h1>
                <Link href="/contact-me">
                  <Button
                    text="let's-work-together →"
                    width={235}
                    height={32}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collaboration;
