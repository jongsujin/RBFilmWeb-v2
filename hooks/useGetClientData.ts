"use client";

import fetchData from "@/api/fetchDataTHEME";
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
    queryFn: () => fetchData("Client"),
    refetchOnWindowFocus: false,
  });
}
