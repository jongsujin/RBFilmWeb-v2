"use client";

import Image from "next/image";
import MobileHeader from "@/components/Header/MobileHeader";
import MobileTab from "@/components/Tab/MobileTab";
import { useState } from "react";
import { useGetMainFilm } from "@/hooks/useGetMainFilm";
import { useGetClientData } from "@/hooks/useGetClientData";
import Link from "next/link";
import BiographyData from "@/data/BiographyData";
import Carousel from "./Carousel";
import ClienItem from "./ClientItem";
import MainFilm from "./MainFilm";
import YearTab from "./YearTab";

export default function MobileHome() {
  const { data: mainFilmData, isLoading } = useGetMainFilm();
  const { data: clientData } = useGetClientData();
  const [selectedYear, setSelectedYear] = useState(2024);
  const [moreTab, setMoreTab] = useState(false);

  const onClickMoreTab = () => {
    setMoreTab(!moreTab);
  };
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full flex flex-col justify-center items-center text-center">
      <MobileHeader />
      <main className="w-full">
        {mainFilmData && <MainFilm url={mainFilmData?.url} />}
        <section className="flex flex-col justify-center items-center text-center text-primary">
          <div className="mt-20">
            <p className="text-mainContent font-extrabold">CAPTURING</p>
            <p className="text-headline2 font-medium">the Best Moment</p>
          </div>
          <div className="mt-14">
            <p className="text-headline2 font-medium">
              Trendy and Dynamic Film
            </p>
            <p className="text-mainContent font-extrabold">R.B. FILM</p>
          </div>
        </section>

        <section className="relative w-full mt-[4.5rem]">
          <div className="w-full h-auto relative">
            <Image
              src="/bg.svg"
              alt="background"
              layout="responsive"
              width={100}
              height={50}
              objectFit="cover"
            />
            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-start items-center">
              <MobileTab />
              <div className="w-[90%] mt-8">
                <div
                  className="relative w-full"
                  style={{ paddingBottom: "56.25%" }}
                >
                  <div className="absolute inset-0">
                    <Image
                      src="/home01.svg"
                      alt="남의 것"
                      layout="fill"
                      objectFit="cover"
                    />
                    <div className="absolute left-4 bottom-3 text-left text-white">
                      <p className="font-pre text-base sm:text-lg">
                        <span className="text-imageTitle font-medium">
                          &quot;남의 것&quot;
                        </span>
                        이라는 생각이 들 때,
                      </p>
                      <p className="font-pre pl-1 font-semibold">영상은</p>
                      <p className="font-pre pl-1 font-semibold">
                        방향성을 잃어버립니다.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[90%] border-t border-borderBlack mt-6 mb-4" />
              <div className="w-[90%] text-black text-left">
                <h2 className="text-2xl font-bold mb-8">ABOUT ME</h2>
                <div className="text-sm sm:text-base">
                  <p className="font-bak font-normal mb-3">
                    어떤 종류의 프로젝트라도 내 영상을 제작한다는 마음으로
                    함께하고 있으며
                  </p>
                  <p className="whitespace-pre-line">
                    클라이언트의 니즈는 물론, {"\n"}알비필름의 새로운 시선을
                    더해 더 나은 방향을 고민하고 있습니다.
                  </p>
                  <p className="mt-8 font-bold font-roboto leading-4">
                    한 번의 비즈니스가 아닌 지속적인 파트너로 함께 성장하기를
                    바랍니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-[90%] mt-32 mx-auto">
          <h1 className="mb-8 text-5xl text-left font-extrabold text-primary">
            PROJECT
          </h1>
          <div className="flex flex-row justify-center gap-3">
            <div className="w-3/5 flex flex-col justify-between gap-3">
              <div className="flex flex-row justify-between gap-3">
                <div className="w-1/2">
                  <Image
                    src="/project01.svg"
                    alt="project01"
                    layout="responsive"
                    width={128}
                    height={144}
                    objectFit="cover"
                  />
                </div>
                <div className="w-1/2">
                  <Image
                    src="/project02.svg"
                    alt="project02"
                    layout="responsive"
                    width={128}
                    height={144}
                    objectFit="cover"
                  />
                </div>
              </div>
              <div>
                <Image
                  src="/project04.svg"
                  alt="project04"
                  layout="responsive"
                  width={260}
                  height={169}
                  objectFit="cover"
                />
              </div>
            </div>
            <div className="w-2/5 h-full">
              <Image
                src="/project03.svg"
                alt="project03"
                layout="responsive"
                width={176}
                height={317}
                objectFit="cover"
              />
            </div>
          </div>
          <div className="flex flex-row justify-between gap-3 mt-3">
            <div className="w-1/2">
              <Image
                src="/project05.svg"
                alt="project05"
                layout="responsive"
                width={219}
                height={144}
                objectFit="cover"
              />
            </div>
            <div className="w-1/2">
              <Image
                src="/project06.svg"
                alt="project06"
                layout="responsive"
                width={219}
                height={144}
                objectFit="cover"
              />
            </div>
          </div>
          <div className="flex justify-end mt-4">
            <Link href="/portfolio">
              <button
                className="font-bai bg-black text-primary border border-primary rounded-2xl py-2 px-4 cursor-pointer"
                type="button"
              >
                And More
              </button>
            </Link>
          </div>
        </section>
        <section className="relative flex justify-center mt-36 align-middle items-center">
          <div className="absolute inset-0 flex items-center px-4 pt-4">
            <div className="flex-grow border-t border-primary" />
          </div>
          <div className="relative flex flex-col justify-center bg-black px-2 text-primary text-[52px] font-extrabold">
            <p> Equipments</p>
          </div>
        </section>
        <section className="text-center font-pre">
          <p className="text-primary text-headline1 font-extrabold">장비</p>
          <p className="text-body text-white font-semibold mt-14">
            좋은 장비는 영상의 퀄리티를 한 단계 업그레이드 해줍니다.
          </p>
          <p className="text-white text-lg font-medium mt-6">
            gm 렌즈군, 짐벌, 트라이포드, 조명, 음향 장비 등
          </p>
          <p className="text-white text-lg font-medium ">
            다양한 부가 장비를 함께 운용드리고 있습니다.
          </p>
        </section>
        <section className="w-[90%] mx-auto flex flex-col justify-center gap-8 mt-16">
          <div className="relative w-full">
            <Image
              className="rounded-lg shadow-sm opacity-55"
              src="/redkomodo.svg"
              alt="redkomodo"
              layout="responsive"
              width={440}
              height={105}
            />
            <p className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 text-white text-center font-robo font-bold text-headline2">
              Red Komodo 6K
            </p>
            <div className="absolute bottom-2 right-2 transform translate-x-1/8 translate-y-1/8 text-white text-left font-robo font-normal text-sm">
              <p> +Canon RF 28-70mm</p>
              <p>+ DJI RS4 Pro, Tilta Ring grip</p>
            </div>
          </div>
          <div className="relative w-full">
            <Image
              className="rounded-lg shadow-sm opacity-55"
              src="/ronin4d.svg"
              alt="ronin4d"
              width={440}
              height={105}
              layout="responsive"
            />
            <p className="absolute top-1/2 right-1/4 transform translate-x-1/2 -translate-y-1/2 text-white text-center font-robo font-bold text-headline2">
              Ronin 4D 6K
            </p>
            <div className="absolute bottom-4 left-4 transform translate-x-1/8 translate-y-1/8 text-white text-left font-robo font-normal text-sm">
              <p>+ Sony 16-35 GM</p>
              <p>+ Sony 24-70 GM2</p>
            </div>
          </div>
          <div className="relative w-full">
            <Image
              className="rounded-lg shadow-sm"
              src="/sonyfx9.svg"
              alt="sonyfx9"
              width={440}
              height={105}
              layout="responsive"
            />
            <p className="absolute top-1/2 left-[16%] transform -translate-x-1/2 -translate-y-1/2 text-white text-center font-robo font-bold text-headline2">
              Sony FX9
            </p>
            <div className="absolute bottom-4 right-6 transform translate-x-1/8 translate-y-1/8 text-white text-left font-robo font-normal text-sm">
              <p>+ Sony 70-200 GM2</p>
              <p>+ Crane 3S</p>
            </div>
          </div>
          <div className="relative w-full">
            <Image
              className="rounded-lg shadow-sm opacity-40"
              src="/sonya7s3.svg"
              alt="sonya7s3"
              width={440}
              height={105}
              layout="responsive"
            />
            <div className="absolute top-1/2 right-1/4 transform translate-x-1/2 -translate-y-1/2 text-white text-right font-robo font-bold text-headline2">
              <p>Sony A7S</p>
              <p>Sony A1</p>
            </div>
            <div className="absolute bottom-4 left-4 transform translate-x-1/8 translate-y-1/8 text-white text-left font-robo font-normal text-sm">
              <p>+ Sony 50 GM</p>
              <p>+ Sony 24-105 G</p>
            </div>
          </div>
          <div className="relative w-full">
            <Image
              className="rounded-lg shadow-sm opacity-50"
              src="/magic3.svg"
              alt="magic3"
              width={440}
              height={105}
              layout="responsive"
            />
            <p className="absolute top-1/2 left-[16%] transform -translate-x-1/2 -translate-y-1/2 text-white text-center font-robo font-bold text-headline2">
              Mavic 3
            </p>
          </div>
        </section>
        <section className="mt-36">
          <div className="flex flex-col">
            <div className="mx-auto">
              <div className="flex items-baseline">
                <p className="text-lightPrimary font-extrabold text-[35px]">
                  R.B.FILM
                </p>
                <p className="text-lightPrimary font-extrabold text-headline1 ml-2">
                  만의
                </p>
              </div>
              <div className="flex items-baseline">
                <p className="text-lightPrimary font-extrabold text-[27px]">
                  핵심 강점
                </p>
                <p className="text-lightPrimary font-extrabold text-headline1 mx-2">
                  및
                </p>
                <p className="text-lightPrimary font-extrabold text-[27px]">
                  차별성
                </p>
              </div>
            </div>
          </div>
          <Carousel />
          <div className="text-center text-white font-pre font-medium mt-14">
            <div className="text-headline3">
              <p>틀에 박힌 구성의 영상이 아닌</p>
              <p>각각의 의뢰 컨셉에 맞는 영상을 제작 드리고 있습니다.</p>
            </div>
            <div className="mt-5 text-[15px]">
              <p>트렌디한 감성,역동적인 무빙, 시네마틱한 색감 구현 등</p>
              <p>R.B.FILM만의 색깔로 차별화 된 영상을 추구 합니다.</p>
            </div>
            <button
              className="bg-black text-white text-[15px] font-semibold border border-primary rounded-3xl mt-9 py-2 px-4 cursor-pointer"
              type="button"
            >
              포트폴리오 보기
            </button>
          </div>
        </section>
        <section className="mt-32">
          <p className="text-lightPrimary text-[55px] font-extrabold">
            Clients
          </p>
          <p className="text-lightPrimary text-headline1 font-extrabold">
            고객사
          </p>
          <div className="text-headline3 text-white font-pre font-normal mt-5">
            <p>많은 클라이언트 분들과 함께 했고,</p>
            <p>현재도 많은 인연을 이어 나가고 있습니다.</p>
          </div>
          <div className="mt-16 mx-2 grid grid-cols-5">
            {clientData &&
              clientData.DATA &&
              clientData.DATA.map((item) => (
                <ClienItem
                  key={item.id}
                  title={item.title}
                  url={item.image_url}
                />
              ))}
          </div>
        </section>
        <section className="mt-32 max-w-full mx-auto">
          <p className="font-pre text-primary text-[55px] font-extrabold">
            Biography
          </p>
          <YearTab
            years={[2022, 2023, 2024]}
            selectedYear={selectedYear}
            setSelectedYear={setSelectedYear}
          />
          <Carousel />
          <p className="font-pre text-headline1 leading-4 font-semibold text-primary mt-14">
            {selectedYear}
          </p>
          <div className="max-w-[90%] mx-auto font-pre font-medium text-lg leading-4 my-14 text-white">
            {BiographyData &&
              BiographyData.filter((item) => item.year === selectedYear)
                .slice(0, 10)
                .map((item) => (
                  <div key={item.id}>
                    <p className="pt-6">{item.title}</p>
                  </div>
                ))}
            {moreTab && (
              <div className="mt-5">
                {BiographyData &&
                  BiographyData.filter((item) => item.year === selectedYear)
                    .slice(11)
                    .map((item) => (
                      <div key={item.id}>
                        <p className="pt-6">{item.title}</p>
                      </div>
                    ))}
              </div>
            )}
          </div>
          <button
            className="font-bai bg-black text-primary border border-primary rounded-2xl py-2 px-4 cursor-pointer"
            type="button"
            onClick={onClickMoreTab}
          >
            {moreTab ? "Close" : "And More"}
          </button>
        </section>
      </main>
    </div>
  );
}
