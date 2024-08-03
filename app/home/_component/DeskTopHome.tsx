"use client";

import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import fetchMainfilmData from "@/api/fetchMainFilmData";
import DeskTopHeader from "@/components/Header/DeskTopHeader";
import { ClientDataProps, MainFilmDataProps } from "./MobileHome";
import MainFilm from "./MainFilm";
import Carousel from "./Carousel";
import ClienItem from "./ClientItem";

export default function DeskTopHome() {
  const { data: mainFilmData, isLoading } = useQuery<MainFilmDataProps>({
    queryKey: ["mainFilmData"],
    queryFn: () => fetchMainfilmData("Mainfilm"),
    refetchOnWindowFocus: false,
    staleTime: Infinity,
  });

  const { data: clientData } = useQuery<ClientDataProps>({
    queryKey: ["clientData"],
    queryFn: () => fetchMainfilmData("Client"),
    refetchOnWindowFocus: false,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="w-full flex flex-col justify-center items-center text-center">
      <DeskTopHeader />
      <main className="w-full">
        <div className="max-w-[80%] mx-auto">
          {mainFilmData && <MainFilm url={mainFilmData.url} />}
        </div>
        <section className="mt-44">
          <div className="font-roboto text-primary">
            <p className="font-extrabold text-[64px] leading-tight">
              CAPTURING
            </p>
            <p className="font-normal text-[24px] leading-tight">
              the Best Moment
            </p>
          </div>

          <div className="mt-16 font-roboto text-primary">
            {" "}
            <p className="font-normal text-[24px] leading-tight">
              Trendy and Dynamic Film
            </p>
            <p className="font-extrabold text-[64px] leading-tight">R.B.FILM</p>
          </div>
        </section>
        <section className="w-full mt-32">
          <div className="relative w-full pb-[41.67%]">
            <Image
              src="/deskTopBg.svg"
              alt="background"
              layout="fill"
              objectFit="cover"
            />
            <div className="absolute top-0 right-0 left-0 bottom-10 flex justify-center items-center">
              <div className="w-[50%] flex flex-col gap-2">
                <div className="flex flex-row justify-center gap-2">
                  <div className="w-[40%] h-64 flex flex-col justify-center text-center items-center align-middle border border-white">
                    <p className="text-white">
                      <span>&quot;남의 것&quot;</span>이라는 생각이 들 때
                    </p>
                    <p className="text-white">영상은 방향성을 잃어버립니다.</p>
                  </div>
                  <div className="relative w-[60%] h-64">
                    <Image
                      className="absolute inset-0 border border-white"
                      src="/contact01.svg"
                      alt="image"
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                </div>
                <div className="flex flex-row justify-center gap-2">
                  <div className="relative w-[45%] h-64">
                    <Image
                      className="absolute inset-0 border border-white"
                      src="/contact01.svg"
                      alt="image"
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div className="w-[55%] h-64 bg-white" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-[50%] mt-32 mx-auto">
          <h1 className="mb-8 text-5xl text-left font-extrabold text-primary font-roboto">
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
        </section>
        <section className="w-[50%]  mx-auto relative flex justify-center mt-36 align-middle items-center">
          <div className="relative flex flex-col justify-center bg-black px-2 text-primary text-[55px] font-extrabold">
            <p> Equipments</p>
          </div>
        </section>
        <section className="w-[50%] mx-auto flex flex-col justify-center gap-8 mt-16">
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
        <section className="max-w-[50%] mx-auto mt-36">
          <div className="flex flex-col">
            <div className="mx-auto">
              <div className="flex items-baseline">
                <p className="text-primary font-extrabold text-[35px]">
                  R.B.FILM
                </p>
                <p className="text-primary font-extrabold text-headline1 ml-2">
                  만의
                </p>
              </div>
              <div className="flex items-baseline">
                <p className="text-primary font-extrabold text-[27px]">
                  핵심 강점
                </p>
                <p className="text-primary font-extrabold text-headline1 mx-2">
                  및
                </p>
                <p className="text-primary font-extrabold text-[27px]">
                  차별성
                </p>
              </div>
            </div>
          </div>
          <Carousel />
          <div className="text-center text-white font-pre font-normal mt-14">
            <div className="text-headline3">
              <p>틀에 박힌 구성의 영상이 아닌</p>
              <p>각각의 의뢰 컨셉에 맞는 영상을 제작 드리고 있습니다.</p>
            </div>
            <div className="mt-5 text-[15px]">
              <p>트렌디한 감성,역동적인 무빙, 시네마틱한 색감 구현 등</p>
              <p>R.B.FILM만의 색깔로 차별화 된 영상을 추구 합니다.</p>
            </div>
          </div>
        </section>
        <section className="w-[50%] mx-auto mt-32">
          <p className="text-primary text-[55px] font-extrabold">Clients</p>

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
        <section className="mt-32">
          <p className="text-primary text-[55px] font-extrabold">Biography</p>
        </section>
      </main>
    </div>
  );
}