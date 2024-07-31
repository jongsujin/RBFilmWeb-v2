import Image from "next/image";

export default function DeskTopHeader() {
  return (
    <header className="w-full bg-white flex flex-row justify-around">
      <div className="flex-1  flex flex-row items-center justify-center gap-2 p-6">
        <Image src="/logo.svg" alt="Logo" width={56} height={36} priority />
        <p className="text-black text-headline2 leading-6 font-semibold">
          R.B.FILM
        </p>
      </div>
      <div className="flex-1 border border-black">안농</div>
    </header>
  );
}
