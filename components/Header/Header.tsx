import React from "react";
import styles from "./Header.module.css";

interface HeaderProps {
  black?: boolean;
}
export default function Header({ black }: HeaderProps) {
  return (
    <header className={`${styles.header} ${black && styles.headerBlack}`}>
      <div className="header--logo"></div>
    </header>
  );
}
