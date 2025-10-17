"use client";
import Image from "next/image";

const ProjectBox = ({ serialNo, name, image, tag1, tag2, tag3, isLast, projectIndex }) => {
  // Specific alignment adjustments for 3rd and 5th projects
  const getImageMargin = () => {
    if (projectIndex === 3) {
      return "xl:-ml-72 2xl:-ml-72 lg:-ml-72 -ml-72";
    }
    if (projectIndex === 5) {
      return "xl:-ml-68 2xl:-ml-68 lg:-ml-68 -ml-70";
    }
    return "xl:-ml-64 2xl:-ml-64 lg:-ml-64 -ml-64";
  };

  const getArrowMargin = () => {
    if (projectIndex === 3) {
      return "xl:-ml-6 2xl:-ml-6 lg:-ml-6 -ml-6";
    }
    if (projectIndex === 5) {
      return "xl:-ml-4 2xl:-ml-4 lg:-ml-4 -ml-4";
    }
    return "";
  };

  return (
    <div className="flex bg-black text-white mb-20 xl:min-w-[1000px] 2xl:min-w-[1000px] max-w-[380px] xl:h-[15rem] 2xl:h-[15rem] h-[18rem] group border border-gray-600 rounded-2xl justify-between items-center pl-5 pr-5">
      <div>
        <div className="flex group gap-2 mt-40 lg:mt-0 xl:mt-0 2xl:mt-0">
          <p className="code-content font-NeueMachina -mt-4">{serialNo}</p>
          <h1 className="xl:text-4xl 2xl:text-4xl text-2xl font-ObjectSans mb-1 text-white">{name}</h1>
        </div>
        <div className="xl:ml-6 2xl:ml-6 lg:ml-6 group w-full flex gap-2 font-NeueMachina ">
          <span className="border w-fit border-color rounded-3xl pl-2 pr-2 text-center text-white">
            {tag1}
          </span>
          <span className="border border-color w-fit rounded-3xl pl-2 pr-2 text-center text-white">
            {tag2}
          </span>
          <span className="border border-color w-fit rounded-3xl pl-2 pr-2 text-center text-white">
            {tag3}
          </span>
        </div>
      </div>
      <div className="xl:flex lg:flex 2xl:flex group xl:none 2xl:none xl:gap-23 2xl:gap-23 xl:items-center 2xl:items-center">
        <div className={`xl:-mt-20 2xl:-mt-20 -mt-30 w-[20rem] h-fit ${getImageMargin()} relative xl:opacity-0 2xl:opacity-0 xl:scale-95 2xl:scale-95 border hover:scale-120 rounded-2xl transition-all duration-200 ease-in-out group-hover:opacity-100 group-hover:scale-100 mb-6`}>
          <Image className="rounded-2xl" src={image} width={433} height={110} />
        </div>
        <div className={`flex items-center justify-center mt-0 lg:mt-0 xl:mt-0 2xl:mt-0 ${getArrowMargin()}`}>
          <div className="font-NeueMachina font-thin text-white">2025</div>
          <div className="font-NeueMachina font-thin text-2xl text-white">↗</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectBox;
