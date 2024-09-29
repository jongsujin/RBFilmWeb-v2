"use client";

import Image from "next/image";
import DeskTopHeader from "@/components/Header/DeskTopHeader";
import DeskTopBtnContainer from "@/components/Header/_component/DeskTopBtnContainer";
import { useState } from "react";
import { useGetMainFilm } from "@/hooks/useGetMainFilm";
import { useGetClientData } from "@/hooks/useGetClientData";
import BiographyData from "@/data/BiographyData";
import MainFilm from "./MainFilm";
import Carousel from "./Carousel";
import ClienItem from "./ClientItem";
import YearTab from "./YearTab";

export default function DeskTopHome() {
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
      <DeskTopHeader />
      <DeskTopBtnContainer />
      <main className="w-full">
        <div className="max-w-[80%] mx-auto">
          {mainFilmData && <MainFilm url={mainFilmData.url} />}
        </div>
        <section className="mt-44">
          <div className="text-primary">
            <p className="font-robotoSlab font-extrabold text-[64px] leading-tight">
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
            <p className="font-robotoSlab font-extrabold text-[64px] leading-tight">
              R.B.FILM
            </p>
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
              <div className="w-[60%] flex flex-col gap-2">
                <div className="flex flex-row justify-center gap-2">
                  <div className="w-[40%] h-72 flex flex-col justify-center text-center items-center align-middle border border-white">
                    <p className="text-white font-pre font-semibold">
                      <span className="text-headline2">
                        &quot;남의 것&quot;
                      </span>
                      이라는 생각이 들 때
                    </p>
                    <p className="font-pre font-semibold text-headline2 text-white">
                      영상은 방향성을 잃어버립니다.
                    </p>
                  </div>
                  <div className="relative w-[60%] h-72">
                    <Image
                      className="absolute inset-0 border border-white"
                      src="/deskTopHome01.svg"
                      alt="image"
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                </div>
                <div className="flex flex-row justify-center gap-2">
                  <div className="relative w-[45%] h-72">
                    <Image
                      className="absolute inset-0 border border-white"
                      src="/deskTopHome02.svg"
                      alt="image"
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div className="w-[55%] h-72 border border-white rounded-md shadow-2xl">
                    <div className="flex flex-col h-full ml-3 text-white text-left font-pre font-bold">
                      <p className="mt-8 text-[24px]">ABOUT ME</p>
                      <div className="mt-10 flex flex-col gap-1">
                        <p className="text-m font-roboto font-medium">
                          어떤 종류의 프로젝트라도 내 영상을 제작한다는 마음으로
                          함께하고 있으며
                        </p>
                        <p className="text-m font-roboto font-medium">
                          클라이언트의 니즈는 물론,
                        </p>
                        <p className="text-m font-roboto font-medium">
                          알비필름의 새로운 시선을 더해 더 나은 방향을 고민하고
                          있습니다.
                        </p>
                        <p className="font-roboto font-semibold text-lg">
                          한 번의 비즈니스가 아닌 지속적인 파트너로 함께
                          성장하기를 바랍니다.
                        </p>
                        <div className="flex flex-row justify-between mt-10 mr-6">
                          <div />
                          <div className="text-m font-roboto font-medium">
                            <p>알비필름 대표</p>
                            <p>최정훈 드림</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-[60%] mt-32 mx-auto">
          <h1 className="mb-8 text-5xl text-left font-extrabold text-primary font-robotoSlab">
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
        <section className="w-[60%]  mx-auto relative flex justify-center mt-36 align-middle items-center">
          <div className="relative flex flex-col justify-center bg-black px-2 font-robotoSlab text-primary text-[55px] font-extrabold">
            <p>Equipments</p>
          </div>
        </section>
        <section className="w-[65%] h-full mx-auto flex flex-col justify-center gap-8 mt-16">
          <div className="relative w-[90%] h-0 pb-[25.15%] mx-auto border border-black overflow-hidden">
            <Image
              className="absolute inset-0 w-full h-full  shadow-2xl opacity-55"
              src="/redkomodo.svg"
              alt="redkomodo"
              layout="fill"
              objectFit="cover"
            />
            <p className="absolute top-1/2 left-32 transform -translate-x-1/2 -translate-y-1/2 text-white text-center font-robotoFlex font-bold text-[24px]">
              Red Komodo 6K
            </p>
            <div className="absolute bottom-14 right-8 transform translate-x-1/8 translate-y-1/8 text-white text-left font-robotoFlex font-normal text-body">
              <div className="flex flex-row gap-2">
                <Image src="/minusBtn.svg" alt="minus" width={13} height={13} />
                <p>Canon RF 28-70mm</p>
              </div>
              <div className="flex flex-row gap-2">
                <Image src="/minusBtn.svg" alt="minus" width={13} height={13} />
                <p>DJI RS4 Pro, Tilta Ring grip</p>
              </div>
            </div>
          </div>
          <div className="relative w-[90%] mx-auto pb-[25.15%]">
            <Image
              className="shadow-2xl opacity-55"
              src="/ronin4d.svg"
              alt="ronin4d"
              layout="fill"
              objectFit="cover"
            />
            <p className="absolute top-1/2 right-32 transform translate-x-1/2 -translate-y-1/2 text-white text-center font-robotoFlex font-bold text-[24px]">
              Ronin 4D 6K
            </p>
            <div className="absolute bottom-14 left-8 transform translate-x-1/8 translate-y-1/8 text-white text-left font-robotoFlex font-normal text-body">
              <div className="flex flex-row gap-2">
                <Image src="/plusBtn.svg" alt="minus" width={13} height={13} />
                <p>Canon RF 28-70mm</p>
              </div>
              <div className="flex flex-row gap-2">
                <Image src="/plusBtn.svg" alt="minus" width={13} height={13} />
                <p>DJI RS4 Pro, Tilta Ring grip</p>
              </div>
            </div>
          </div>
          <div className="relative w-[90%] mx-auto pb-[25.15%]">
            <Image
              className="shadow-2xl opacity-40"
              src="/sonyfx9.svg"
              alt="sonyfx9"
              layout="fill"
              objectFit="cover"
            />
            <p className="absolute top-1/2 left-32 transform -translate-x-1/2 -translate-y-1/2 text-white text-center font-robotoFlex font-bold text-[24px]">
              Sony FX9
            </p>
            <div className="absolute bottom-14 right-8 transform translate-x-1/8 translate-y-1/8 text-white text-left font-robotoFlex font-normal text-body">
              <div className="flex flex-row gap-2">
                <Image src="/minusBtn.svg" alt="minus" width={13} height={13} />
                <p>Sony 70-200 GM2</p>
              </div>
              <div className="flex flex-row gap-2">
                <Image src="/minusBtn.svg" alt="minus" width={13} height={13} />
                <p>Crane 3S</p>
              </div>
            </div>
          </div>
          <div className="relative w-[90%] h-full mx-auto pb-[25.15%]">
            <Image
              className="shadow-2xl opacity-50"
              src="/sonya7s3.svg"
              alt="magic3"
              layout="fill"
              objectFit="cover"
            />
            <div className="absolute text-end top-1/2 right-32 transform translate-x-1/2 -translate-y-1/2 text-white  font-robotoFlex font-bold text-[24px]">
              <p>Sony A7S</p>
              <p>Sony A1</p>
            </div>
            <div className="absolute bottom-14 left-8 transform translate-x-1/8 translate-y-1/8 text-white text-left font-robotoFlex font-normal text-body">
              <div className="flex flex-row gap-2">
                <Image src="/plusBtn.svg" alt="minus" width={13} height={13} />
                <p>Sony 50 GM</p>
              </div>
              <div className="flex flex-row gap-2">
                <Image src="/plusBtn.svg" alt="minus" width={13} height={13} />
                <p>Sony 24-105 G</p>
              </div>
            </div>
          </div>
          <div className="relative w-[90%] mx-auto pb-[25.15%] border border-black shadow-2xl">
            <Image
              className="shadow-2xl opacity-50"
              src="/magic3.svg"
              alt="magic3"
              layout="fill"
              objectFit="cover"
            />
            <p className="absolute top-1/2 left-32 transform -translate-x-1/2 -translate-y-1/2 text-white text-center font-robotoFlex font-bold text-[24px]">
              Mavic 3
            </p>
          </div>
        </section>

        <section className="max-w-[60%] mx-auto mt-36">
          <div className="flex flex-col">
            <div className="mx-auto text-center">
              <div className="flex justify-center items-baseline">
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
        <section className="w-[60%] mx-auto mt-32">
          <p className="font-robotoSlab text-primary text-[55px] font-extrabold">
            Clients
          </p>

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
        <section className="mt-32 max-w-[60%] mx-auto">
          <p className="font-robotoSlab text-primary text-[55px] font-extrabold">
            Biography
          </p>
          <YearTab
            years={[2022, 2023, 2024]}
            selectedYear={selectedYear}
            setSelectedYear={setSelectedYear}
          />
          <Carousel />
          <p className="font-pre text-[28px] leading-6 font-semibold text-primary mt-14">
            {selectedYear}
          </p>
          <div className="font-pre font-medium text-body leading-4 my-14 text-white">
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
