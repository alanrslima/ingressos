import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "./Header.module.css";
import {
  AiOutlineQuestionCircle,
  AiOutlineUser,
  AiOutlineSearch,
} from "react-icons/ai";
import { FiMapPin } from "react-icons/fi";

export default function Header() {
  const navItems = [
    { label: "Filmes" },
    { label: "Cinemas" },
    { label: "Eventos" },
    { label: "Rock In Rio" },
  ];

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", scrollListener);
    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  return (
    <header className={styles.header}>
      <nav className={styles.headerTop}>
        <Image
          priority
          src="/images/logo.png"
          height={60}
          width={240}
          objectFit="contain"
          alt="ingresso-logo"
        />
        <div className={styles.headerTopRight}>
          <div className={styles.wrapperInput}>
            <input
              placeholder="Pesquise por filmes, cinemas..."
              className={styles.headerTopInput}
              type="text"
            />
            <AiOutlineSearch className={styles.headerIcon} />
          </div>

          <ul>
            {/* <li>
              <a href="">
                Busca <AiOutlineSearch className={styles.headerIcon} />
              </a>
            </li> */}
            <li>
              <a href="">
                Rio de Janeiro <FiMapPin className={styles.headerIcon} />
              </a>
            </li>
            <li>
              <a href="">
                Olá, Frontend <AiOutlineUser className={styles.headerIcon} />
              </a>
            </li>
            <li>
              <a href="">
                Atendimento{" "}
                <AiOutlineQuestionCircle className={styles.headerIcon} />
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <nav
        className={`${styles.headerBottom} ${
          scrolled && styles.headerBottomScrolled
        }`}
      >
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
