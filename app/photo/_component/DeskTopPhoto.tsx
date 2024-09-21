"use client";

import { useQuery } from "@tanstack/react-query";
import fetchPhotoTheme from "@/api/fetchPhotoTheme";
import { PhotoDataItemProps, PhotoDataProps } from "@/types/PhotoType";
import { useRouter } from "next/navigation";
import DeskTopHeader from "@/components/Header/DeskTopHeader";
import LeftTextPhotoTemplete from "./_component/LeftTextPhotoTemplete";
import RightTextPhotoTemplete from "./_component/RightTextPhotoTemplete";
import CenterTextPhotoTemplate from "./_component/CenterTextPhotoTemplete";

export default function DeskTopPhoto() {
  const router = useRouter();
  const { data: photoData, isLoading } = useQuery<PhotoDataProps>({
    queryKey: ["fetchPhotoTheme"],
    queryFn: () => fetchPhotoTheme("Photo"),
  });

  if (isLoading) return <div>Loading...</div>;

  const handleClickPhotoItem = (id: number) => {
    router.push(`/photo/item/${id}`);
  };

  // 아이템들을 2개씩 묶는 방법: map을 사용한 묶음 처리
  const groupedItems = photoData?.DATA.reduce<PhotoDataItemProps[][]>(
    (result, item, index, array) => {
      if (index % 2 === 0) {
        result.push(array.slice(index, index + 2)); // 2개씩 잘라서 배열에 추가
      }
      return result;
    },
    [],
  );

  return (
    <div>
      <DeskTopHeader />
      <div>
        <p className="my-16 font-roboto text-white text-center text-[55px] font-extrabold">
          Photo
        </p>
      </div>
      <div className="w-3/5 mx-auto flex flex-col gap-14 justify-center">
        {groupedItems?.map((group, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <div key={index} className="flex gap-4">
            {group.map((item) => {
              if (item.textPosition === "left") {
                return (
                  <LeftTextPhotoTemplete
                    key={item.id}
                    id={item.id}
                    firstUrl={item.photoThumbUrl[0]}
                    secondUrl={item.photoThumbUrl[1]}
                    title={item.photoTitle}
                    subTitle={item.photoSubTitle}
                    onClick={() => handleClickPhotoItem(item.id)}
                  />
                );
              }
              if (item.textPosition === "right") {
                return (
                  <RightTextPhotoTemplete
                    key={item.id}
                    id={item.id}
                    firstUrl={item.photoThumbUrl[0]}
                    secondUrl={item.photoThumbUrl[1]}
                    title={item.photoTitle}
                    subTitle={item.photoSubTitle}
                    onClick={() => handleClickPhotoItem(item.id)}
                  />
                );
              }
              return (
                <CenterTextPhotoTemplate
                  key={item.id}
                  id={item.id}
                  firstUrl={item.photoThumbUrl[0]}
                  title={item.photoTitle}
                  subTitle={item.photoSubTitle}
                  onClick={() => handleClickPhotoItem(item.id)}
                />
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
