import Image from "next/image";

interface ClientItemProps {
  title: string;
  url: string;
}

export default function ClienItem({ title, url }: ClientItemProps) {
  return (
    <div className="flex flex-col w-16 h-16 items-center mb-12 lg:w-36 lg:h-36">
      <Image
        className="lg:w-36 lg:h-36"
        src={url}
        width={60}
        height={60}
        alt="고객사 사진"
      />
      <p className="mt-2 text-m text-white font-semibold">{title}</p>
    </div>
  );
}
