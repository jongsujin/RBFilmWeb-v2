"use client";

import { useQuery } from "@tanstack/react-query";
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
    <main className="flex flex-col items-center justify-center">
      <MobileHeader />
      {mainFilmData && <MainFilm url={mainFilmData?.url} />}
      <div className="flex flex-col justify-center items-center">
        <div>
          <p>CAPTURING</p>
          <p>the Best Moment</p>
        </div>
        <div>
          <p>CAPTURING</p>
          <p>the Best Moment</p>
        </div>
      </div>
    </main>
  );
}
