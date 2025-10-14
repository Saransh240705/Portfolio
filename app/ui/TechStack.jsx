import TechStackFrame from "./TechStackFrame";
import Footer from "./Footer";

const TechStack = () => {
  return (
    <div className="">
      <div className="">
        <div className="bg-[#E24E62] h-[9rem] w-[9rem] -z-100 top-[140rem] opacity-40 left-[15rem] absolute rounded-full blur-[6rem]" />
        <div className="bg-[#E24E62] h-[9rem] w-[9rem] opacity-40 -z-100 top-[115rem] right-[15rem] absolute rounded-full blur-[6rem]" />
        <div className="flex items-center m-auto text-center justify-center">
          <h1 className="text-white text-5xl max-w-148 font-ObjectSans">
            Some of the Tech I like to{" "}
            <span className="code-red"> work with</span>
          </h1>
        </div>
        <div className="mt-32 items-center w-full justify-center flex">
          <TechStackFrame />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TechStack;
