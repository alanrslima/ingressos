import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import styles from "./TextInput.module.css";

export default function TextInput() {
  return (
    <div className={styles.wrapperInput}>
      <input
        placeholder="Pesquise por filmes, cinemas..."
        className={styles.headerTopInput}
        type="text"
      />
      <AiOutlineSearch className={styles.headerIcon} />
    </div>
  );
}
