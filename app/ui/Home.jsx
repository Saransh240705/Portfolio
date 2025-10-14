import Spline from "@splinetool/react-spline/next";
import Planet from "./Planet";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Home() {
  gsap.registerPlugin(SplitText, );


  gsap.set("#split", { opacity: 1 });

  SplitText.create('#split', {
    type: "words",
    mask: "words",
    linesClass: "words",
    autoSplit: true,
});

  return (
    <section className="min-h-screen mt-12 sm:mt-16 md:mt-20 relative flex items-center justify-center overflow-hidden">
      {/* Background Planet */}
      <div className="absolute inset-0 w-full h-full -z-10 flex items-center justify-center">
        <div className="w-full h-full max-w-none scale-95 sm:scale-90 md:scale-100 lg:scale-110 xl:scale-125">
          <Planet />
        </div>
      </div>

      {/* Content */}
      <div className="text-center px-4 sm:px-6 md:px-8 w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-5xl mx-auto z-10">
        <h1
          id="split"
          className="text-white text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-5xl leading-tight mb-6 sm:mb-8 font-ObjectSans"
        >
          Hi, I'm <span className="text-highlighted">Saransh</span>,<br />
          an innovative developer
        </h1>
        <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl 2xl:text-2xl max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl mx-auto code-content font-NeueMachina">
          I bring value to web development projects by merging technical
          expertise with creativity and aesthetics.
        </p>
      </div>
    </section>
  );
}
