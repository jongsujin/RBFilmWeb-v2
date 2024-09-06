import { PhotoTempleteProps } from "@/types/PhotoType";
import Image from "next/image";

export default function RightTextPhotoTemplete({
  id,
  firstUrl,
  secondUrl,
  title,
  subTitle,
  onClick,
}: PhotoTempleteProps) {
  return (
    <div className="w-full mx-auto flex gap-2 p-5">
      <div className="flex-1 flex flex-col justify-between">
        <div className="relative w-full h-0 pb-[81.99%] bg-primary rounded-lg ">
          <Image
            src={firstUrl}
            alt={subTitle}
            className="cursor-pointer absolute inset-0"
            fill
            style={{ objectFit: "cover", borderRadius: "inherit" }}
            onClick={() => onClick(id)}
          />
        </div>
        <div className="text-start text-white">
          <p className="font-pre font-bold text-headline3">{title}</p>
          <p className="font-pre font-medium text-lg">{subTitle}</p>
        </div>
      </div>
      {secondUrl && (
        <div className="flex-1 relative h-0 pb-[67.08%] rounded-lg">
          <Image
            src={secondUrl}
            alt={subTitle}
            className="cursor-pointer absolute inset-0"
            fill
            style={{ objectFit: "cover", borderRadius: "inherit" }}
            onClick={() => onClick(id)}
          />
        </div>
      )}
    </div>
  );
}
