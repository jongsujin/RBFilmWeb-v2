import MobileHeader from "@/components/Header/MobileHeader";
import Image from "next/image";

export default function MobileContact() {
  return (
    <div>
      <MobileHeader />
      <section className="relative w-full mt-10">
        <div className="w-full h-auto relative">
          <Image
            src="/bg.svg"
            alt="background"
            layout="responsive"
            width={100}
            height={50}
            objectFit="cover"
          />
          <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-start items-center">
            <div className="w-[90%] pt-10 flex flex-row items-center justify-around text-black font-pre text-sm sm:text-lg font-medium">
              {["Home", "SERVICE", "PORTFOLIO", "PHOTO", "CONTACT"].map(
                (item, index) => (
                  <button
                    key={item}
                    type="button"
                    className={`border ${
                      index === 4 ? "border-primary bg-primary" : "border-black"
                    } rounded-2xl p-2 whitespace-nowrap`}
                  >
                    {item}
                  </button>
                ),
              )}
            </div>
            <div className="mt-2 text-center font-pre">
              <p className="text-[55px] font-extrabold">Contact</p>
              <p className="text-headline1 font-bold">견적 문의</p>
            </div>
            <div className="w-[90%] mt-3">
              <div
                className="relative w-full"
                style={{ paddingBottom: "56.25%" }}
              >
                <div className="absolute inset-0">
                  <Image
                    src="/contact01.svg"
                    alt="contact01.svg"
                    layout="fill"
                    objectFit="cover"
                  />
                  <div className="absolute bottom-2 right-4 text-left text-white">
                    <p className="font-roboto text-headline3 font-bold">
                      궁금한 것이 있으신가요?
                    </p>
                    <p className="text-m font-medium">
                      24시간 내로 회신드립니다.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <p className="text-[26px] font-roboto font-bold">
                    OPENINE TIME
                  </p>
                  <div className="border border-t-white w-1/2" />
                  <div className="font-pre text-m font-bold">
                    <p>Monday ~ Friday : 00am ~ 24pm</p>
                    <p>Weekend: Online Consultation</p>
                  </div>
                </div>
                <div className="text-end">
                  <p className="text-[26px] font-roboto font-bold ">
                    PHONE NUMBER
                  </p>
                  <div className="flex flex-row justify-between">
                    <div />
                    <div className="border border-t-white w-1/2" />
                  </div>
                  <p className="font-pre text-m font-bold">
                    TEL: +10 7712 2492
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="w-[90%] mt-24 mx-auto mb-20 flex flex-col gap-5">
          <div className="text-white">
            <div className="flex flex-row gap-2 items-center align-middle">
              <p className="text-headline3 font-bold font-pre">
                업체(단체명) or 성함
              </p>
              <div className="text-headline3 text-secondary flex flex-col justify-center align-middle items-center">
                *
              </div>
            </div>
            <input
              className="input-with-bg w-full placeholder:text-black font-bold p-3"
              type="text"
              placeholder="입력해주세요"
            />
          </div>
          <div className="text-white">
            <div className="flex flex-row gap-2 items-center align-middle">
              <p className="text-headline3 font-bold font-pre">이메일</p>
              <div className="text-headline3 text-secondary flex flex-col justify-center align-middle items-center">
                *
              </div>
            </div>
            <input
              className="input-with-bg w-full placeholder:text-black font-bold p-3"
              type="text"
              placeholder="입력해주세요"
            />
          </div>
          <div className="text-white">
            <div className="flex flex-row gap-2 items-center align-middle">
              <p className="text-headline3 font-bold font-pre">연락처</p>
              <div className="text-headline3 text-secondary flex flex-col justify-center align-middle items-center">
                *
              </div>
            </div>
            <input
              className="input-with-bg w-full placeholder:text-black font-bold p-3"
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
            <p className="font-pre text-lg text-white opacity-70">
              정해진 예산이 없다면 &quot;없음&quot;으로 기재해 주세요.
            </p>
            <input
              className="input-with-bg w-full placeholder:text-black font-bold p-3"
              type="text"
              placeholder="입력해주세요"
            />
          </div>
          <div className="text-white">
            <div className="flex flex-col">
              <p className="text-headline3 font-bold font-pre">레퍼런스 링크</p>
              <p className="font-pre text-lg text-white opacity-70">
                참고할 수 있는 영상 링크 or 타이틀을 알려주세요.
              </p>
            </div>
            <input
              className="input-with-bg w-full placeholder:text-black font-bold p-3"
              type="text"
              placeholder="입력해주세요"
            />
          </div>
          <div className="text-white">
            <div className="flex flex-row gap-2 items-center align-middle">
              <p className="text-headline3 font-bold font-pre">문의 사항</p>
              <div className="text-headline3 text-secondary flex flex-col justify-center align-middle items-center">
                *
              </div>
            </div>
            <input
              className="input-with-bg w-full placeholder:text-black font-bold p-3"
              type="text"
              placeholder="입력해주세요"
            />
          </div>
          <div className="flex flex-row justify-between">
            <div />
            <button
              className="cursor-pointer border border-primary rounded-2xl font-pre text-white text-lg px-3 py-1"
              type="button"
            >
              등록하기
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
