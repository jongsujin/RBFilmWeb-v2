/* eslint-disable react/jsx-props-no-spreading */
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useState } from "react";
import Image from "next/image";

interface SlideType {
  id: number;
  image: string;
}

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    className: "center",
    centerMode: true,
    centerPadding: "0px",
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    beforeChange: (current: number, next: number) => setCurrentSlide(next),
    arrows: false,
  };

  const slides: SlideType[] = [
    { id: 1, image: "/project03.svg" },
    { id: 2, image: "/project03.svg" },
    { id: 3, image: "/project03.svg" },
  ];

  const slideClass = (index: number) => {
    const relativeIndex =
      (index - currentSlide + slides.length) % slides.length;

    if (relativeIndex === 0) {
      return "scale-90 z-20 transform translate-x-0";
    }
    if (relativeIndex === 1) {
      return "scale-125 z-10 transform -translate-x-2";
    }
    if (relativeIndex === 2) {
      return "scale-90 z-10 transform translate-x-0";
    }
    return "scale-75 z-0 opacity-50";
  };

  return (
    <div className="w-[90%] max-w-6xl mx-auto mt-10 overflow-hidden">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={slide.id} className="">
            <div className={`transition-all duration-300 ${slideClass(index)}`}>
              <div className="relative aspect-[16/9]  rounded-lg border border-primary overflow-hidden">
                <Image
                  src={slide.image}
                  alt={`Slide ${slide.id}`}
                  layout="fill"
                  objectFit="cover"
                  className="absolute top-0 left-0 w-full h-full"
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
