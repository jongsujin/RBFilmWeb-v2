"use client";

import Image from "next/image";
import MobileHeader from "@/components/Header/MobileHeader";
import PortfolioTitle from "@/data/PortfolioTitle";
import { useQuery } from "@tanstack/react-query";
import fetchPortfolioTheme from "@/api/fetchPortfolioTheme";
import React from "react";
import { useRouter } from "next/navigation";
import { TbPlayerPlayFilled } from "react-icons/tb";
import useStore from "@/store/useStore";

export default function MobilePortfolio() {
  const router = useRouter();
  const selectedTheme = useStore((state) => state.selectedTheme);
  const setSelectedTheme = useStore((state) => state.setSelectedTheme);

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

  if (isLoading) return <div>Loading...</div>;
  return (
    <div>
      <MobileHeader />
      <section className="relative w-full mt-10">
        <div className="w-full h-auto relative">
          <Image
            src="/bg.svg"
            alt="background"
            layout="responsive"
            width={100}
            height={50}
            objectFit="cover"
          />
          <div className="absolute top-2 left-0 w-full h-full flex flex-col gap-3 justify-start items-center">
            <div className="w-[90%] pt-10 flex flex-row items-center justify-around text-black font-pre text-sm sm:text-lg font-medium">
              {PortfolioTitle &&
                PortfolioTitle.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    className={`cursor-pointer border ${
                      selectedTheme === item.value
                        ? "border-primary bg-primary"
                        : "border-black"
                    } rounded-2xl p-2 whitespace-nowrap`}
                  >
                    {item.title}
                  </button>
                ))}
            </div>
            <div className="mt-5 text-center font-pre">
              <p className="text-[55px] font-extrabold">Portfolio</p>
              <p className="text-headline1 font-bold">포트폴리오</p>
            </div>
            <div className="w-[90%] mt-3">
              <div
                className="relative w-full"
                style={{ paddingBottom: "56.25%" }}
              >
                <div className="absolute inset-0">
                  <Image
                    className="filter brightness-50"
                    src="/portfolio01.svg"
                    alt="portfolio01.svg"
                    layout="fill"
                    objectFit="cover"
                  />
                  <div className="absolute bottom-2 left-4 text-left text-white">
                    <p className="font-pre text-m font-medium mb-3">
                      저작권 상 모든 레퍼런스 공개가 어렵습니다.
                    </p>
                    <p className="font-pre text-m font-medium">
                      문의 주시면 더 많은 레퍼런스 제공은 물론,
                    </p>
                    <p className="font-pre text-m mb-2">
                      제작 방향 상담이 가능합니다.
                    </p>
                  </div>
                  <button
                    className="cursor-pointer absolute bottom-2 right-2 border border-white rounded-2xl text-sm text-white px-2 py-1"
                    type="button"
                  >
                    문의하기
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mb-44">
        <div className="mt-20 flex flex-row gap-4 overflow-x-scroll w-[90%] mx-auto">
          {PortfolioTitle &&
            PortfolioTitle.map((title) => (
              <button
                key={title.id}
                type="button"
                className={`cursor-pointer border ${
                  selectedTheme === title.value
                    ? "border-primary bg-primary"
                    : "border-primary bg-black text-white"
                } rounded-2xl p-2 whitespace-nowrap`}
                onClick={() => onClickTheme(title.value)}
              >
                {title.title}
              </button>
            ))}
        </div>
        <div className="relative w-[90%] mt-14 mx-auto grid grid-cols-2 gap-8">
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
                  src={item.imageUrl[0]}
                  alt="portfolio url"
                  width={100}
                  height={50}
                />
                <div className="absolute inset-0 flex justify-center items-center">
                  <div className="cursor-pointer w-8 h-8 bg-white bg-opacity-75 rounded-full flex justify-center items-center border-none">
                    <TbPlayerPlayFilled className="text-black" />
                  </div>
                </div>
              </div>
            ))}
        </div>
      </section>
    </div>
  );
}
