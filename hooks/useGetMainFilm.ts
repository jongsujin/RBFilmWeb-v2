"use client";

import fetchMainfilmData from "@/api/fetchMainFilmData";
import { useQuery } from "@tanstack/react-query";

export interface MainFilmDataProps {
  THEME: string;
  url: string;
}
export function useGetMainFilm() {
  return useQuery<MainFilmDataProps>({
    queryKey: ["mainFilmData"],
    queryFn: () => fetchMainfilmData("Mainfilm"),
    refetchOnWindowFocus: false,
    staleTime: Infinity,
  });
}
