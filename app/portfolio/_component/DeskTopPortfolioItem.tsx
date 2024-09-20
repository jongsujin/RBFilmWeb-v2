/* eslint-disable react/no-array-index-key */

"use client";

import React from "react";
import Image from "next/image";
import fetchPortfolioItem from "@/api/fetchPortfolioItem";
import { useQuery } from "@tanstack/react-query";
import DeskTopHeader from "@/components/Header/DeskTopHeader";
import DeskTopBtnContainer from "@/components/Header/_component/DeskTopBtnContainer";
import useStore from "@/store/useStore";
import PortfolioTitle from "@/data/PortfolioTitle";
import { PortfolioItemProps } from "@/types/PortfolioType";
import ReactPlayer from "react-player";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function DeskTopPortfolioItem({
  params,
}: {
  params: { id: number };
}) {
  const router = useRouter();
  const selectedTheme = useStore((state) => state.selectedTheme);
  const setSelectedTheme = useStore((state) => state.setSelectedTheme);

  const { data, isLoading } = useQuery<PortfolioItemProps>({
    queryKey: ["fetchPortfolioItem", params.id],
    queryFn: () => fetchPortfolioItem({ THEME: selectedTheme, id: params.id }),
  });

  const onClickTheme = (theme: string) => {
    setSelectedTheme(theme);
    router.push("/portfolio");
  };

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
              <div className="relative flex-1 w-1/2">
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
                  <Link href="/contact">
                    <button
                      type="button"
                      className="w-1/4 mx-auto mt-8 border border-white rounded-3xl px-5 py-2"
                    >
                      문의하기
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-[50%] mx-auto">
        <div className="w-full mx-auto flex flex-row items-center justify-evenly text-primary font-pre text-body font-medium">
          {PortfolioTitle &&
            PortfolioTitle.map((item) => (
              <button
                key={item.id}
                type="button"
                className={`border ${
                  selectedTheme === item.value
                    ? "border-primary bg-primary text-black"
                    : "border-primary text-primary"
                } rounded-3xl px-5 py-2 whitespace-nowrap`}
                onClick={() => onClickTheme(item.value)}
              >
                {item.title}
              </button>
            ))}
        </div>

        <div className="mt-20 text-headline2">
          <p className="font-pre font-semibold text-center text-white">
            {data?.title}
          </p>
          <p className="font-pre font-semibold text-center text-primary text-body">
            {data?.subTitle}
          </p>
        </div>
        <div className="mt-4 flex flex-col gap-2">
          <div className="border border-primary relative w-full pb-[56.25%] mt-14 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full">
              <ReactPlayer
                url={data?.url}
                width="100%"
                height="100%"
                controls
              />
            </div>
          </div>
          <div className="flex justify-around gap-5 w-full my-20">
            <div className="relative w-1/3 h-auto border border-primary rounded-lg">
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
                <span className="font-pre font-medium text-lg text-white">
                  {data?.client}
                </span>
              </div>
            </div>
            <div className="relative w-2/4 h-auto border border-primary rounded-lg">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black px-2">
                <span className="font-pre font-medium text-headline2 text-primary">
                  Equipment
                </span>
              </div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-black px-2">
                <span className="font-pre font-medium text-headline2 text-primary">
                  장비
                </span>
              </div>
              <div className="flex items-center justify-center h-full">
                <span className="font-pre font-medium text-lg text-center text-white whitespace-nowrap px-3">
                  {data?.equipment}
                </span>
              </div>
            </div>
            <div className="relative w-1/3 h-auto border border-primary rounded-lg">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black px-2">
                <span className="font-pre font-medium text-headline2 text-primary">
                  D.O.P
                </span>
              </div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-black px-2">
                <span className="font-pre font-medium text-headline2 text-primary">
                  촬영팀
                </span>
              </div>
              <div className="flex items-center justify-center h-full">
                <div className="flex flex-col font-pre font-medium text-lg text-white text-center gap-2 py-5 px-2">
                  {data?.part.map((item, index) => (
                    <span key={index}>{item.replace(/\s/g, "\u00A0")}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-2">
            {data && data.imageUrl.length > 1 && (
              <>
                <div className="relative border border-white w-[40%] h-80">
                  <Image
                    src={data?.imageUrl[1]}
                    alt="imageUrl[2]"
                    className="absolute"
                    layout="fill"
                  />
                </div>
                <div className="relative border border-white w-[60%] h-80">
                  <Image
                    src={data?.imageUrl[2]}
                    alt="imageUrl[2]"
                    className="absolute"
                    layout="fill"
                  />
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
