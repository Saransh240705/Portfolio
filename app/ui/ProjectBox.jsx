"use client";
import Image from "next/image";

const ProjectBox = ({ serialNo, name, image, tag1, tag2, tag3 }) => {
  return (
    <div className="flex transparent mb-20 w-[1000px] h-[15rem] group border rounded-2xl justify-between items-center pl-5 pr-5">
      <div>
        <div className="flex group gap-2">
          <p className="code-content font-NeueMachina ">{serialNo}</p>
          <h1 className="text-4xl font-ObjectSans mb-1">{name}</h1>
        </div>
        <div className="ml-6 group  w-full flex gap-2 font-NeueMachina ">
          <span className="border w-fit border-color rounded-3xl pl-2 pr-2 text-center">
            {tag1}
          </span>
          <span className="border border-color w-fit rounded-3xl pl-2 pr-2 text-center">
            {tag2}
          </span>
          <span className="border border-color w-fit rounded-3xl pl-2 pr-2 text-center">
            {tag3}
          </span>
        </div>
      </div>
      <div className="flex group gap-23 items-center">
        <div className="-mt-20 relative opacity-0 scale-95  border hover:scale-120 rounded-2xl transition-all duration-200 ease-in-out group-hover:opacity-100 group-hover:scale-100 mb-6">
          <Image className="rounded-2xl" src={image} width={433} height={110} />
        </div>
        <div className="flex items-center justify-center">
          <div className="font-NeueMachina font-thin">2025</div>
          <div className="font-NeueMachina font-thin text-2xl">↗</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectBox;
