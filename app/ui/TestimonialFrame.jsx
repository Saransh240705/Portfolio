import { Minus, Square, X } from "lucide-react";

const TestimonialFrame = ({ id, name, desc }) => {
  return (
    <div>
      <div className="flex justify-between items-center rounded-tl-xl rounded-tr-xl border-white bg-black border-[0.5px] h-9 w-[400px]">
        <span className="font-NeueMachina pl-2 text-white">testimonials</span>
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
      <div className="border-white text-white rounded-bl-xl rounded-br-xl bg-black border-[0.5px] h-[13rem] max-w-[400px]">
        <div className="p-3 font-NeueMachina flex flex-col justify-end ">
          <div className="text-sm h-[10rem]">{desc}</div>
          <div className="font-ObjectSans code-content">{name}</div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialFrame;
