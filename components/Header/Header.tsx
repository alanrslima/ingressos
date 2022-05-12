import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "./Header.module.css";
import {
  AiOutlineQuestionCircle,
  AiOutlineUser,
  AiOutlineSearch,
} from "react-icons/ai";
import { GiFilmProjector } from "react-icons/gi";
import { FiMapPin, FiFilm } from "react-icons/fi";
import { BiNews } from "react-icons/bi";
import { IoTicketOutline } from "react-icons/io5";

export default function Header() {
  const navItems = [
    { label: "Filmes", icon: <FiFilm /> },
    { label: "Cinemas", icon: <GiFilmProjector /> },
    { label: "Notícias", icon: <BiNews /> },
    { label: "Fanshop", icon: <IoTicketOutline /> },
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
    <>
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
              <li>
                <a className={styles.searchHeaderItem} href="">
                  Busca <AiOutlineSearch className={styles.headerIcon} />
                </a>
              </li>
              <li>
                <a>
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
          {navItems.map((item) => (
            <a key={item.label} href="">
              {item.icon}
              {item.label}
            </a>
          ))}
        </nav>
      </header>
    </>
  );
}
