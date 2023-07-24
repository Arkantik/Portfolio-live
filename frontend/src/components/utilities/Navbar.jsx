// Package
import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  BsGithub,
  BsLinkedin,
  BsFillFileEarmarkPersonFill,
} from "react-icons/bs";

// Helper
import smoothScrollTo from "../../helpers/smoothScroll";

// Style
import style from "../../styles/navbar.module.css";

// Component
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavMenu = () => setIsOpen(!isOpen);

  return (
    <header>
      <nav className="fixed z-30 flex h-[80px] w-full justify-between bg-dark px-8">
        <NavLink
          to="/"
          title="Logo"
          className="flex items-center"
          onClick={() => smoothScrollTo("#home")}
        >
          <img src="../assets/icons/logo.svg" alt="logo" />
        </NavLink>

        <ul className="hidden items-center gap-8 md:flex">
          <li>
            <a
              href="https://github.com/Arkantik"
              target="_blank"
              rel="noreferrer"
            >
              <BsGithub className="rounded bg-transparent p-1.5 text-xl text-light hover:bg-primary" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/jeremy-dohin/"
              target="_blank"
              rel="noreferrer"
            >
              <BsLinkedin className="rounded bg-transparent p-1.5 text-xl text-light hover:bg-primary" />
            </a>
          </li>
          <li>
            <a href="../assets/document/resume-JeremyDohin.pdf" download>
              <BsFillFileEarmarkPersonFill className="rounded bg-transparent p-1.5 text-xl text-light hover:bg-primary" />
            </a>
          </li>
        </ul>
        {/* Mobile Menu Button */}
        <MobileMenu onClick={toggleNavMenu} />
      </nav>

      {/* Mobile Nav */}
      {isOpen ? (
        <div className="fixed z-20 h-screen w-full items-center justify-center bg-dark font-alt">
          <nav className="flex h-screen w-full flex-col items-center justify-center gap-12 py-8 text-center">
            <ul className="flex flex-col gap-8">
              <li>
                <a
                  className={`${style.nav_link}`}
                  href="#home"
                  onClick={toggleNavMenu}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className={`${style.nav_link}`}
                  href="#about"
                  onClick={toggleNavMenu}
                >
                  About me
                </a>
              </li>
              <li>
                <a
                  className={`${style.nav_link}`}
                  href="#timeline"
                  onClick={toggleNavMenu}
                >
                  Timeline
                </a>
              </li>
              <li>
                <a
                  className={`${style.nav_link}`}
                  href="#project"
                  onClick={toggleNavMenu}
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  className={`${style.nav_link}`}
                  href="#testimonial"
                  onClick={toggleNavMenu}
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a
                  className={`${style.nav_link}`}
                  href="#contact"
                  onClick={toggleNavMenu}
                >
                  Contact
                </a>
              </li>
            </ul>
            <div>
              <ul className="flex items-center gap-4">
                <li>
                  <a
                    href="https://github.com/Arkantik"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <BsGithub className="rounded bg-transparent p-1.5 text-xl text-light active:bg-primary" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/jeremy-dohin/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <BsLinkedin className="rounded bg-transparent p-1.5 text-xl text-light active:bg-primary" />
                  </a>
                </li>
              </ul>
            </div>
            <div className={`${style.btn_resume} shadow-md shadow-primary/50`}>
              <a href="../assets/document/resume-JeremyDohin.pdf" download>
                Download Resume
              </a>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
