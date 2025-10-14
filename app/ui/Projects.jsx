import Link from "next/link";
import { projectsFull } from "../lib/project";
import ProjectBox from "./ProjectBox";

const Projects = () => {
  return (
    <div className="mt-15">
      <div className="bg-[#91D2F9] h-[9rem] w-[9rem] -z-100 top-[65rem] left-[15rem] absolute rounded-full blur-[6rem]" />
      <div className="bg-[#91D2F9] h-[9rem] w-[9rem] -z-100 top-[75rem] right-[15rem] absolute rounded-full blur-[6rem]" />
      <div className="bg-[#91D2F9] h-[9rem] w-[9rem] -z-100 top-[110rem] left-[15rem] absolute rounded-full blur-[6rem]" />
      <div className="bg-[#91D2F9] h-[9rem] w-[9rem] -z-100 top-[130rem] right-[15rem] absolute rounded-full blur-[6rem]" />
      <div className="bg-[#91D2F9] h-[9rem] w-[9rem] -z-100 top-[150rem] left-[15rem] absolute rounded-full blur-[6rem]" />
      <div className="bg-[#91D2F9] h-[9rem] w-[9rem] -z-100 top-[180rem] right-[15rem] absolute rounded-full blur-[6rem]" />
      <div className="bg-[#91D2F9] h-[9rem] w-[9rem] -z-100 top-[200rem] left-[15rem] absolute rounded-full blur-[6rem]" />
      <div className="bg-[#91D2F9] h-[9rem] w-[9rem] -z-100 top-[220rem] right-[15rem] absolute rounded-full blur-[6rem]" />
      <div className="w-full flex -mt-15 flex-col gap-10 justify-center items-center">
        <div>
          {projectsFull.map((p) => (
            <Link href={p.link}>
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
    </div>
  );
};

export default Projects;
