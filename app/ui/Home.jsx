import Spline from "@splinetool/react-spline/next";
import Planet from "./Planet";

export default function Home() {
  return (
    <section className="min-h-screen mt-20 relative flex items-center justify-center">
      {/* Background Planet */}
      <div className="absolute  -z-10">
        <Planet />
      </div>
      
      {/* Content */}
      <div className="text-center px-8 max-w-4xl mx-auto">
        <h1 className="text-white text-6xl leading-tight mb-8 font-ObjectSans">
          Hi, I'm <span className="text-highlighted">Saransh</span>,<br />
          an innovative developer
        </h1>
        <p className="text-white text-xl max-w-2xl mx-auto code-content font-NeueMachina">
          I bring value to web development projects by merging technical
          expertise with creativity and aesthetics.
        </p>
      </div>
    </section>
  );
}
