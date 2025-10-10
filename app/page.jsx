import About from "./ui/About";
import Home from "./ui/Home";
import Frame from "./ui/Frame";
import Project from "./ui/Project";
import Testimonial from "./ui/Testimonial";

export default function Page() {
  return (
    <>
      <Frame />
      <Home />
      <About />
      <Project />
      <Testimonial />
    </>
  );
}