import Image from "next/image";

interface ClientItemProps {
  title: string;
  url: string;
}

export default function ClientItem({ title, url }: ClientItemProps) {
  return (
    <div className="flex flex-col items-center mb-12">
      {/* 부모 div에 고정된 width와 height를 추가 */}
      <div className="relative w-16 h-16 lg:w-36 lg:h-36 rounded-full overflow-hidden ">
        <Image
          // 이미지를 꽉 채우도록 설정
          src={url}
          alt="고객사 사진"
          fill
          objectFit="cover"
        />
      </div>
      <p className="mt-2 text-sm lg:text-lg text-white font-semibold">
        {title}
      </p>
    </div>
  );
}
