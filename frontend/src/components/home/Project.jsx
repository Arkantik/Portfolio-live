// Packages
import { useState, useEffect, useRef } from "react";

// Components
import Carousel from "../Carousel";

// Service
import projectsData from "../../data/projects.json";

export default function Project() {
  const h2El = useRef(null);
  const carouselEl = useRef(null);

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const observers = [
      { ref: h2El, classToAdd: "show-el" },
      { ref: carouselEl, classToAdd: "show-item" },
    ].map(({ ref, classToAdd }) => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(classToAdd);
          } else {
            entry.target.classList.remove(classToAdd);
          }
        });
      });
      observer.observe(ref.current);

      return {
        observer,
        element: ref.current,
      };
    });

    return () => {
      observers.forEach(({ observer, element }) => {
        observer.unobserve(element);
      });
    };
  }, []);

  useEffect(() => {
    setProjects(projectsData);
  }, []);

  return (
    <section
      className="flex min-h-screen flex-col justify-center font-alt"
      id="project"
    >
      <div className="hidden-title" ref={h2El}>
        <h2 className="block font-main text-xl uppercase text-light">
          <span className="block uppercase text-primary"> Portfolio </span>
          <span> of my projects </span>
        </h2>
      </div>
      <div className="hidden-right" ref={carouselEl}>
        <Carousel projects={projects} />
      </div>
    </section>
  );
}
