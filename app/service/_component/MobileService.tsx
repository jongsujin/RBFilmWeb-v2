import Footer from "@/components/Footer/Footer";
import MobileHeader from "@/components/Header/MobileHeader";
import ServiceImages from "@/data/ServiceImages";
import Image from "next/image";

export default function MobileService() {
  return (
    <div>
      <section className="relative w-full mt-10">
        <MobileHeader />
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
                      index === 1 ? "border-primary bg-primary" : "border-black"
                    } rounded-2xl p-2 whitespace-nowrap`}
                  >
                    {item}
                  </button>
                ),
              )}
            </div>
            <div className="my-2 text-center font-pre">
              <p className="text-[55px] font-extrabold">Service</p>
              <p className="text-headline1 font-bold">제공 서비스</p>
            </div>
            <div className="w-[90%] mt-3">
              <div
                className="relative w-full"
                style={{ paddingBottom: "56.25%" }}
              >
                <div className="absolute inset-0">
                  <Image
                    className="brightness-50"
                    src="/service01.svg"
                    alt="service01.svg"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="absolute inset-0 grid grid-cols-3 grid-rows-2 gap-8 p-4">
                  {ServiceImages &&
                    ServiceImages.map((item) => (
                      <div
                        key={item.id}
                        className="relative w-full h-full flex flex-col items-center"
                      >
                        <div>
                          <Image
                            src={item.url}
                            alt={item.alt}
                            width={52}
                            height={52}
                            className="brightness-75 rounded-lg"
                          />
                        </div>
                        <p className="font-pre text-lg text-white font-semibold">
                          {item.title}
                        </p>
                      </div>
                    ))}
                </div>
              </div>
              <div className="text-center mt-4">
                <p className="font-roboto text-[40px] font-extrabold">
                  What Can We Do?
                </p>
                <p className="font-pre text-body font-semibold">
                  다양한 전문가 집단과 함께 하고 있습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-20">
        <div className="font-pre font-semibold text-body text-center text-white">
          <p>할 수 있는 범위 내에서만 작업하기 때문에</p>
          <p>변수 없는 작업이 가능합니다.</p>
        </div>
      </section>
      <section className="mt-16">
        <div className="relative w-full flex items-center justify-center">
          <div className="ml-2 flex-grow border-t border-primary" />
          <span className="mx-4 text-[35px] font-extrabold text-primary">
            Process
          </span>
          <div className="mr-2 flex-grow border-t border-primary" />
        </div>
      </section>
      <section className="w-[90%] mx-auto mt-16 flex flex-col gap-16">
        <div className="flex flex-row gap-3">
          <div className="w-36 h-36">
            <Image
              className="border border-white h-full w-full"
              src="/service01.svg"
              alt="service01.svg"
              width={145}
              height={145}
            />
          </div>
          <div className="flex-1 flex flex-col justify-center w-36 h-36 font-pre text-white">
            <p className="text-body text-primary font-bold ml-2">
              STEP 01 - 구성
            </p>
            <p className="text-lg font-medium mt-2">
              제작 의뢰가 들어오면 영상 목적에 따라
            </p>
            <p className="text-lg font-medium">레퍼런스 설정을 합니다.</p>
            <p className="text-lg font-medium mt-2">
              예산과 일정 협의 후 미팅을 진행합니다.
            </p>
            <p className="text-sm font-medium">[필요시 온라인 미팅 대체]</p>
          </div>
        </div>
        <div className="flex flex-row gap-3">
          <div className="w-36 h-36">
            <Image
              className="border border-white h-full w-full"
              src="/service01.svg"
              alt="service01.svg"
              width={145}
              height={145}
            />
          </div>
          <div className="flex-1 flex flex-col justify-center w-36 h-36 font-pre text-white">
            <p className="text-body text-primary font-bold ml-2">
              STEP 02 - 기획
            </p>
            <p className="text-lg font-medium mt-2">
              협의한 내용을 바탕으로 기획안 및
            </p>
            <p className="text-lg font-medium">촬영 일정, 스텝을 구성합니다.</p>
            <p className="text-lg font-medium">
              로케이션 섭외 및 드론 촬영의 경우
            </p>
            <p className="text-lg font-medium">
              허가를 진행합니다.
              <span className="text-sm font-medium">
                [필요시 온라인 미팅 대체]
              </span>
            </p>
          </div>
        </div>
        <div className="flex flex-row gap-3">
          <div className="w-36 h-36">
            <Image
              className="border border-white h-full w-full"
              src="/service01.svg"
              alt="service01.svg"
              width={145}
              height={145}
            />
          </div>
          <div className="flex-1 flex flex-col justify-center w-36 h-36 font-pre text-white">
            <p className="text-body text-primary font-bold ml-2">
              STEP 03 - 촬영
            </p>
            <p className="text-lg font-medium mt-2">
              촬영팀 구성 후 현장 촬영을 진행합니다.
            </p>
          </div>
        </div>
        <div className="flex flex-row gap-3">
          <div className="w-36 h-36">
            <Image
              className="border border-white h-full w-full"
              src="/service01.svg"
              alt="service01.svg"
              width={145}
              height={145}
            />
          </div>
          <div className="flex-1 flex flex-col justify-center w-36 h-36 font-pre text-white">
            <p className="text-body text-primary font-bold ml-2">
              STEP 04 - 1차 편집
            </p>
            <p className="text-lg font-medium mt-2">
              BGM에 대한 협의 후 컷 편집 및 색보정을
            </p>
            <p className="text-lg font-medium">
              포함한 1차 편집본을 전달해 드립니다.
            </p>
          </div>
        </div>
        <div className="flex flex-row gap-3">
          <div className="w-36 h-36">
            <Image
              className="border border-white h-full w-full"
              src="/service01.svg"
              alt="service01.svg"
              width={145}
              height={145}
            />
          </div>
          <div className="flex-1 flex flex-col justify-center w-36 h-36 font-pre text-white">
            <p className="text-body text-primary font-bold ml-2">
              STEP 05 - 2차 편집 및 완료
            </p>
            <p className="text-lg font-medium mt-2">
              피드백을 반영하여 후반 작업을 진행합니다.
            </p>
            <p className="text-sm font-medium">
              [모션 이펙트 / 자막 작업 / 음성 믹스 등]
            </p>
            <p className="text-lg font-medium mt-2">
              최종 컨펌 이후 완성본을 전달 드립니다.
            </p>
          </div>
        </div>
      </section>
      <section className="mt-52">
        <div className="text-center">
          <p className="font-extrabold text-[40px] text-primary">
            Why With Us?
          </p>
          <p className="mt-7 text-white font-pre font-bold text-headline1">
            수 많은 업체들 중, 왜 알비필름 일까요?
          </p>
        </div>
        <div className="flex flex-col gap-20 justify-center">
          <div className="flex flex-col items-center mt-8">
            <div className="relative w-[90%] h-32">
              <Image
                className="absolute inset-0 w-full h-full object-cover border border-primary brightness-50"
                src="/service01.svg"
                alt="service01.svg"
                layout="fill"
              />
              <div className="absolute text-right bottom-0 right-1">
                <p className="text-[38px] text-primary font-extrabold">01</p>
                <p className="font-pre font-semibold text-white text-headline3">
                  체계적이지만 유연함
                </p>
              </div>
            </div>
            <div className="w-[90%] mt-8 font-pre text-white text-m">
              <p>
                넓은 스펙트럼을 보유한 젊은 인력풀을 구성해 현장에 따른 유연한
                대처를{" "}
              </p>
              <p>가능하게 합니다.</p>
              <p>
                대표가 모든 프로젝트에 총괄로 참여해 시작부터 끝까지 책임집니다.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center mt-8">
            <div className="relative w-[90%] h-32">
              <Image
                className="absolute inset-0 w-full h-full object-cover border border-primary brightness-50"
                src="/service01.svg"
                alt="service01.svg"
                layout="fill"
              />
              <div className="absolute text-right bottom-0 right-1">
                <p className="text-[38px] text-primary font-extrabold">01</p>
                <p className="font-pre font-semibold text-white text-headline3">
                  체계적이지만 유연함
                </p>
              </div>
            </div>
            <div className="w-[90%] mt-8 font-pre text-white text-m">
              <p>
                넓은 스펙트럼을 보유한 젊은 인력풀을 구성해 현장에 따른 유연한
                대처를{" "}
              </p>
              <p>가능하게 합니다.</p>
              <p>
                대표가 모든 프로젝트에 총괄로 참여해 시작부터 끝까지 책임집니다.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center mt-8">
            <div className="relative w-[90%] h-32">
              <Image
                className="absolute inset-0 w-full h-full object-cover border border-primary brightness-50"
                src="/service01.svg"
                alt="service01.svg"
                layout="fill"
              />
              <div className="absolute text-right bottom-0 right-1">
                <p className="text-[38px] text-primary font-extrabold">01</p>
                <p className="font-pre font-semibold text-white text-headline3">
                  체계적이지만 유연함
                </p>
              </div>
            </div>
            <div className="w-[90%] mt-8 font-pre text-white text-m">
              <p>
                넓은 스펙트럼을 보유한 젊은 인력풀을 구성해 현장에 따른 유연한
                대처를{" "}
              </p>
              <p>가능하게 합니다.</p>
              <p>
                대표가 모든 프로젝트에 총괄로 참여해 시작부터 끝까지 책임집니다.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center mt-8">
            <div className="relative w-[90%] h-32">
              <Image
                className="absolute inset-0 w-full h-full object-cover border border-primary brightness-50"
                src="/service01.svg"
                alt="service01.svg"
                layout="fill"
              />
              <div className="absolute text-right bottom-0 right-1">
                <p className="text-[38px] text-primary font-extrabold">01</p>
                <p className="font-pre font-semibold text-white text-headline3">
                  체계적이지만 유연함
                </p>
              </div>
            </div>
            <div className="w-[90%] mt-8 font-pre text-white text-m">
              <p>
                넓은 스펙트럼을 보유한 젊은 인력풀을 구성해 현장에 따른 유연한
                대처를{" "}
              </p>
              <p>가능하게 합니다.</p>
              <p>
                대표가 모든 프로젝트에 총괄로 참여해 시작부터 끝까지 책임집니다.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-[90%] mx-auto mt-32">
        <div className="flex flex-col justify-center">
          <p className="text-primary font-extrabold text-[40px] text-center mb-4">
            Don&rsquo;t Worry
          </p>
          <div className="w-[90%] mx-auto flex flex-col justify-center gap-2 font-pre text-white text-left text-lg">
            <p>긴박한 촬영 일정 및 납품 일정 모두 가능한 24시간 상담!</p>
            <p>
              모델, 아나운서, 개그맨, 아티스트 등 예산에 맞는 출연진 대리 섭외
              가능!
            </p>
            <p>촬영 분위기에 맞는 실내외 스튜디오 및 로케이션 제안!</p>
            <p>사전 협의된 부분 내, 영상 및 사진 원본 제공!</p>
          </div>
        </div>
        <div className="border border-white rounded-2xl mt-11">
          <p className="font-pre text-white text-sm text-center p-2">
            모든 과정을 내부적으로 처리해 빠르고 합리적인 견적으로 제작이
            가능합니다.
          </p>
        </div>
      </section>
      <footer className="mt-48">
        <Footer />
      </footer>
    </div>
  );
}
