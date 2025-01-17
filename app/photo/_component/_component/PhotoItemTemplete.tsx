"use client";

import Image from "next/image";
import fetchPhotoItem from "@/api/fetchPhotoItem";
import { PhotoDataItemProps } from "@/types/PhotoType";
import { useQuery } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import SkeletonPhotoItemTemplete from "./Skeleton/SkeletonPhotoItemTemplete";

export default function PhotoItemTemplete({
  params,
}: {
  params: { id: number };
}) {
  const [, setShowSkeleton] = useState(true);
  const { data, isLoading } = useQuery<PhotoDataItemProps>({
    queryKey: ["fetchPhotoItem", params?.id],
    queryFn: () => fetchPhotoItem({ THEME: "Photo", id: params.id }),
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSkeleton(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) return <SkeletonPhotoItemTemplete />;

  return (
    <main className="w-full h-full flex flex-col justify-center items-center">
      {data && (
        <section className="mt-16 w-4/5 h-full text-white text-center xl:w-3/5">
          <div className="font-pre">
            <p className="text-[24px] font-bold">{data.photoTitle}</p>
            <p className="text-[18px] font-medium">{data.photoSubTitle}</p>
          </div>
          {data && data.photoDetailUrl && data.photoDetailUrl.length > 0 && (
            <div className="mt-7 flex flex-col justify-center gap-3">
              <div className="flex flex-row justify-center gap-3">
                <div className="relative flex-1 w-1/2 aspect-[3/2]">
                  <Image
                    src={data.photoDetailUrl[0]}
                    alt={data.photoTitle}
                    className="cursor-pointer absolute inset-0"
                    fill
                    style={{ objectFit: "cover", borderRadius: "inherit" }}
                  />
                </div>

                <div className="relative flex-1 w-1/2 aspect-[3/2]">
                  <Image
                    src={data.photoDetailUrl[1]}
                    alt={data.photoTitle}
                    className="cursor-pointer absolute inset-0"
                    fill
                    style={{ objectFit: "cover", borderRadius: "inherit" }}
                  />
                </div>
              </div>

              <div className="relative flex-1 w-full aspect-[3/2]">
                <Image
                  src={data.photoDetailUrl[2]}
                  alt={data.photoTitle}
                  className="cursor-pointer absolute inset-0"
                  fill
                  style={{ objectFit: "cover", borderRadius: "inherit" }}
                />
              </div>
              <div className="flex flex-row justify-center gap-3">
                <div className="relative flex-1 w-1/2 aspect-[3/2]">
                  <Image
                    src={data.photoDetailUrl[3]}
                    alt={data.photoTitle}
                    className="cursor-pointer absolute inset-0"
                    fill
                    style={{ objectFit: "cover", borderRadius: "inherit" }}
                  />
                </div>

                <div className="relative flex-1 w-1/2 aspect-[3/2]">
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
