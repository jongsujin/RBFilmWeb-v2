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
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    beforeChange: (current: number, next: number) => setCurrentSlide(next),
    arrows: false,
    responsive: [
      {
        breakpoint: 768, // 모바일 화면 크기 기준
        settings: {
          slidesToShow: 3, // 한 번에 3개의 슬라이드 표시
          centerMode: true,
        },
      },
    ],
  };

  const slides: SlideType[] = [
    { id: 1, image: "/slow.svg" },
    { id: 2, image: "/project02.svg" },
    { id: 3, image: "/project03.svg" },
    { id: 4, image: "/project01.svg" },
    { id: 5, image: "/project04.svg" },
  ];

  const slideClass = (index: number) => {
    if (index === currentSlide) {
      return "scale-125 z-20 opacity-100 transform translate-y-8 max-md:scale-[1.5] max-md:translate-y-2"; // 가운데 슬라이드
    }
    if (
      index === currentSlide - 1 ||
      (currentSlide === 0 && index === slides.length - 1)
    ) {
      return "scale-75 z-10 opacity-50 -mr-32 max-md:-mr-10 max-md:scale-[0.9]"; // 왼쪽 슬라이드
    }
    if (
      index === currentSlide + 1 ||
      (currentSlide === slides.length - 1 && index === 0)
    ) {
      return "scale-75 z-10 opacity-50 -ml-32 max-md:-ml-10 max-md:scale-[0.9]"; // 오른쪽 슬라이드
    }
    return "scale-50 z-0 opacity-0"; // 나머지 슬라이드
  };

  return (
    <div className="w-[90%] h-80 mx-auto mt-10 overflow-hidden p-10 max-md:w-full max-md:h-auto max-md:p-5">
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
