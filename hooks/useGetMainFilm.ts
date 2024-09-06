"use client";

import fetchMainfilmData from "@/api/fetchMainFilmData";
import { useQuery, QueryKey } from "@tanstack/react-query";

export interface MainFilmDataProps {
  THEME: string;
  url: string;
}

export function useGetMainFilm() {
  return useQuery<MainFilmDataProps, Error, MainFilmDataProps, QueryKey>({
    queryKey: ["mainFilmData"],
    queryFn: () => fetchMainfilmData("Mainfilm"),
    refetchOnWindowFocus: false,
    staleTime: Infinity, // 데이터가 만료되지 않도록 설정
  });
}
