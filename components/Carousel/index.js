import Carousel from "./Carousel.component";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialOceanic } from 'react-syntax-highlighter/dist/cjs/styles/prism';

function TextSectionComponent () {

  const handleOnClick = () => {
    alert("clicked");
  }

  return (
    <div>
      <div>Lorum ipsum Content Lorum ipsum Content Lorum ipsum Content Lorum ipsum Content</div>
      <button style={{width: 100, padding: "5px 10px"}} onClick={handleOnClick}>Button</button>
    </div>
  )
}

const carouselList = [
  {
    backgroundColor: "linear-gradient(to bottom, #336699 18%, #33ccff 100%)",
    textSection: <TextSectionComponent />,
    textColor: "#fff",
    mediaSection: {
      image: "https://via.placeholder.com/300x200",
    }
  },
  {
    backgroundColor: "linear-gradient(to bottom, #663300 18%, #666633 100%)",
    textSection: "Carousel text section",
    textColor: "#fff",
    mediaSection: {
      video: "https://static.videezy.com/system/resources/previews/000/011/119/original/Videezy_Slideshow_07_Preview.mp4"
    }
  },
  {
    backgroundImage: "https://images.unsplash.com/photo-1553095066-5014bc7b7f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2FsbCUyMGJhY2tncm91bmR8ZW58MHx8MHx8&w=1000&q=80",
    textSection: "Carousel text section",
    textColor: "#ffffff",
    mediaSection: {
      image: "https://via.placeholder.com/300x200",
    }
  }
]

export default function CarouselComponent () {
  return (
    <>
      <h3>Render Carousel Component</h3>
      <Carousel carouselList={carouselList} container={{width: 700, height: 300}} showDotControls={true}/>

      <h3>How to call Carousel component</h3>
      <p>import carousel component and call it</p>

      <SyntaxHighlighter language="javascript" style={materialOceanic}>
  {`
  import Tooltip from "./Carousel/Carousel.component";

  function RenderToolTip() {
    return (
      <Carousel carouselList={carouselList} container={{width: 700, height: 300}} showDotControls={true}/>
    )
  }
  `
  }
      </SyntaxHighlighter>

      <h3>Carousel list configurations</h3>
      <SyntaxHighlighter language="javascript" style={materialOceanic}>
  {`
  const carouselList = [
    {
      backgroundColor: "linear-gradient(to bottom, #336699 18%, #33ccff 100%)",
      textSection: "Carousel text section",
      textColor: "#fff",
      mediaSection: {
        image: "https://via.placeholder.com/300x200",
      }
    },
    {
      backgroundColor: "linear-gradient(to bottom, #663300 18%, #666633 100%)",
      textSection: "Carousel text section",
      textColor: "#fff",
      mediaSection: {
        video: "https://static.videezy.com/system/resources/previews/000/011/119/original/Videezy_Slideshow_07_Preview.mp4"
      }
    },
    {
      backgroundImage: "https://images.unsplash.com/photo-1553095066-5014bc7b7f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2FsbCUyMGJhY2tncm91bmR8ZW58MHx8MHx8&w=1000&q=80",
      textSection: "Carousel text section",
      textColor: "#ffffff",
      mediaSection: {
        image: "https://via.placeholder.com/300x200",
      }
    }
  ]
  `}
      </SyntaxHighlighter>

      <h3>Carousel text section</h3>
      <p>Carousel text section could be a component and have its own style and actions</p>

      <SyntaxHighlighter language="javascript" style={materialOceanic}>
  {`
  function TextSectionComponent () {

    const handleOnClick = () => {
      alert("clicked");
    }
  
    return (
      <div>
        <div>Lorum ipsum Content Lorum ipsum Content Lorum ipsum Content Lorum ipsum Content</div>
        <button style={{width: 100, padding: "5px 10px"}} onClick={handleOnClick}>Button</button>
      </div>
    )
  }
  `}
      </SyntaxHighlighter>

      <p>To add this with carousel list config simply add it as component call with text section i.e</p>
      <SyntaxHighlighter language="javascript" style={materialOceanic}>
  {`textSection: <TextSectionComponent />,`}
      </SyntaxHighlighter>

      <h3>Carousel Component implementation</h3>
      <p>Below is how carousel component is writen, later we add styels to it</p>

      <SyntaxHighlighter language="javascript" style={materialOceanic}>
  {`import { useState } from "react";
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
              backgroundImage: url(\"$"{backgroundImage}),
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
                <div key={index} className={\"$"{styles.carouselDotControlItem} \`"$"{active === index ? styles.active : ""}} onClick={() => handleDotClick(index)}></div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}`}
      </SyntaxHighlighter>

      <h3>Carousel Component style</h3>
      <p>Finally add styles for carousel component, which we have already imported in our carousel component implementation</p>

      <SyntaxHighlighter language="css" style={materialOceanic}>
        {`.carouselContainer {
  width: 100%;
  height: auto;
  position: relative;
  overflow: hidden;
  margin: 0;
  padding: 0;

  .carouselSlide {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
    padding: 0 2.2rem;
    display: flex;

    .carouselTextSection {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1rem;
    }

    .carouselMediaSection {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;

      .mediaControls {
        max-width: 100%;
        height: auto;
      }
    }
  }

  .carouselControls {

    .carouselControlsLeft, .carouselControlsRight {
      cursor: pointer;
      position: absolute;
      top: 50%;
      width: auto;
      transform: translate(0px, -50%);
      background: rgba(0, 0, 0, .3);
      padding: 5px 10px;
      color: white;
      font-weight: 300;
      font-size: 18px;
      transition: 0.6s ease;
      border-radius: 0 3px 3px 0;
      user-select: none;

      &:hover {
        background-color: rgba(0,0,0,0.8);
      }
    }

    .carouselControlsRight {
      right: 0;
      border-radius: 3px 0 0 3px;
    }
  }

  .carouselDotControls {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    text-align: center;
    padding: 0;
    margin: 0;
    list-style: none;
    height: 25px;

    .carouselDotControlItem {
      display: inline-block;
      width: 10px;
      height: 10px;
      margin: 0 2px;
      background-color: rgba(0, 0, 0, 0.25);
      border-radius: 50%;
      cursor: pointer;
      transition: background-color 0.6s ease;

      &:hover, &.active {
        background-color: rgba(0, 0, 0, 0.8);
      }
    }

  }
}`}
      </SyntaxHighlighter>
    </>
    
  )
}