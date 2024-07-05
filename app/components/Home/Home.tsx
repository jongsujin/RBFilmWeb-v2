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
              <div className="w-[90%] pt-10 flex flex-row items-center justify-around text-black font-pre text-sm sm:text-lg font-medium">
                {["HOME", "SERVICE", "PORTFOLIO", "PHOTO", "CONTACT"].map(
                  (item, index) => (
                    <button
                      key={item}
                      type="button"
                      className={`border ${
                        index === 0
                          ? "border-primary bg-primary"
                          : "border-black"
                      } rounded-2xl p-2 whitespace-nowrap`}
                    >
                      {item}
                    </button>
                  ),
                )}
              </div>
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
              <div className="w-[90%] border-t border-borderBlack mt-8 mb-6" />
              <div className="w-[90%] text-black text-left">
                <h2 className="text-2xl font-bold mb-8">ABOUT ME</h2>
                <div className="text-sm sm:text-base">
                  <p className="mb-3">
                    어떤 종류의 프로젝트라도 내 영상을 제작한다는 마음으로
                    함께하고 있으며
                  </p>
                  <p className="whitespace-pre-line">
                    클라이언트의 니즈는 물론, {"\n"}알비필름의 새로운 시선을
                    더해 더 나은 방향을 고민하고 있습니다.
                  </p>
                  <p className="mt-12 font-bold font-roboto leading-4">
                    한 번의 비즈니스가 아닌 지속적인 파트너로 함께 성장하기를
                    바랍니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-[90%] border border-white mt-32 mx-auto">
          <h1 className="mb-8 text-5xl text-left font-extrabold text-primary font-roboto">
            PROJECT
          </h1>
          <div className="flex flex-row justify-center gap-3">
            <div className="w-3/5 border border-borderBlack flex flex-col justify-center gap-3">
              <div className="flex flex-row justify-center">
                <div className="w-1/2 flex-grow-1 border border-white">1</div>
                <div className="w-1/2 flex-grow-1 border border-white">2</div>
              </div>
              <div className="border border-white">두 번째 사진</div>
            </div>
            <div className="w-2/5 border border-white">3</div>
          </div>
          <div className="border border-white flex flex-row justify-center gap-3">
            <div className="w-1/2 flex-grow-1 border border-white">4</div>
            <div className="w-1/2 flex-grow-1 border border-white">5</div>
          </div>
          <div className="flex flex-row justify-between">
            <div />
            <button className="bg-white text-black items-end" type="button">
              And More
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
