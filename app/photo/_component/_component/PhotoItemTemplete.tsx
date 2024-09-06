"use client";

import Image from "next/image";
import fetchPhotoItem from "@/api/fetchPhotoItem";
import { PhotoDataItemProps } from "@/types/PhotoType";
import { useQuery } from "@tanstack/react-query";

export default function PhotoItemTemplete({
  params,
}: {
  params: { id: number };
}) {
  console.log("Templeteid : ", params?.id);

  const { data, isLoading } = useQuery<PhotoDataItemProps>({
    queryKey: ["fetchPhotoItem", params?.id],
    queryFn: () => fetchPhotoItem({ THEME: "Photo", id: params.id }),
  });

  if (isLoading) return <div>Loading...</div>;
  return (
    <main className="w-full h-full flex flex-col justify-center items-center">
      {data && (
        <section className="mt-16 w-4/5 h-full text-white text-center">
          <div className="font-pre">
            <p className="text-[24px] font-bold">{data.photoTitle}</p>
            <p className="text-[18px] font-medium">{data.photoSubTitle}</p>
          </div>
          {data && data.photoDetailUrl && data.photoDetailUrl.length > 0 && (
            <div className="mt-7 flex flex-col justify-center gap-3">
              <div className="flex flex-row justify-center gap-3">
                <div className="relative flex-1  w-1/2 h-0 pb-[23.25%]">
                  <Image
                    src={data.photoDetailUrl[0]}
                    alt={data.photoTitle}
                    className="cursor-pointer absolute inset-0"
                    fill
                    style={{ objectFit: "cover", borderRadius: "inherit" }}
                  />
                </div>
                <div className="relative flex-1  w-1/2 h-0 pb-[23.25%]">
                  <Image
                    src={data.photoDetailUrl[1]}
                    alt={data.photoTitle}
                    className="cursor-pointer absolute inset-0"
                    fill
                    style={{ objectFit: "cover", borderRadius: "inherit" }}
                  />
                </div>
              </div>
              <div className="relative w-full  h-0 pb-[45.25%]">
                <Image
                  src={data.photoDetailUrl[2]}
                  alt={data.photoTitle}
                  className="cursor-pointer absolute inset-0"
                  fill
                  style={{ objectFit: "cover", borderRadius: "inherit" }}
                />
              </div>
              <div className="flex flex-row justify-center gap-3">
                <div className="relative flex-1 w-1/2 h-0 pb-[23.25%]">
                  <Image
                    src={data.photoDetailUrl[3]}
                    alt={data.photoTitle}
                    className="cursor-pointer absolute inset-0"
                    fill
                    style={{ objectFit: "cover", borderRadius: "inherit" }}
                  />
                </div>
                <div className="relative flex-1 w-1/2 h-0 pb-[23.25%]">
                  <Image
                    src={data.photoDetailUrl[4]}
                    alt={data.photoTitle}
                    className="cursor-pointer absolute inset-0"
                    fill
                    style={{ objectFit: "cover", borderRadius: "inherit" }}
                  />
                </div>
              </div>
            </div>
          )}
        </section>
      )}
    </main>
  );
}
