/* eslint-disable react/jsx-props-no-spreading */

"use client";

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
    dots: true,
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
    { id: 4, image: "/project03.svg" },
    { id: 5, image: "/project03.svg" },
  ];

  const slideClass = (index: number) => {
    if (index === currentSlide) {
      return "scale-125 z-20 opacity-100 transform translate-y-8";
    }
    if (
      index === currentSlide - 1 ||
      (currentSlide === 0 && index === slides.length - 1)
    ) {
      return "scale-75 z-10 opacity-50 -mr-32";
    }
    if (
      index === currentSlide + 1 ||
      (currentSlide === slides.length - 1 && index === 0)
    ) {
      return "scale-75 z-10 opacity-50 -ml-32";
    }
    return "scale-50 z-0 opacity-0";
  };

  return (
    <div className="w-[90%] max-w-6xl mx-auto mt-10 overflow-hidden pb-8">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={slide.id} className="px-4">
            <div className={`transition-all duration-300 ${slideClass(index)}`}>
              <div className="relative aspect-[16/9] rounded-lg border border-primary overflow-hidden">
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
