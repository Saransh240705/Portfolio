"use client";

import Link from "next/link";
import { project } from "../lib/project";
import Button from "./Button";
import ProjectBox from "./ProjectBox";

const Project = () => {
  return (
    <div className="text-white mt-15 relative">
      <div className="bg-[#4949CE] h-[9rem] w-[9rem] -z-100 mt-220 ml-34 absolute rounded-full blur-[6rem]" />
      <div className="bg-[#4949CE] h-[9rem] w-[9rem] -z-100 mt-55 ml-270 absolute rounded-full blur-[6rem]" />
      <div className="mb-[14rem] flex w-full justify-center items-center">
        <h1 className="text-5xl font-ObjectSans">
          Project <span className="text-highlighted">Highlight</span>
        </h1>
      </div>
      <div className="w-full flex -mt-15 flex-col gap-10 justify-center items-center">
        <div>
          {project.map((p) => (
            <Link key={p.id} href={p.link}>
              <ProjectBox
                key={p.id}
                serialNo={p.serialNo}
                name={p.name}
                image={p.image}
                tag1={p.tag1}
                tag2={p.tag2}
                tag3={p.tag3}
              />
            </Link>
          ))}
        </div>
      </div>
      <Link href='/project' className="w-full -mt-6 flex justify-center items-center">
        <Button text="all-projects →" width={142} height={37} />
      </Link>
    </div>
  );
};

export default Project;
