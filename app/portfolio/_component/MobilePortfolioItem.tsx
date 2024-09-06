"use client";

import Image from "next/image";
import MobileHeader from "@/components/Header/MobileHeader";
import ReactPlayer from "react-player";
import PortfolioTitle from "@/data/PortfolioTitle";
import { useQuery } from "@tanstack/react-query";
import fetchPortfolioItem from "@/api/fetchPortfolioItem";
import Link from "next/link";
import { PortfolioItemProps } from "@/types/PortfolioType";
import { useStore } from "@/store/useStore";
import { useRouter } from "next/navigation";

export default function MobilePortfolioItem({
  params,
}: {
  params: { id: number };
}) {
  const router = useRouter();
  const selectedTheme = useStore((state) => state.selectedTheme);
  const setSelectedTheme = useStore((state) => state.setSelectedTheme);
  console.log("id : ", params.id);
  const { data, isLoading } = useQuery<PortfolioItemProps>({
    queryKey: ["fetchPortfolioItem", params.id],
    queryFn: () => fetchPortfolioItem({ THEME: "Interview", id: params.id }),
  });
  console.log("item data : ", data);

  const onClickTheme = (theme: string) => {
    setSelectedTheme(theme);
    router.push("/portfolio");
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
                    className={`border ${
                      selectedTheme === item.value
                        ? "border-primary bg-primary"
                        : "border-black"
                    } rounded-2xl p-2 whitespace-nowrap`}
                    onClick={() => onClickTheme(item.value)}
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
                  <Link href="/contact">
                    <button
                      className="cursor-pointer absolute bottom-2 right-2 border border-white rounded-2xl text-sm text-white px-2 py-1"
                      type="button"
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
      <section>
        <div className="mt-20 flex flex-row gap-4 overflow-x-scroll w-[90%] mx-auto">
          {PortfolioTitle &&
            PortfolioTitle.map((title) => (
              <button
                key={title.id}
                type="button"
                className={`border ${
                  selectedTheme === title.value
                    ? "border-primary bg-primary"
                    : "border-primary text-white"
                } rounded-3xl py-1 px-2 whitespace-nowrap`}
                onClick={() => onClickTheme(title.value)}
              >
                {title.title}
              </button>
            ))}
        </div>
      </section>
      <section className="w-[90%] text-white mx-auto">
        <div className="border border-primary relative w-full pb-[56.25%] mt-14">
          <div className="absolute top-0 left-0 w-full h-full">
            <ReactPlayer url={data?.url} width="100%" height="100%" />
          </div>
        </div>
        <div className="font-pre text-center mt-10">
          <p className="text-headline3 font-semibold">{data?.title}</p>
          <p className="text-lg font-bold">{data?.subTitle}</p>
        </div>
        <div className="font-pre mt-8">
          <div className="flex flex-row justify-start items-center mb-2 gap-2">
            <div className="2-14 border border-primary rounded-2xl text-m font-semibold px-3 py-1 text-center flex-shrink-0">
              고객사
            </div>
            <p className="text-lg font-medium flex-grow">경찰청</p>
          </div>
          <div className="flex flex-row justify-start items-center">
            <div className="w-14 border border-primary rounded-2xl text-m font-semibold px-3 py-1 text-center flex-shrink-0">
              장비
            </div>
            <p className=" text-lg font-medium flex-grow px-3">
              {data?.equipment}
            </p>
          </div>
        </div>
        <div className="mt-14 flex flex-col gap-5">
          {data && data.imageUrl.length > 1 && (
            <>
              <div className="relative  w-full pb-[56.25%]">
                <Image
                  src={data?.imageUrl[1]}
                  alt="imageUrl[2]"
                  className="absolute"
                  layout="fill"
                />
              </div>
              <div className="relative w-full pb-[56.25%]">
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
        <div className="mt-7 w-full flex flex-row justify-end">
          <div />
          <Link href="/portfolio">
            <button
              type="button"
              className="cursor-pointer border border-primary rounded-2xl font-pre text-primary text-m font-medium px-2 py-1"
            >
              뒤로 가기
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
