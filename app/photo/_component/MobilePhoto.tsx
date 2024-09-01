"use client";

import MobileHeader from "@/components/Header/MobileHeader";
import { useQuery } from "@tanstack/react-query";
import fetchPhotoTheme from "@/api/fetchPhotoTheme";
import { PhotoDataProps } from "@/types/PhotoType";
import LeftTextPhotoTemplete from "./_component/LeftTextPhotoTemplete";
import RightTextPhotoTemplete from "./_component/RightTextPhotoTemplete";
import CenterTextPhotoTemplate from "./_component/CenterTextPhotoTemplete";

export default function MobilePhoto() {
  const { data: photoData, isLoading } = useQuery<PhotoDataProps>({
    queryKey: ["fetchPhotoTheme"],
    queryFn: () => fetchPhotoTheme("Photo"),
  });

  console.log("photoData", photoData);
  if (isLoading) return <div>Loading...</div>;
  return (
    <div>
      <MobileHeader />
      <div>
        <div className="w-[90%] mx-auto pt-10 flex flex-row items-center justify-around text-primary font-pre text-sm sm:text-lg font-medium">
          {["HOME", "SERVICE", "PORTFOLIO", "PHOTO", "CONTACT"].map(
            (item, index) => (
              <button
                key={item}
                type="button"
                className={`border ${
                  index === 1
                    ? "border-primary bg-primary text-black"
                    : "border-priumary"
                } rounded-2xl p-2 whitespace-nowrap`}
              >
                {item}
              </button>
            ),
          )}
        </div>
        <p className="my-16 font-roboto text-primary text-center text-[55px] font-extrabold">
          Photo
        </p>
      </div>
      <div className="flex flex-col gap-14 justify-center">
        {photoData?.DATA.map((item) => {
          if (item.textPosition === "left") {
            return (
              <LeftTextPhotoTemplete
                key={item.photoId}
                firstUrl={item.photoThumbUrl[0]}
                secondUrl={item.photoThumbUrl[1]}
                title={item.photoTitle}
                subTitle={item.photoSubTitle}
              />
            );
          }
          if (item.textPosition === "right") {
            return (
              <RightTextPhotoTemplete
                key={item.photoId}
                firstUrl={item.photoThumbUrl[0]}
                secondUrl={item.photoThumbUrl[1]}
                title={item.photoTitle}
                subTitle={item.photoSubTitle}
              />
            );
          }
          return (
            <CenterTextPhotoTemplate
              key={item.photoId}
              firstUrl={item.photoThumbUrl[0]}
              title={item.photoTitle}
              subTitle={item.photoSubTitle}
            />
          );
        })}
      </div>
    </div>
  );
}
