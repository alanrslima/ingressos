import Image from "next/image";
import React from "react";
import styles from "./Header.module.css";

interface HeaderProps {
  black?: boolean;
}
export default function Header({ black }: HeaderProps) {
  const navItems = [
    { label: "Filmes" },
    { label: "Cinemas" },
    { label: "Eventos" },
    { label: "Rock In Rio" },
  ];

  return (
    <header className={`${styles.header} ${black && styles.headerBlack}`}>
      <nav className={styles.headerTop}>
        <Image
          priority
          src="/images/logo.png"
          height={60}
          width={250}
          objectFit="contain"
          alt="ingresso-logo"
        />
        <input type="text" />
        <ul>
          <li>Rio de Janeiro</li>
          <li>Olá, Frontend</li>
          <li>Atendimento</li>
        </ul>
      </nav>
      <nav className={styles.headerBottom}>
        <ul>
          {navItems.map((item) => (
            <li key={item.label}>
              <a href="">{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
