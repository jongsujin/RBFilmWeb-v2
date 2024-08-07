"use client";

import fetchMainfilmData from "@/api/fetchMainFilmData";
import { useQuery } from "@tanstack/react-query";

export interface ClientItemProps {
  title: string;
  image_url: string;
  id: number;
}
export interface ClientDataProps {
  THEME: string;
  DATA: ClientItemProps[];
}

export function useGetClientData() {
  return useQuery<ClientDataProps>({
    queryKey: ["clientData"],
    queryFn: () => fetchMainfilmData("Client"),
    refetchOnWindowFocus: false,
  });
}
