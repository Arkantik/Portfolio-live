// Packages
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import initSnakeGame from "../helpers/SnakeGame";

export default function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    // Call the Snake game function when the component mounts
    initSnakeGame();
  }, []);

  return (
    <section className="flex h-screen min-h-[calc(100dvh-80px)] flex-col items-center justify-center gap-8 font-alt text-light md:gap-16 lg:flex-row">
      <div className="flex flex-col gap-4 text-center">
        <p className="text-xl md:text-2xl">
          Ooops
          <br />
          Page Not Found!
        </p>
        <button
          type="button"
          className="flex justify-center rounded-full border hover:border-primary hover:text-primary md:text-base md:font-extrabold"
          onClick={() => navigate("/")}
        >
          Back to home
        </button>
      </div>
      <div className="wrapper">
        <div className="game-details">
          <span className="score">Score: 0</span>
          <span className="high-score">High Score: 0</span>
        </div>
        <div className="play-board" />
        <div className="controls">
          <i data-key="ArrowLeft" className="fa-solid fa-arrow-left-long" />
          <i data-key="ArrowUp" className="fa-solid fa-arrow-up-long" />
          <i data-key="ArrowRight" className="fa-solid fa-arrow-right-long" />
          <i data-key="ArrowDown" className="fa-solid fa-arrow-down-long" />
        </div>
      </div>
    </section>
  );
}
