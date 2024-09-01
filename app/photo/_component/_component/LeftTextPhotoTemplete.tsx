import { PhotoTempleteProps } from "@/types/PhotoType";
import Image from "next/image";

export default function LeftTextPhotoTemplate({
  firstUrl,
  secondUrl,
  title,
  subTitle,
}: PhotoTempleteProps) {
  return (
    <div className="w-full mx-auto flex gap-2 p-5">
      <div className="flex-1 relative h-0 pb-[67.08%] bg-gray rounded-lg">
        <Image
          src={firstUrl}
          alt={subTitle}
          className="absolute inset-0"
          fill
          style={{ objectFit: "cover", borderRadius: "inherit" }}
        />
      </div>
      <div className="flex-1 flex flex-col justify-between">
        {secondUrl && (
          <div className="relative w-full h-0 pb-[81.99%] bg-primary rounded-lg">
            <Image
              src={secondUrl}
              alt={subTitle}
              className="absolute inset-0"
              fill
              style={{ objectFit: "cover", borderRadius: "inherit" }}
            />
          </div>
        )}

        <div className="text-end text-white">
          <p className="font-pre font-bold text-headline3">{title}</p>
          <p className="font-pre font-medium text-lg">{subTitle}</p>
        </div>
      </div>
    </div>
  );
}
