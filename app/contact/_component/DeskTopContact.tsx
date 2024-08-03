import Image from "next/image";
import DeskTopHeader from "@/components/Header/DeskTopHeader";

export default function DeskTopContact() {
  return (
    <div className="w-full flex flex-col justify-center items-start text-center">
      <DeskTopHeader />
      <section className="w-full">
        <div className="relative w-full pb-[41.67%]">
          <Image
            src="/deskTopBg.svg"
            alt="background"
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute top-0 right-0 left-0 bottom-10 flex justify-center items-center">
            <div className="w-[50%] flex flex-col gap-2">
              <div className="flex flex-row justify-center gap-2">
                <div className="w-[40%] h-56 flex flex-col justify-center text-center items-center align-middle border border-white">
                  <p className="text-white text-[50px] font-bold">CONTACT</p>
                  <p className="text-white font-pre text-headline2 font-bold">
                    궁금한 것이 있으신가요?
                  </p>
                  <p className="text-white text-body font-medium">
                    24시간 내로 회신드립니다.
                  </p>
                </div>
                <div className="relative w-[60%] h-56">
                  <Image
                    className="absolute inset-0 shadow-lg"
                    src="/contact01.svg"
                    alt="deskTopContact01.svg"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </div>
              <div className="flex flex-row justify-center gap-2">
                <div className="relative w-[45%] h-56">
                  <Image
                    className="absolute inset-0 shadow-lg"
                    src="/contact01.svg"
                    alt="deskTopContact02.svg"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="w-[55%] h-56  flex flex-col justify-center gap-3 border border-white">
                  <div className="border border-white text-white w-1/2 mx-auto rounded-3xl p-2">
                    Opening Time
                  </div>
                  <div className="font-pre font-medium text-white">
                    <p>Monday ~ Friday : 00am ~ 24pm</p>
                    <p>Weekend: Online Consultation</p>
                  </div>
                  <div className="border border-white text-white w-1/2 mt-2 mx-auto rounded-3xl p-2">
                    Phone Number
                  </div>
                  <div className="font-pre font-medium text-white">
                    <p>+82 10 7712 2492</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-[50%] mx-auto flex flex-col gap-12 ">
        <div className="text-white">
          <div className="flex flex-row gap-2 items-center align-middle">
            <p className="text-headline3 font-medium font-pre">
              업체(단체명) Or 성함
            </p>
            <div className="text-headline3 text-secondary flex flex-col justify-center align-middle items-center">
              *
            </div>
          </div>
          <input
            className="w-full placeholder:text-white font-medium p-3 border border-white bg-black"
            type="text"
            placeholder="입력해주세요"
          />
        </div>
        <div className="text-white">
          <div className="flex flex-row gap-2 items-center align-middle">
            <p className="text-headline3 font-medium font-pre">이메일</p>
            <div className="text-headline3 text-secondary flex flex-col justify-center align-middle items-center">
              *
            </div>
          </div>
          <input
            className="w-full placeholder:text-white font-medium p-3 border border-white bg-black"
            type="text"
            placeholder="입력해주세요"
          />
        </div>
        <div className="text-white">
          <div className="flex flex-row gap-2 items-center align-middle">
            <p className="text-headline3 font-medium font-pre">연락처</p>
            <div className="text-headline3 text-secondary flex flex-col justify-center align-middle items-center">
              *
            </div>
          </div>
          <input
            className="w-full placeholder:text-white font-medium p-3 border border-white bg-black"
            type="text"
            placeholder="입력해주세요"
          />
        </div>
        <div className="text-white">
          <div className="flex flex-row gap-2 items-center align-middle">
            <p className="text-headline3 font-bold font-pre">제작 예산</p>
            <div className="text-headline3 text-secondary flex flex-col justify-center align-middle items-center">
              *
            </div>
          </div>
          <p className="font-pre text-lg  text-left  text-white opacity-70">
            정해진 예산이 없다면 &quot;없음&quot;으로 기재해 주세요.
          </p>
          <input
            className="w-full placeholder:text-white font-medium p-3 border border-white bg-black"
            type="text"
            placeholder="입력해주세요"
          />
        </div>
        <div className="text-white">
          <div className="flex flex-col text-left">
            <p className="text-headline3 font-bold font-pre">레퍼런스 링크</p>
            <p className="font-pre text-lg text-white opacity-70">
              참고할 수 있는 영상 링크 or 타이틀을 알려주세요.
            </p>
          </div>
          <input
            className="w-full placeholder:text-white font-medium p-3 border border-white bg-black"
            type="text"
            placeholder="입력해주세요"
          />
        </div>
        <div className="text-white">
          <div className="flex flex-row gap-2 items-center align-middle">
            <p className="text-headline3 font-medium font-pre">문의사항</p>
            <div className="text-headline3 text-secondary flex flex-col justify-center align-middle items-center">
              *
            </div>
          </div>
          <textarea className="w-full h-32 placeholder:text-white font-medium p-3 border border-white bg-black" />
        </div>
        <div className="flex flex-row justify-between">
          <div />
          <button
            className="cursor-pointer border border-primary rounded-2xl font-pre text-primary text-lg px-3 py-1 hover:bg-primary hover:text-black"
            type="button"
          >
            등록하기
          </button>
        </div>
      </section>
    </div>
  );
}
