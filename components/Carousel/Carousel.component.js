import { useState } from "react";
import styles from "./Carousel.module.scss";

const getHeightAndWidth = (width, height) => {
  const res = {}
  if (width) {
    res.width = width;
  }
  if (height) {
    res.height = height;
  }
  return res;
}

export default function Carousel({ carouselList, container, showDotControls }) {
  const [active, setActive] = useState(0);
  const {width, height} = container;
  const containerStyle = getHeightAndWidth(width, height);

  const handleClick = (position) => {
    const newActive = position + active;
    if(newActive > carouselList.length - 1) {
      setActive(0);
      return;
    } else if(newActive < 0) {
      setActive(carouselList.length - 1);
      return;
    }

    setActive(newActive);
  }

  const handleDotClick = (position) => {
    setActive(position);
  }

  return (
    <div>
      <div className={styles.carouselContainer} style={containerStyle}>
        {carouselList.map((carouselListImtem, index) => {
          if(index === active) {
            const { backgroundImage, backgroundColor, textSection, mediaSection, textColor } = carouselListImtem;
            const { image, video } = mediaSection;
            const backgroundStyle = backgroundImage ? {
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: "cover",
            } : { background: backgroundColor };
            const textStyle = textColor ? { color: textColor } : {};
            return (
              <div key={index} className={styles.carouselSlide} style={backgroundStyle}>
                {
                  textSection && (<div className={styles.carouselTextSection} style={textStyle}>{textSection}</div>)
                }
                {
                  mediaSection ? (
                    <div className={styles.carouselMediaSection}>
                      {(image && <img src={image} alt="carousel-image" className={styles.mediaControls} />) ||
                        (video && <video src={video} controls className={styles.mediaControls}/>)}
                    </div>
                  ) : null
                }
              </div>
            );
          }
        })}
        <div className={styles.carouselControls}>
          <div className={styles.carouselControlsLeft} onClick={() => handleClick(-1)}>&#10094;</div>
          <div className={styles.carouselControlsRight} onClick={() => handleClick(1)}>&#10095;</div>
        </div>
        {showDotControls && (
          <div className={styles.carouselDotControls}>
            {carouselList.map((carouselListImtem, index) => {
              return (
                <div key={index} className={`${styles.carouselDotControlItem} ${active === index ? styles.active : ""}`} onClick={() => handleDotClick(index)}></div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
