import React from "react";
import styles from "./Banner.module.css";
import Image from "next/image";
import { EventProps } from "../../types/event";

interface BannerProps {
  full?: boolean;
  event?: EventProps;
}
export default function Banner({ full, event }: BannerProps) {
  function getImage() {
    const placeholder = "/images/placeholder.jpeg";
    const imageType = full ? "PosterHorizontal" : "PosterPortrait";
    const imageUrl = event?.images?.find(
      (image) => image.type === imageType
    )?.url;
    return imageUrl || placeholder;
  }

  const imageUrl = getImage();

  function onClickBanner() {
    if (event?.trailers.length) {
      window.open(event?.trailers[0].url, "_blank");
    }
  }

  return (
    <div
      onClick={onClickBanner}
      className={`${styles.bannerContainer} ${
        full && styles.bannerContainerFull
      }`}
    >
      <div className={styles.wrapperDetails}>
        <div className={styles.wrapperFlags}>
          {event?.genres.map((genre) => (
            <span key={genre} className={styles.flag}>
              {genre}
            </span>
          ))}
        </div>

        <h3>{event?.title}</h3>
      </div>

      {imageUrl ? (
        <Image
          src={imageUrl}
          alt={event?.title}
          layout="fill"
          objectFit="cover"
          onError={() => console.log("Erro loading")}
        />
      ) : null}
    </div>
  );
}
