// Components
import SideMenu from "../components/utilities/SideMenu";
import Home from "../components/home/Home";
import About from "../components/home/About";
import Timeline from "../components/home/Timeline";
import Project from "../components/home/Project";
import Testimonial from "../components/home/Testimonial";
import Contact from "../components/home/Contact";

export default function Portfolio() {
  return (
    <>
      <SideMenu />
      <Home />
      <About />
      <Timeline />
      <Project />
      <Testimonial />
      <Contact />
    </>
  );
}
