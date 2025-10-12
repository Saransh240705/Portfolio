import { projectsFull } from "../lib/project";
import ProjectBox from "./ProjectBox";

const Projects = () => {
  return (
    <div className="mt-15">
      <div className="w-full flex -mt-15 flex-col gap-10 justify-center items-center">
        <div>
          {projectsFull.map((p) => (
            <ProjectBox
              key={p.id}
              serialNo={p.serialNo}
              name={p.name}
              image={p.image}
              tag1={p.tag1}
              tag2={p.tag2}
              tag3={p.tag3}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
