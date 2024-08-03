import Image from "next/image";

export default function DeskTopHeader() {
  return (
    <header className="w-full bg-white flex flex-row justify-around border-b border-black">
      <div className="w-[80%] py-7 flex flex-row ">
        <div className="flex-1 flex flex-row items-center gap-2">
          <Image
            src="/deskTopLogo.svg"
            alt="Logo"
            width={56}
            height={36}
            priority
          />
          <p className="mr-4 text-black text-headline2 leading-6 font-semibold">
            R.B.FILM
          </p>
          <button
            type="button"
            className="cursor-pointer flex flex-row rounded-3xl text-black bg-gray p-2 gap-1"
          >
            <p className="text-body font-pre font-medium">회사소개서</p>
            <Image
              src="/downLoadBtn.svg"
              alt="downloadBtn"
              width={23}
              height={23}
            />
          </button>
        </div>
        <div className="flex-0 flex flex-row gap-5 items-center align-middle justify-evenly font-pre font-medium">
          <p className="cursor-pointer">HOME</p>
          <p className="cursor-pointer">ABOUT</p>
          <p className="cursor-pointer">SERVICE</p>
          <p className="cursor-pointer">PORTFOLIO</p>
          <p className="cursor-pointer">PHOTO</p>
          <p className="cursor-pointer">CONTACT</p>
        </div>
      </div>
    </header>
  );
}
