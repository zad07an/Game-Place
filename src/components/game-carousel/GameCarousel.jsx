import React, { useState } from "react";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import styles from "./GameCarousel.module.css";

const GameCarousel = ({ game }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () =>
    setCurrentIndex((prev) => (prev < 1 ? game?.images.length - 1 : prev - 1));
  const handleNext = () =>
    setCurrentIndex((next) =>
      next === game?.images.length - 1 ? 0 : next + 1
    );

  return (
    <section className={styles.slider}>
      <div
        className={styles.images}
        style={{ transform: `translate3d(${-currentIndex * 100}%, 0, 0)` }}
      >
        {game?.images?.map((image, index) => {
          return (
            <div
              key={index}
              style={{ background: `linear-gradient(to left, rgba(0,0,0,0.7), rgba(0,0,0,0), rgba(0,0,0,0.7)), url("${image}") no-repeat center / cover`}}
            ></div>
          );
        })}
      </div>
      <button className={styles.prev} onClick={handlePrev}>
        <KeyboardArrowLeftIcon />
      </button>
      <button className={styles.next} onClick={handleNext}>
        <KeyboardArrowRightIcon />
      </button>
    </section>
  );
};

export default GameCarousel;
