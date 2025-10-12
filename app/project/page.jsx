import Footer from "../ui/Footer"
import Frame from "../ui/Frame"
import ProjectHome from "../ui/ProjectHome"
import Projects from "../ui/Projects"
import Testimonial from "../ui/Testimonial"


const page = () => {
  return (
    <div>
        <Frame />
        <ProjectHome />
        <Projects />
        <Testimonial color={"code-aqua"} />
        <Footer />
    </div>
  )
}

export default page