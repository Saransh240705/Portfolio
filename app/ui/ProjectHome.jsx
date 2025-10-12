import Planet from "./Planet";

const ProjectHome = () => {
  return (
    <div>
      <div>
        <div>
          <div className="min-h-screen mt-20 relative flex items-center justify-center">
            <div className="absolute  -z-10">
              <Planet />
            </div>

            <div className="text-center px-8 max-w-4xl mx-auto">
              <h1 className="text-white text-6xl w-[32rem]  m-auto leading-tight mb-8 font-ObjectSans">
                A collection of my best{" "}
                <span className="code-blue"> projects</span>
              </h1>
              <p className="text-white text-xl max-w-2xl mx-auto code-content font-NeueMachina">
                With many years in web development, I acquired extensive
                experience working on projects across multiple industries and
                technologies. Let me show you my best creations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectHome;
