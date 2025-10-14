import Planet from "./Planet";

 const aboutHome = () => {
  return (
    <div>
      <div>
        <div className="min-h-screen mt-28 relative flex items-center justify-center">
          <div className="absolute  -z-10">
            <Planet />
          </div>


          <div className="text-center px-8 max-w-4xl mx-auto">
            <h1 className="text-white text-6xl w-[31rem]  m-auto leading-tight mb-8 font-ObjectSans">
              Let's get to know <span className="code-red">each other</span>
            </h1>
            <p className="text-white text-xl max-w-2xl mx-auto code-content font-NeueMachina">
              Let me introduce myself, my workflows, my collaborations, and the
              technologies I like to use to bring my projects to life.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default aboutHome;
