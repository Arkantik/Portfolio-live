// Package
import { BsLinkedin } from "react-icons/bs";
import { BiSolidQuoteAltRight } from "react-icons/bi";
import { useRef, useEffect } from "react";

// Style
import style from "../../styles/review.module.css";

export default function Testimonials() {
  const testimonialH2 = useRef(null);
  const testimonialIcon = useRef(null);
  const testimonialP = useRef(null);
  const testimonialImg = useRef(null);
  const testimonialName = useRef(null);

  const testimonial2Icon = useRef(null);
  const testimonial2P = useRef(null);
  const testimonial2Img = useRef(null);
  const testimonial2Name = useRef(null);
  useEffect(() => {
    const observers = [
      { ref: testimonialH2, classToAdd: "show-el" },
      { ref: testimonialIcon, classToAdd: "show-item" },
      { ref: testimonialP, classToAdd: "show-item" },
      { ref: testimonialImg, classToAdd: "show-item" },
      { ref: testimonialName, classToAdd: "show-item" },

      { ref: testimonial2Icon, classToAdd: "show-item" },
      { ref: testimonial2P, classToAdd: "show-item" },
      { ref: testimonial2Img, classToAdd: "show-item" },
      { ref: testimonial2Name, classToAdd: "show-item" },
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
      className="flex min-h-screen flex-col justify-center font-alt"
      id="testimonial"
    >
      <div className="hidden-title" ref={testimonialH2}>
        <h2 className="font-main text-xl uppercase text-light">
          <span className="block uppercase text-primary">People</span>
          <span> I worked with &amp; for </span>
        </h2>
        <p className="py-2 text-sm text-light">
          Few words from them about me and my work
        </p>
      </div>

      <div className="flex flex-col gap-16 text-center md:grid md:grid-cols-2 md:gap-32">
        <div className="flex flex-col gap-8">
          <span className="hidden-left" ref={testimonialIcon}>
            <BiSolidQuoteAltRight className="flex w-full justify-center text-lg text-primary" />
          </span>
          <p className="hidden-left text-sm text-light" ref={testimonialP}>
            Jeremy has a solid understanding of the fundamental principles of
            web development and is capable of creatively solving complex
            problems. His ability to work in a team and collaborate with other
            developers is a valuable quality.
          </p>
          <div
            className={`${style.review_img} hidden-left flex justify-center`}
            ref={testimonialImg}
          >
            <img src="../assets/img/review/anthony.webp" alt="Anthony Gorski" />
          </div>
          <div
            className={`${style.review_title} hidden-left`}
            ref={testimonialName}
          >
            <h4 className="font-main text-lg text-primary">Anthony Gorski</h4>
            <a
              href="https://www.linkedin.com/in/anthony-gorski/"
              aria-label="linkedin anthony gorski"
            >
              <BsLinkedin className="hover-animation rounded bg-transparent p-1.5 text-xl text-light" />
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <span className="hidden-right" ref={testimonial2Icon}>
            <BiSolidQuoteAltRight className="flex w-full justify-center text-lg text-primary" />
          </span>
          <p className="hidden-right text-sm text-light" ref={testimonial2P}>
            Jeremy is a reliable person, always present and professional. He's
            also a good trainer, explaining softwares in details. One thing is
            certain, he always dives fully into new projects to push himself to
            the limit.
          </p>
          <div
            className={`${style.review_img} hidden-right flex justify-center`}
            ref={testimonial2Img}
          >
            <img src="../assets/img/review/ingrid.jpg" alt="Ingrid Freire" />
          </div>
          <div
            className={`${style.review_title} hidden-right`}
            ref={testimonial2Name}
          >
            <h4 className="font-main text-lg text-primary">Ingrid Freire</h4>
            <a
              href="https://www.linkedin.com/in/ingrid-freire-2a00b31b7/"
              aria-label="linkedin ingrid freire"
            >
              <BsLinkedin className="hover-animation rounded bg-transparent p-1.5 text-xl text-light" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
