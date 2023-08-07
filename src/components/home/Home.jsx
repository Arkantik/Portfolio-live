// Packages
import { useRef, useEffect, useState } from "react";
import Typed from "typed.js";

// Helper
import smoothScrollTo from "../../helpers/smoothScroll";

// Style
import style from "../../styles/home.module.css";

export default function Home() {
  const [offset, setOffset] = useState(0);
  const typedEl = useRef(null);
  const h1El = useRef(null);
  const pEl = useRef(null);

  // Manage offset for mobile
  useEffect(() => {
    const handleResize = () => {
      setOffset(window.innerWidth < 640 ? 60 : 0);
    };
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Manage intersection observer
  useEffect(() => {
    const typed = new Typed(typedEl.current, {
      strings: ["A Frontend Developer", "An UI/UX Lover"],
      typeSpeed: 100,
      backSpeed: 50,
      startDelay: 1000,
      backDelay: 2000,
      loop: true,
    });

    const observers = [
      {
        ref: h1El,
        classToAdd: "show-el",
      },
      {
        ref: pEl,
        classToAdd: "show-el",
      },
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
      typed.destroy();
      observers.forEach(({ observer, element }) => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <article
      className="relative grid h-screen min-h-[calc(100dvh-80px)] grid-cols-1 items-center gap-8 overflow-hidden bg-cover bg-top lg:grid-cols-2"
      style={{ backgroundImage: "url('../assets/img/homebg1.svg')" }}
      id="home"
    >
      <div className="hidden lg:flex lg:justify-center">
        <img src="../assets/img/slider-img.png" alt="Slider" />
      </div>
      <div className="isolate px-4 before:absolute before:-left-44 before:top-1/2 before:-z-10 before:h-[200px] before:w-[200px] before:animate-pulse before:rounded-full before:bg-primary/40 before:blur-[100px] md:px-20 md:before:-right-60 md:before:top-[300px] md:before:h-[400px] md:before:w-[400px] md:before:blur-[100px] lg:px-0">
        <h1
          className="hidden-title block font-main text-xl uppercase text-light md:text-2xl"
          ref={h1El}
        >
          <span>Hello, I'm Jeremy</span>
          <br />
          <span className="text-primary" ref={typedEl} />
        </h1>
        <p
          className="hidden-title pt-4 font-alt text-sm text-light lg:pr-[200px]"
          ref={pEl}
        >
          I'm a passionate web developer skilled in creating engaging and
          user-friendly websites. Specializing in front-end development with
          modern technologies like JavaScript, React and Tailwind. Dedicated to
          delivering high-quality, custom solutions that exceed client
          expectations.
        </p>
      </div>
      <div className={`${style.circle_one}`}>
        <span data-tootik="About me" data-tootik-conf="left dark square shadow">
          <a href="#about" onClick={() => smoothScrollTo("#about", 80)}>
            <span className={`${style.animated_circle_one} relative`} />
          </a>
        </span>
      </div>
      <div className={`${style.circle_two}`}>
        <span data-tootik="Timeline" data-tootik-conf="dark square shadow">
          <a href="#timeline" onClick={() => smoothScrollTo("#timeline", 0)}>
            <span className={`${style.animated_circle_two} relative`} />
          </a>
        </span>
      </div>
      <div className={`${style.circle_three}`}>
        <span
          data-tootik="Projects"
          data-tootik-conf="right dark square shadow"
        >
          <a href="#project" onClick={() => smoothScrollTo("#project", offset)}>
            <span className={`${style.animated_circle_three} relative`} />
          </a>
        </span>
      </div>
      <div className={`${style.circle_four}`}>
        <span
          data-tootik="Testimonials"
          data-tootik-conf="bottomR dark square shadow"
        >
          <a
            href="#testimonial"
            onClick={() => smoothScrollTo("#testimonial", offset)}
          >
            <span className={`${style.animated_circle_four} relative`} />
          </a>
        </span>
      </div>
      <div className={`${style.circle_five}`}>
        <span
          data-tootik="Contact"
          data-tootik-conf="bottomL dark square shadow"
        >
          <a href="#contact" onClick={() => smoothScrollTo("#contact", 0)}>
            <span className={`${style.animated_circle_five} relative`} />
          </a>
        </span>
      </div>
    </article>
  );
}
