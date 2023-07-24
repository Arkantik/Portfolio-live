// Packages
import { useState, useEffect, useRef } from "react";

// Components
import Toggle from "../utilities/Toggle";
import Accordion from "../Accordion";

// Data
import { skills, tools } from "../../helpers/aboutData";

export default function About() {
  const [activeTab, setActiveTab] = useState("skills");

  const aboutH2 = useRef(null);
  const skillIcons = useRef(null);
  const skillP = useRef(null);

  const hobbyAccordion = useRef(null);
  const hobbyP = useRef(null);

  const handleTabToggle = (tab) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    const observers = [
      { ref: aboutH2, classToAdd: "show-el" },
      { ref: skillIcons, classToAdd: "show-item" },
      { ref: skillP, classToAdd: "show-item" },

      { ref: hobbyAccordion, classToAdd: "show-item" },
      { ref: hobbyP, classToAdd: "show-item" },
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

  return (
    <section
      className="flex min-h-[calc(100dvh-80px)] flex-col justify-center font-alt text-light"
      id="about"
    >
      <h2
        className="hidden-title block font-main text-xl uppercase"
        ref={aboutH2}
      >
        <span className="block uppercase text-primary"> About me </span>
        <span> &amp; my skills </span>
      </h2>

      {/* Skills and tools section */}
      <article className="grid grid-cols-1 items-center gap-4 md:grid-cols-2">
        <p className="hidden-left text-justify text-sm " ref={skillP}>
          Using all these technologies and tools, I am able to develop simple,
          intuitive and responsive user interface that helps users get things
          done with less effort and time.
        </p>
        <div
          className="hidden-right flex flex-col items-end gap-8"
          ref={skillIcons}
        >
          <Toggle activeTab={activeTab} onTabToggle={handleTabToggle} />
          {activeTab === "skills" && (
            <ul className="flex w-full flex-wrap justify-center">
              {skills.map((skill) => (
                <li key={skill.id} className="m-2 inline-flex">
                  <div className="rounded-lg border-l border-t border-light/30 bg-light/10 p-2 backdrop-blur-sm">
                    <img src={skill.icon} alt={skill.name} className="w-14" />
                  </div>
                </li>
              ))}
            </ul>
          )}
          {activeTab === "tools" && (
            <ul className="flex w-full flex-wrap justify-center">
              {tools.map((tool) => (
                <li key={tool.id} className="m-2 inline-flex">
                  <div className="rounded-lg border-l border-t border-light/30 bg-light/10 p-2 backdrop-blur-sm">
                    <img src={tool.icon} alt={tool.name} className="w-14" />
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </article>

      <hr />

      {/* Hobbies section */}
      <article className="grid grid-cols-1 items-center gap-y-4 md:grid-cols-3 ">
        <p
          className="hidden-right text-justify text-sm md:order-2 md:col-span-1"
          ref={hobbyP}
        >
          My hobbies and interests encompass a diverse range of fields. I find
          delight in diving the fascinating world of cryptocurrency, embarking
          on exciting journeys around the world, immersing myself in the virtual
          realms of gaming, and unleashing my creativity through design
          projects.
        </p>
        <div
          className="hidden-left md:order-1 md:col-span-2"
          ref={hobbyAccordion}
        >
          <Accordion />
        </div>
      </article>
    </section>
  );
}
