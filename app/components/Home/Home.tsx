"use client";

import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import fetchMainfilmData from "@/api/fetchMainFilmData";
import MobileHeader from "../Header/MobileHeader";
import MainFilm from "./_component/MainFilm";

interface MainFilmDataProps {
  THEME: string;
  url: string;
}

export default function Home() {
  const { data: mainFilmData, isLoading } = useQuery<MainFilmDataProps>({
    queryKey: ["mainFilmData"],
    queryFn: () => fetchMainfilmData("Mainfilm"),
    refetchOnWindowFocus: false,
    staleTime: Infinity,
  });

  console.log("mainFilmData", mainFilmData?.url);
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
          <Image
            src="/bg.svg"
            alt="background"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            className="absolute"
          />
          <div className="mx-auto flex flex-col justify-center items-center text-white relative">
            <div className="w-[90%]  pt-10 flex flex-row items-center justify-around text-black font-pre text-lg font-medium leading-3 xs:text-m xs:gap-1">
              <button
                type="button"
                className="border border-primary rounded-2xl bg-primary leading-3 p-2"
              >
                HOME
              </button>
              <button
                type="button"
                className="border border-black rounded-2xl p-2"
              >
                SERVICE
              </button>
              <button
                type="button"
                className="border border-black rounded-2xl p-2"
              >
                PORTFOLIO
              </button>
              <button
                type="button"
                className="border border-black rounded-2xl p-2"
              >
                PHOTO
              </button>
              <button
                type="button"
                className="border border-black rounded-2xl p-2"
              >
                CONTACT
              </button>
            </div>
          </div>
          <div className="w-[90%] mx-auto mt-8">
            <div className="relative">
              <Image
                src="/home01.svg"
                alt="남의 것"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
              />
              <div className="absolute left-4 bottom-3  text-left text-white">
                <p className="font-pre text-lg">
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
        </section>
        <section className="relative w-full mt-6 px-4 text-primary text-left">
          <div className="w-full border-t border-borderBlack my-6" />
          <h2 className="text-headline1 font-bold text-black">ABOUT ME</h2>
          <p className="mt-4 text-sm text-black">
            어떤 종류의 프로젝트라도 내 영상을 제작한다는 마음으로 함께하고
            있으며
          </p>
          <p className="mt-3 text-sm whitespace-pre-line text-black font-normal">
            클라이언트의 니즈는 물론, {"\n"}알비필름의 새로운 시선을 더해 더
            나은 방향을 고민하고 있습니다.
          </p>
          <p className="mt-3  text-sm font-bold text-black font-roboto">
            한 번의 비즈니스가 아닌 지속적인 파트너로 함께 성장하기를 바랍니다.
          </p>
        </section>
      </main>
    </div>
  );
}
