"use client";

import React, { useState } from "react";
import Image from "next/image";
import DeskTopBtnContainer from "@/components/Header/_component/DeskTopBtnContainer";
import DeskTopHeader from "@/components/Header/DeskTopHeader";
import { useRouter } from "next/navigation";
import fetchPortfolioTheme from "@/api/fetchPortfolioTheme";
import { useQuery } from "@tanstack/react-query";
import { TbPlayerPlayFilled } from "react-icons/tb";

export default function DeskTopPortfolio() {
  const router = useRouter();
  const [selectedTheme, setSelectedTheme] = useState("Youtube");
  const { data, isLoading } = useQuery({
    queryKey: ["fetchPortfolioTheme", selectedTheme],
    queryFn: () => fetchPortfolioTheme(selectedTheme),
  });

  const onClickTheme = (theme: string) => {
    setSelectedTheme(theme);
  };
  const onClickItem = (id: number) => {
    router.push(`/portfolio/item/${id}`);
  };

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLDivElement>,
    id: number,
  ) => {
    if (event.key === "Enter" || event.key === " ") {
      onClickItem(id);
    }
  };
  console.log(data);
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
        <div className="w-1/2 mx-auto flex flex-row items-center justify-evenly text-primary font-pre text-body font-medium">
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
              onClick={() => onClickTheme(item)}
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
      </section>
      <div className="relative w-1/2 mt-14 mx-auto grid grid-cols-2 gap-8">
        {data &&
          data.DATA &&
          data.DATA.map((item: any) => (
            <div
              key={item.id}
              className="border border-primary rounded relative w-full h-0 pb-[56.25%] overflow-hidden"
              onClick={() => onClickItem(item.id)}
              onKeyDown={(event) => handleKeyDown(event, item.id)}
              role="button"
              tabIndex={0}
            >
              <Image
                key={item.id}
                className="absolute inset-0 w-full h-full"
                src={item.image_url}
                alt="portfolio url"
                width={100}
                height={50}
              />
              <div className="absolute inset-0 flex justify-center items-center">
                <div className="cursor-pointer w-16 h-16 bg-white bg-opacity-75 rounded-full flex justify-center items-center border-none">
                  <TbPlayerPlayFilled className="text-black w-8 h-8" />
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
