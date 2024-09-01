import { PhotoTempleteProps } from "@/types/PhotoType";
import Image from "next/image";

export default function CenterTextPhotoTemplate({
  firstUrl,
  title,
  subTitle,
}: PhotoTempleteProps) {
  return (
    <div className="w-[90%]  mx-auto flex flex-col items-center">
      <div className="w-full relative pb-[52.0%] bg-gray rounded-lg">
        <Image
          src={firstUrl}
          alt={subTitle}
          className="absolute inset-0"
          fill
          style={{ objectFit: "cover", borderRadius: "inherit" }}
        />
      </div>
      <div className="text-center text-white mt-4">
        <p className="font-pre font-bold text-headline3">{title}</p>
        <p className="font-pre font-medium text-lg">{subTitle}</p>
      </div>
    </div>
  );
}
