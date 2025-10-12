import TechStackFrame from "./TechStackFrame";
import Footer from "./Footer";

const TechStack = () => {
  return (
    <div className="">
      <div className="">
        <div className="flex items-center m-auto text-center justify-center">
          <h1 className="text-white text-5xl max-w-148 font-ObjectSans">
            Some of the Tech I like to{" "}
            <span className="code-red"> work with</span>
          </h1>
        </div>
        <div className="mt-32 items-center justify-center flex">
          <TechStackFrame />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TechStack;
