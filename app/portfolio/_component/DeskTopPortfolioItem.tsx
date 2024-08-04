"use client";

import React from "react";
import Image from "next/image";
import fetchPortfolioItem from "@/api/fetchPortfolioItem";
import { useQuery } from "@tanstack/react-query";
import DeskTopHeader from "@/components/Header/DeskTopHeader";
import DeskTopBtnContainer from "@/components/Header/_component/DeskTopBtnContainer";

export default function DeskTopPortfolioItem({
  params,
}: {
  params: { id: number };
}) {
  const { data, isLoading } = useQuery({
    queryKey: ["fetchPortfolioItem", params.id],
    queryFn: () => fetchPortfolioItem({ THEME: "Interview", id: params.id }),
  });

  console.log("item data : ", data);
  // const onClickItem = (id: number) => {
  //   router.push(`/portfolio/item/${id}`);
  // };

  // const handleKeyDown = (
  //   event: React.KeyboardEvent<HTMLDivElement>,
  //   id: number,
  // ) => {
  //   if (event.key === "Enter" || event.key === " ") {
  //     onClickItem(id);
  //   }
  // };
  if (isLoading) return <div>Loading...</div>;
  return (
    <div>
      <DeskTopHeader />
      <DeskTopBtnContainer />
      <section className="w-full">
        <div className="relative w-full pb-[41.67%]">
          <Image
            src="/deskTopBg.svg"
            alt="background"
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute top-0 right-0 left-0 bottom-10 flex justify-center items-center">
            <div className="w-[50%] h-2/3 flex flex-row gap-2">
              <div className="relative  flex-1 w-1/2">
                <Image
                  src="/deskTopService01.svg"
                  alt="service01.svg"
                  layout="fill"
                  objectFit="cover"
                  className=" absolute"
                />
              </div>
              <div className="border border-white flex-1 flex flex-col">
                <div className="flex-1 flex flex-col justify-center border border-white w-full  text-white text-center">
                  <p className="font-roboto font-bold text-[50px]">PORTFOLIO</p>
                  <p className="mt-5 text-headline2">
                    Make your dream come true
                  </p>
                  <p className="text-headline1 font-bold">In your own film.</p>
                </div>
                <div className="flex-1 flex flex-col justify-center  border border-white  text-center text-white font-pre">
                  <p className="mb-2">
                    저작권 상 모든 레퍼런스 공개가 어렵습니다.
                  </p>
                  <p>문의 주시면 더 많은 레퍼런스 제공은 물론,</p>
                  <p>제작 방향 상담이 가능합니다.</p>
                  <button
                    type="button"
                    className="w-1/4 mx-auto mt-8 border border-white rounded-3xl px-5 py-2"
                  >
                    문의하기
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-[50%] mx-auto">
        <div className="w-full mx-auto flex flex-row items-center justify-evenly text-primary font-pre text-body font-medium">
          {[
            "After Movie / Event Sketch",
            "Interview",
            "Brand Film / Viral",
            "PERFORMANCE",
            "YOUTUBE",
            "ETC",
          ].map((item, index) => (
            <button
              key={item}
              type="button"
              className={`border ${
                index === 0
                  ? "border-primary bg-primary text-black"
                  : "border-primary text-primary"
              } rounded-3xl px-5 py-2 whitespace-nowrap`}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="mt-20 text-center">
          <p className="text-[30px] text-white font-semibold">
            After Movie / Event Sketch
          </p>
        </div>
        <div className="mt-20 text-headline2">
          <p className="font-pre font-semibold text-start text-primary">
            R.B.FILM 2022 Show Reel Celeb ver
          </p>
          <p className="font-pre font-semibold text-start text-primary">
            2022년 하반기, R.B.FILM 인물 위주 쇼릴 입니다.
          </p>
        </div>
        <div className="mt-4 flex flex-col gap-2">
          <div className="border border-white bg-gray h-64">1</div>
          <div className="flex flex-row gap-2">
            <div className="border border-white bg-gray w-[40%] h-80">2</div>
            <div className="border border-white bg-gray w-[60%] h-80">2</div>
          </div>
        </div>
        <div className="flex justify-around gap-5 w-full mt-20">
          {[
            "경찰청",
            "Ronin 4D 6K / Sony A7S3 / Mavic 3 Classic",
            "최정훈",
          ].map((text) => (
            <div
              key={text}
              className="relative w-1/3 h-56 border border-primary rounded-lg"
            >
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black px-2">
                <span className="font-pre font-medium text-headline2 text-primary">
                  Client
                </span>
              </div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-black px-2">
                <span className="font-pre font-medium text-headline2 text-primary">
                  고객사
                </span>
              </div>
              <div className="flex items-center justify-center h-full">
                <span className="font-pre font-medium text-body text-white">
                  {text}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
