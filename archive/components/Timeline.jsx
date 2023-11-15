// Package
import { useEffect, useRef } from "react";

// Components
import Bulb from "../../src/components/Bulb";

export default function Timeline() {
  const h2El = useRef(null);
  const noticeEl = useRef(null);

  function updateAge() {
    const ageElement = document.getElementById("age");
    if (ageElement) {
      const birthDate = new Date(1994, 4, 1);
      const currentDate = new Date();
      const timeDiff = Math.abs(currentDate.getTime() - birthDate.getTime());
      // Accounting for leap years
      const age = Math.floor(timeDiff / (1000 * 3600 * 24 * 365.25));
      ageElement.textContent = age.toString();
    }
  }

  useEffect(() => {
    updateAge();
  }, []);

  useEffect(() => {
    const observers = [
      { ref: h2El, classToAdd: "show-el" },
      { ref: noticeEl, classToAdd: "show-el" },
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
    <>
      <section
        className="flex min-h-screen flex-col justify-center font-alt"
        id="timeline"
      >
        <div
          className="hidden-title flex items-center justify-between text-light"
          ref={h2El}
        >
          <h2 className="block font-main text-xl uppercase ">
            <span className="block uppercase text-primary">My Career</span>
            <span> History &amp; Timeline </span>
          </h2>
          <div>
            <h2
              className="flex justify-end font-main text-xl text-primary"
              id="age"
            >
              My age
            </h2>
            <p>Years Old</p>
          </div>
        </div>

        <div
          className="hidden-title z-10 flex w-full items-center justify-center"
          ref={noticeEl}
        >
          <div className="relative overflow-hidden rounded-xl bg-slate-800 p-px after:absolute after:-left-48 after:-top-48 after:z-30 after:h-96 after:w-96 after:bg-indigo-500 after:opacity-0 after:blur-[100px] after:transition-opacity after:duration-500 after:hover:opacity-10 before:group-hover:opacity-100 md:w-2/4">
            <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-slate-900 p-6 pb-8">
              <div
                className="pointer-events-none absolute bottom-0 left-1/2 -z-10 aspect-square w-1/2 -translate-x-1/2 translate-y-1/2"
                aria-hidden="true"
              >
                <span className="translate-z-0 absolute inset-0 rounded-full bg-slate-800 blur-[120px]" />
              </div>
              <div className="flex flex-col items-center gap-4 text-center">
                <h2 className=" text-xl font-bold text-primary">
                  Currently under development
                </h2>
                <p className="text-slate-100/80">
                  This section requires a package that has been deprecated for
                  the last 5 years, so I decided to redo that package which will
                  take some time to finish.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Bulb />
    </>
  );
}
