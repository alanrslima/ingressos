import React, { useRef, useState } from "react";
import Banner from "../Banner/Banner";
import styles from "./Carousel.module.css";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { CarouselProps } from "../../types/carousel";

const Carousel: React.FC<CarouselProps> = ({ events, name, carouselSlug }) => {
  const [scrollX, setScrollX] = useState(0);
  const bannersRefs = useRef<HTMLDivElement[]>([]);

  function handleLeftArrow() {
    if (scrollX === 0) return;
    let x = scrollX + Math.round(window.innerWidth / 2);
    if (x > 0) {
      x = 0;
    }
    setScrollX(x);
  }

  function getListWidth() {
    const bannerWidth = bannersRefs.current[0].clientWidth;
    return events.length * bannerWidth;
  }

  function handleRightArrow() {
    let x = scrollX - Math.round(window.innerWidth / 2);
    let listW = getListWidth();
    if (window.innerWidth - listW > x) {
      x = window.innerWidth - listW - 60;
    }
    setScrollX(x);
  }

  if (!events?.length) {
    return null;
  }

  if (carouselSlug === "destaque") {
    return <Banner full event={events[0]} />;
  }

  return (
    <div className={styles.movieRow}>
      <h2>{name}</h2>
      <div
        className={`${styles.rowIndicator} ${styles.rowIndicatorLeft}`}
        onClick={handleLeftArrow}
      >
        <FiChevronLeft style={{ fontSize: 40 }} />
      </div>
      <div
        className={`${styles.rowIndicator} ${styles.rowIndicatorRight}`}
        onClick={handleRightArrow}
      >
        <FiChevronRight style={{ fontSize: 40 }} />
      </div>
      <div className={styles.listArea}>
        <div
          className={styles.list}
          style={{
            marginLeft: scrollX,
            width: events?.length * 300,
          }}
        >
          {events?.length &&
            events.map((item, index) => (
              <Banner
                ref={(el) => {
                  el ? (bannersRefs.current[index] = el) : null;
                }}
                event={item}
                key={index}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
