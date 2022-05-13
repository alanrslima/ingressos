import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "./Header.module.css";
import {
  AiOutlineUser,
  AiOutlineSearch,
  AiOutlineQuestionCircle,
} from "react-icons/ai";
import { FiMapPin } from "react-icons/fi";
import { Button, Popover, useMediaQuery } from "@mui/material";
import TextInput from "../TextInput/TextInput";
import { HeaderHelpers } from "./Header.helpers";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [anchorElLocation, setAnchorElLocation] =
    React.useState<HTMLButtonElement | null>(null);
  const [anchorElSearch, setAnchorElSearch] =
    React.useState<HTMLButtonElement | null>(null);

  const matchesMinDevice = useMediaQuery("(max-width:768px)");
  const matchesMediumDevice = useMediaQuery("(max-width:1440px)");

  const handleClickPopoverLocation = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    setAnchorElLocation(event.currentTarget);
  };

  const handleClosePopoverLocation = () => {
    setAnchorElLocation(null);
  };

  const handleClickPopoverSearch = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    setAnchorElSearch(event.currentTarget);
  };

  const handleClosePopoverSearch = () => {
    setAnchorElSearch(null);
  };

  const openLocation = Boolean(anchorElLocation);
  const idLocation = openLocation ? "location-popover" : undefined;

  const openSearch = Boolean(anchorElSearch);
  const idSearch = openSearch ? "search-popover" : undefined;

  /**
   * Function to listener scroll page to show or not navbottom items
   */
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

  const navItems = HeaderHelpers.getNavItems();
  const statesMock = HeaderHelpers.getStates();
  const citiesMock = HeaderHelpers.getCities("São Paulo");
  const logoImage = matchesMinDevice
    ? "/images/min-logo.png"
    : "/images/logo.png";

  return (
    <>
      <header className={styles.header}>
        <nav className={styles.headerTop}>
          <Image
            priority
            src={logoImage}
            height={40}
            width={matchesMinDevice ? 50 : 250}
            objectFit="contain"
            alt="ingresso-logo"
          />
          <div className={styles.headerTopRight}>
            {!matchesMediumDevice && <TextInput />}

            <ul>
              {!matchesMinDevice && matchesMediumDevice && (
                <li>
                  <button
                    onClick={handleClickPopoverSearch}
                    className={styles.searchHeaderItem}
                  >
                    {!matchesMinDevice && "Busca "}
                    <AiOutlineSearch className={styles.headerIcon} />
                  </button>
                  <Popover
                    id={idSearch}
                    open={openSearch}
                    anchorEl={anchorElSearch}
                    onClose={handleClosePopoverSearch}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "left",
                    }}
                  >
                    <div className={styles.tooltip}>
                      <TextInput />
                      <Button variant="contained" title="Search">
                        Buscar
                      </Button>
                    </div>
                  </Popover>
                </li>
              )}

              <li>
                <button
                  aria-describedby="location"
                  onClick={handleClickPopoverLocation}
                >
                  Rio de Janeiro <FiMapPin className={styles.headerIcon} />
                </button>
                <Popover
                  id={idLocation}
                  open={openLocation}
                  anchorEl={anchorElLocation}
                  onClose={handleClosePopoverLocation}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                >
                  <div className={styles.tooltip}>
                    <select
                      placeholder="Escolha o estado"
                      className={styles.select}
                      name="states"
                      id="states"
                    >
                      {statesMock.map((state) => (
                        <option key={state.name} value={state.name}>
                          {state.name}
                        </option>
                      ))}
                    </select>
                    <select
                      placeholder="Escolha a cidade"
                      className={styles.select}
                      name="citys"
                      id="citys"
                    >
                      {citiesMock.map((state) => (
                        <option key={state.label} value={state.label}>
                          {state.label}
                        </option>
                      ))}
                    </select>
                    <Button variant="contained" title="Change city">
                      Trocar cidade
                    </Button>
                  </div>
                </Popover>
              </li>
              <li>
                <button>
                  Olá, Frontend <AiOutlineUser className={styles.headerIcon} />
                </button>
              </li>
              {!matchesMinDevice && (
                <li>
                  <button>
                    Atendimento
                    <AiOutlineQuestionCircle className={styles.headerIcon} />
                  </button>
                </li>
              )}
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
