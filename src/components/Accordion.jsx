// Package
import { useState, useEffect } from "react";

// Style
import style from "../styles/accordion.module.css";

export default function Accordion() {
  const [activePanel, setActivePanel] = useState("panel1-content");

  function toggleAccordion(panelId) {
    setActivePanel((prevActivePanel) =>
      prevActivePanel === panelId ? null : panelId
    );
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setActivePanel("panel1-content");
      } else {
        setActivePanel(null);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={`${style.accordion} text-light`}>
      <div className={`${style.accordion_panel}`}>
        <h2 id="panel1-heading">
          <button
            type="button"
            className={style.accordion_trigger}
            onClick={() => toggleAccordion("panel1-content")}
            aria-expanded={activePanel === "panel1-content"}
          >
            <span className={style.accordion_title} id="panel1-title">
              Crypto
            </span>

            <svg viewBox="0 -0.5 34 34" className={style.accordion_icon}>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M33.2538 16.1292C33.2538 25.0371 26.0329 32.2584 17.1255 32.2584C8.21799 32.2584 0.99707 25.0371 0.99707 16.1292C0.99707 7.22128 8.21799 0 17.1255 0C26.0329 0 33.2538 7.22128 33.2538 16.1292ZM21.0002 10.1366C23.2438 10.9071 24.8849 12.0607 24.5629 14.2077C24.3291 15.7799 23.4543 16.5403 22.2921 16.8065C23.8866 17.6335 24.4301 19.2029 23.9251 21.1005C22.9664 23.8314 20.6874 24.0613 17.6562 23.4905L16.9202 26.4261L15.1434 25.9844L15.8693 23.0882C15.4087 22.9742 14.9379 22.8522 14.4529 22.7221L13.724 25.6325L11.9492 25.1908L12.6842 22.2491L9.10534 21.3496L9.98817 19.3226C9.98817 19.3226 11.2982 19.6685 11.28 19.6433C11.7832 19.7673 12.0069 19.4406 12.095 19.2238L14.0895 11.256C14.1117 10.8798 13.9811 10.4059 13.2613 10.2264C13.2886 10.2072 11.9705 9.90669 11.9705 9.90669L12.4433 8.01585L16.0272 8.90026L16.7562 5.99188L18.532 6.43358L17.8182 9.28448C18.2961 9.39238 18.776 9.5023 19.2427 9.61828L19.9514 6.78553L21.7282 7.22724L21.0002 10.1366ZM16.7488 14.9882C17.9591 15.3091 20.5928 16.0074 21.0519 14.1765C21.5202 12.3033 18.9615 11.7376 17.7087 11.4606L17.7086 11.4606L17.7085 11.4606C17.5666 11.4292 17.4414 11.4015 17.3393 11.3761L16.4545 14.9117C16.5388 14.9325 16.6378 14.9588 16.7488 14.9882ZM15.3775 20.6807C16.8271 21.0626 19.9976 21.8977 20.5021 19.8803C21.0185 17.8175 17.9445 17.1305 16.4446 16.7952L16.4441 16.7951C16.2767 16.7577 16.129 16.7247 16.008 16.6946L15.032 20.5913C15.1311 20.6158 15.2472 20.6464 15.3771 20.6806L15.3775 20.6807Z"
                fill="#F7931A"
              />
            </svg>
          </button>
        </h2>

        <div
          className={`${style.accordion_content} ${
            activePanel === "panel1-content" ? style.active : ""
          }`}
          id="panel1-content"
          aria-labelledby="panel1-heading"
          aria-hidden={activePanel !== "panel1-content"}
        >
          <p>
            In 2017, I started learning about crypto and the blockchain world,
            it's revolutionary aspect have fascinated me since and will grow for
            sure in the future.
          </p>
          <img
            className={style.accordion_image}
            src="../assets/img/about/crypto.avif"
            alt="crypto coins"
          />
        </div>
      </div>
      <div className={style.accordion_panel}>
        <h2 id="panel2-heading">
          <button
            type="button"
            className={style.accordion_trigger}
            onClick={() => toggleAccordion("panel2-content")}
            aria-expanded={activePanel === "panel2-content"}
          >
            <span className={style.accordion_title} id="panel2-title">
              Travel
            </span>
            <svg viewBox="0 0 36 36" className={style.accordion_icon}>
              <path d="M6.25,11.5,12,13.16l6.32-4.59-9.07.26A.52.52,0,0,0,9,8.91L6.13,10.56A.51.51,0,0,0,6.25,11.5Z" />
              <path d="M34.52,6.36,28.22,5a3.78,3.78,0,0,0-3.07.67L6.12,19.5l-4.57-.2a1.25,1.25,0,0,0-.83,2.22l4.45,3.53a.55.55,0,0,0,.53.09c1.27-.49,6-3,11.59-6.07l1.12,11.51a.55.55,0,0,0,.9.37l2.5-2.08a.76.76,0,0,0,.26-.45l2.37-13.29c4-2.22,7.82-4.37,10.51-5.89A1.55,1.55,0,0,0,34.52,6.36Z" />
            </svg>
          </button>
        </h2>

        <div
          className={`${style.accordion_content} ${
            activePanel === "panel2-content" ? style.active : ""
          }`}
          id="panel2-content"
          aria-labelledby="panel2-heading"
          aria-hidden={activePanel !== "panel2-content"}
        >
          <p>
            I've had the chance to go around the world, from Australia to
            Mexico, passing by Italy or England, I'm always up to go to a new
            destination and learn about new cultures.
          </p>
          <img
            className={style.accordion_image}
            src="../assets/img/about/travel2.jpg"
            alt="travel map"
          />
        </div>
      </div>
      <div className={style.accordion_panel}>
        <h2>
          <button
            type="button"
            className={style.accordion_trigger}
            onClick={() => toggleAccordion("panel3-content")}
            aria-expanded={activePanel === "panel3-content"}
          >
            <span className={style.accordion_title} id="panel2-title">
              Gaming
            </span>
            <svg viewBox="0 0 64 64" className={style.accordion_icon}>
              <path d="M40 7.99992C40.0005 9.77384 39.4113 11.4976 38.3252 12.9001C37.2391 14.3027 35.7176 15.3044 34 15.7479V36.0959C37.452 36.4279 40 37.6039 40 38.9999C40 40.6559 36.42 41.9999 32 41.9999C27.58 41.9999 24 40.6559 24 38.9999C24 37.5999 26.548 36.4279 30 36.0959V15.7479C28.5513 15.3739 27.2366 14.6011 26.2051 13.5173C25.1736 12.4335 24.4667 11.0822 24.1647 9.6168C23.8627 8.15142 23.9776 6.63071 24.4966 5.22739C25.0155 3.82407 25.9175 2.5944 27.1002 1.67802C28.2829 0.761653 29.6989 0.195316 31.1874 0.0433365C32.6758 -0.108642 34.1771 0.159828 35.5206 0.818256C36.8641 1.47668 37.996 2.49868 38.7879 3.76816C39.5797 5.03765 39.9996 6.50374 40 7.99992Z" />
              <path d="M6.052e-10 38.6601V45.5281C0.000396595 46.2708 0.207532 46.9986 0.598209 47.6302C0.988886 48.2618 1.54768 48.7721 2.212 49.1041L28.424 62.2121C29.5344 62.767 30.7587 63.0558 32 63.0558C33.2413 63.0558 34.4656 62.767 35.576 62.2121L61.788 49.1041C62.4523 48.7721 63.0111 48.2618 63.4018 47.6302C63.7925 46.9986 63.9996 46.2708 64 45.5281V38.6601C64 38.2601 63.76 37.9001 63.392 37.7401L38 26.8601V30.8321L58.908 39.5441C58.9984 39.5821 59.0756 39.6459 59.13 39.7274C59.1844 39.809 59.2136 39.9047 59.214 40.0028C59.2145 40.1008 59.1861 40.1968 59.1324 40.2788C59.0787 40.3609 59.002 40.4253 58.912 40.4641L35.152 50.6481C34.156 51.0751 33.0837 51.2952 32 51.2952C30.9163 51.2952 29.844 51.0751 28.848 50.6481L5.088 40.4641C4.99797 40.4253 4.92134 40.3609 4.86763 40.2788C4.81393 40.1968 4.78553 40.1008 4.78595 40.0028C4.78638 39.9047 4.81562 39.809 4.87003 39.7274C4.92445 39.6459 5.00164 39.5821 5.092 39.5441L26 30.8321L25.948 26.8801L0.608 37.7401C0.427626 37.817 0.273825 37.9451 0.165724 38.1087C0.0576236 38.2723 -6.81917e-06 38.464 6.052e-10 38.6601Z" />
            </svg>
          </button>
        </h2>

        <div
          className={`${style.accordion_content} ${
            activePanel === "panel3-content" ? style.active : ""
          }`}
          id="panel2-content"
          aria-labelledby="panel3-heading"
          aria-hidden={activePanel !== "panel3-content"}
        >
          <p>
            Since I was young, I have always been playing video games, thanks to
            my dad. To this day, I still play a few video games in my free time
            and to relax with friends.
          </p>
          <img
            className={style.accordion_image}
            src="../assets/img/about/games.jpg"
            alt="gaming room"
          />
        </div>
      </div>
      <div className={style.accordion_panel}>
        <h2 id="panel4-heading">
          <button
            type="button"
            className={style.accordion_trigger}
            onClick={() => toggleAccordion("panel4-content")}
            aria-controls="panel2-content"
            aria-expanded={activePanel === "panel4-content"}
          >
            <span className={style.accordion_title} id="panel2-title">
              Design
            </span>
            <svg viewBox="0 0 325.04 325.04" className={style.accordion_icon}>
              <path
                d="M307.6,129.885c-11.453-11.447-23.783-16.778-38.805-16.778c-6.189,0-12.056,0.858-17.729,1.688 c-5.094,0.745-9.905,1.449-14.453,1.45c-8.27,0-14.197-2.397-19.82-8.017c-10.107-10.101-8.545-20.758-6.569-34.25 c2.357-16.096,5.291-36.127-15.101-56.508C183.578,5.932,167.848,0.081,148.372,0.081c-37.296,0-78.367,21.546-99.662,42.829	C17.398,74.205,0.1,115.758,0,159.917c-0.1,44.168,17.018,85.656,48.199,116.82c31.077,31.061,72.452,48.168,116.504,48.171	c0.005,0,0.007,0,0.013,0c44.315,0,86.02-17.289,117.428-48.681c17.236-17.226,32.142-44.229,38.9-70.471	C329.291,173.738,324.517,146.793,307.6,129.885z M77.58,223.842c-11.995,4.219-25.071-2.067-29.233-14.02 c-4.15-11.94,2.182-25.045,14.148-29.259c11.972-4.218,25.055,2.063,29.216,14.015C95.877,206.526,89.539,219.634,77.58,223.842z M94.186,132.36c-6.774,10.743-20.952,14.011-31.66,7.3c-10.735-6.729-13.93-20.883-7.16-31.621 c6.774-10.744,20.951-14.012,31.66-7.299C97.749,107.456,100.943,121.611,94.186,132.36z M152.865,264.268 c-4.222,11.987-17.332,18.316-29.285,14.151c-11.959-4.16-18.226-17.229-14.027-29.195c4.222-11.965,17.333-18.294,29.297-14.141 C150.796,239.232,157.075,252.313,152.865,264.268z M144.383,95.278c-12.597,1.445-23.942-7.588-25.33-20.171
		            c-1.398-12.594,7.69-23.974,20.293-25.423c12.604-1.45,23.947,7.582,25.34,20.183C166.073,82.45,156.985,93.829,144.383,95.278z M224.401,262.161c-10.737,6.759-24.897,3.562-31.632-7.141c-6.71-10.708-3.436-24.882,7.314-31.653 c10.733-6.777,24.907-3.574,31.616,7.134C238.43,241.231,235.162,255.4,224.401,262.161z M274.914,173.294 c-1.461,12.584-12.83,21.673-25.432,20.297c-12.58-1.398-21.611-12.742-20.177-25.343c1.433-12.578,12.829-21.673,25.421-20.286 C267.328,149.361,276.366,160.699,274.914,173.294z"
              />
            </svg>
          </button>
        </h2>

        <div
          className={`${style.accordion_content} ${
            activePanel === "panel4-content" ? style.active : ""
          }`}
          id="panel2-content"
          aria-labelledby="panel4-heading"
          aria-hidden={activePanel !== "panel4-content"}
        >
          <p>
            Drawing is something that caught my interest when I was young. As I
            grew up, I switched from the pen and paper format to the mouse and
            computer. Web design has always interested me, even though I dove
            into Web development.
          </p>
          <img
            className={style.accordion_image}
            src="../assets/img/about/design.jpg"
            alt="closeup of a metal chain connected to a metal ring in the ground"
          />
        </div>
      </div>
    </div>
  );
}
