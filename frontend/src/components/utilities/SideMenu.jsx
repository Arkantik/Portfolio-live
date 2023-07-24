// Packages
import {
  BsFillHouseFill,
  BsPatchQuestionFill,
  BsClockHistory,
  BsFillEasel2Fill,
  BsChatSquareQuoteFill,
  BsEnvelopeFill,
} from "react-icons/bs";
import { useState, useEffect } from "react";

// Helper
import smoothScrollTo from "../../helpers/smoothScroll";

const navData = [
  { id: 1, name: "home", path: "#home", icon: <BsFillHouseFill /> },
  { id: 2, name: "about", path: "#about", icon: <BsPatchQuestionFill /> },
  { id: 3, name: "timeline", path: "#timeline", icon: <BsClockHistory /> },
  { id: 4, name: "project", path: "#project", icon: <BsFillEasel2Fill /> },
  {
    id: 5,
    name: "testimonial",
    path: "#testimonial",
    icon: <BsChatSquareQuoteFill />,
  },
  { id: 6, name: "contact", path: "#contact", icon: <BsEnvelopeFill /> },
];

export default function SideMenu() {
  const [activeItem, setActiveItem] = useState("");
  const [isHomeVisible, setIsHomeVisible] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(true);

  // Manage intersection observer animation
  useEffect(() => {
    const handleScroll = () => {
      const homeElement = document.getElementById("home");
      const rect = homeElement.getBoundingClientRect();
      const newIsHomeVisible = rect.top <= 0 && rect.bottom > 500;

      if (newIsHomeVisible !== isHomeVisible) {
        setIsHomeVisible(newIsHomeVisible);
      }

      const sectionElements = document.querySelectorAll("section");
      let currentSection = "";

      for (const sectionElement of sectionElements) {
        const sectionRect = sectionElement.getBoundingClientRect();
        if (sectionRect.top <= 500 && sectionRect.bottom > 500) {
          currentSection = sectionElement.id;
          break;
        }
      }

      setActiveItem(newIsHomeVisible ? "home" : currentSection);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isHomeVisible]);

  useEffect(() => {
    setIsMenuVisible(!isHomeVisible);
  }, [isHomeVisible]);
  // Render nothing when on the home div
  if (activeItem === "home") {
    return null;
  }

  return (
    <nav
      className={`fixed bottom-0 right-[1%] top-0 z-10 mt-auto flex h-[calc(100vh-80px)] w-16 max-w-md flex-col items-center justify-center gap-y-4 ${
        isMenuVisible ? "menu-visible" : "menu-hidden"
      }`}
    >
      <div className="hidden h-max flex-col items-end justify-center gap-y-10 rounded-full bg-white/10 px-2 py-4 text-base backdrop-blur-sm md:flex">
        {navData.map((link) => (
          <a
            key={link.id}
            href={link.path}
            onClick={() =>
              smoothScrollTo(`${link.path}`, link.name === "about" ? 80 : 0)
            }
            className={`${
              activeItem === link.name
                ? "scale-125 text-primary duration-300"
                : "text-dark"
            } hover:scale-125 hover:text-primary`}
          >
            {link.icon}
          </a>
        ))}
      </div>
    </nav>
  );
}
