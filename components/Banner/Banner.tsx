import React from "react";
import styles from "./Banner.module.css";
import Image from "next/image";
import { EventProps } from "../../types/event";

interface BannerProps {
  full?: boolean;
  event?: EventProps;
}
export default function Banner({ full, event }: BannerProps) {
  const imageUrl = event?.images?.find(
    (image) => image.type === "PosterPortrait"
  )?.url;

  return (
    <div
      className={`${styles.bannerContainer} ${
        full && styles.bannerContainerFull
      }`}
    >
      <div className={styles.wrapperDetails}>
        <span className={styles.flag}>Família</span>
        <span className={styles.flag}>Família</span>
        <h3>{event?.title}</h3>
        {/* <span className={styles.flag}>Família</span>
        <span className={styles.flag}>Família</span> */}
      </div>

      {imageUrl ? (
        <Image
          src={imageUrl}
          // src="https://cdn.ome.lt/iOR1Q6WR4Yvi-O_E9p0n3Tr9XLo=/1200x630/smart/extras/conteudos/Malevola_3ufWsEJ.jpg"
          alt="Vercel Logo"
          // width={300}
          // height={400}
          layout="fill"
          objectFit="cover"
        />
      ) : null}
    </div>
  );
}
