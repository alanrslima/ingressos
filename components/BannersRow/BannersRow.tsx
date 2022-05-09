import React, { useState } from "react";
import Banner from "../Banner/Banner";
import styles from "./BannersRow.module.css";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const BannersRow: React.FC = () => {
  const [scrollX, setScrollX] = useState(-400);

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
    let listW = items.length * 400;
    if (window.innerWidth - listW > x) {
      x = window.innerWidth - listW - 200;
    }
    setScrollX(x);
  }

  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

  return (
    <div className={styles.movieRow}>
      <h2>Em cartaz</h2>
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
            width: items.length * 300,
          }}
        >
          {items.length && items.map((item, index) => <Banner key={index} />)}
        </div>
      </div>
    </div>
  );
};

export default BannersRow;
