import React, { useState } from "react";
import Banner from "../Banner/Banner";
import styles from "./BannersRow.module.css";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { EventProps } from "../../types/event";

interface BannersRowProps {
  title: string;
  events: EventProps[];
}
const BannersRow: React.FC<BannersRowProps> = ({ events, title }) => {
  const [scrollX, setScrollX] = useState(0);

  function handleLeftArrow() {
    if (scrollX === 0) return;
    let x = scrollX + Math.round(window.innerWidth / 2);
    if (x > 0) {
      x = 0;
    }
    setScrollX(x);
  }

  function handleRightArrow() {
    let x = scrollX - Math.round(window.innerWidth / 2);
    let listW = events.length * 300;
    if (window.innerWidth - listW > x) {
      x = window.innerWidth - listW - 60;
    }
    setScrollX(x);
  }

  if (!events?.length) {
    return null;
  }

  return (
    <div className={styles.movieRow}>
      <h2>{title}</h2>
      <div
        className={`${styles.rowIndicator} ${styles.rowIndicatorLeft}`}
        onClick={handleLeftArrow}
      >
        <FiChevronLeft style={{ fontSize: 50 }} />
      </div>
      <div
        className={`${styles.rowIndicator} ${styles.rowIndicatorRight}`}
        onClick={handleRightArrow}
      >
        <FiChevronRight style={{ fontSize: 50 }} />
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
            events.map((item, index) => <Banner event={item} key={index} />)}
        </div>
      </div>
    </div>
  );
};

export default BannersRow;
