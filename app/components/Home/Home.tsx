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
        <section className="relative w-full h-[680px] mt-[4.5rem]">
          <Image
            src="/bg.svg"
            alt="background"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            className="absolute"
          />
          <div className="absolute top-24 left-0 right-0 flex flex-col justify-center items-center text-white">
            <div className="border border-white flex  items-center justify-center gap-2 mx-4 text-black font-pre text-lg font-medium leading-3">
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
          <div className="absolute top-40 left-0 right-0 flex flex-row justify-center w-[90%] h-60 mx-auto">
            <Image
              src="/home01.svg"
              alt="남의 것"
              fill
              className="max-w-full h-auto"
            />
          </div>
        </section>
      </main>
    </div>
  );
}
