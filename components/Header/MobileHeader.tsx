import React from "react";
import Image from "next/image";
import MobileBtnContainer from "./_component/MobileBtnContainer";

export default function MobileHeader() {
  return (
    <header className="w-full">
      <div className="flex flex-col items-center justify-center p-6">
        <Image src="/logo.svg" alt="Logo" width={56} height={36} priority />
        <p className="text-white text-headline2 leading-6 font-semibold">
          R.B.FILM
        </p>
      </div>
      <MobileBtnContainer />
    </header>
  );
}
