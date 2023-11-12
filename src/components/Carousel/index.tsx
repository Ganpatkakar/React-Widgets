import React, { ReactElement } from "react";
import Carousel, { ICarousel, ICarouselList } from "./carousel";

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

export const carouselList: ICarouselList[] = [
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
  const carouselProps: ICarousel = {
    carouselList,
    container : {
      width: 700,
      height: 300
    },
    showDotControls:true
  }
  return (
    <>
      <h3>Render Carousel Component</h3>
      <Carousel {...carouselProps}/>
    </>
    
  )
}