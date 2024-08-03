import Image from "next/image";
import DeskTopBtnContainer from "@/components/Header/_component/DeskTopBtnContainer";
import DeskTopHeader from "@/components/Header/DeskTopHeader";
import { ServiceImagesDeskTop } from "@/data/ServiceImages";

export default function DeskTopService() {
  return (
    <div>
      <DeskTopHeader />
      <DeskTopBtnContainer />
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
                <div className="w-[40%] h-64 flex flex-col justify-center text-center items-center align-middle border border-white">
                  <p className="text-white text-[50px] font-bold">SERVICE</p>
                  <p className="text-white font-pre text-headline2 font-bold">
                    다양한 전문가 집단과 함께하고 있습니다.
                  </p>
                </div>
                <div className="relative w-[60%] h-64">
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
                <div className="relative w-[45%] h-64">
                  <Image
                    className="absolute inset-0 shadow-lg"
                    src="/contact01.svg"
                    alt="deskTopContact02.svg"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="w-[55%] h-64  flex flex-col justify-center gap-3 border border-white text-white text-center font-pre">
                  <p className="text-[25px] font-semibold">What Can We Do?</p>
                  <p className="text-body font-semibold">
                    할 수 있는 범위 내에서만 작업하기 때문에
                  </p>
                  <p className="text-body font-semibold">
                    변수 없는 작업이 가능합니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-1/2 mt-44 mx-auto grid grid-cols-3  grid-rows-2 gap-8 p-4">
        {ServiceImagesDeskTop &&
          ServiceImagesDeskTop.map((item) => (
            <div
              key={item.id}
              className="relative w-full h-full flex flex-col items-center"
            >
              <div>
                <Image
                  src={item.url}
                  alt={item.alt}
                  width={148}
                  height={148}
                  className="brightness-75 rounded-lg"
                />
              </div>
              <p className="font-pre text-lg text-primary font-semibold">
                {item.title}
              </p>
            </div>
          ))}
      </section>
      <section className="border border-white w-1/2 mt-56 mx-auto">
        <p className="text-primary text-[50px] font-roboto text-center">
          Process
        </p>
        <div className="flex flex-col gap-28">
          <div className="flex flex-row gap-2">
            <Image
              src="/deskTopServiceProcess01.svg"
              alt="deskTopServiceProcess01"
              width={467}
              height={292}
            />
            <div className="flex-1 flex flex-col gap-2 justify-center text-white font-pre font-medium">
              <p className="font-pre font-bold text-[28px] text-primary">
                STEP 01 - 구성
              </p>
              <p>
                제작 의뢰가 들어오면 영상 목적에 따라 레퍼런스 설정을 합니다.
              </p>
              <div>
                <p>예산과 일정 협의 후 미팅을 진행합니다.</p>
                <p>[필요시 온라인 미팅 대체]</p>
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-2">
            <div className="flex-1 flex flex-col gap-2 justify-center text-white text-end font-pre font-medium">
              <p className="font-pre font-bold text-[28px] text-primary">
                STEP 01 - 구성
              </p>
              <p>
                제작 의뢰가 들어오면 영상 목적에 따라 레퍼런스 설정을 합니다.
              </p>
              <div>
                <p>예산과 일정 협의 후 미팅을 진행합니다.</p>
                <p>[필요시 온라인 미팅 대체]</p>
              </div>
            </div>
            <Image
              src="/deskTopServiceProcess02.svg"
              alt="deskTopServiceProcess02"
              width={467}
              height={292}
            />
          </div>
          <div className="flex flex-row gap-2">
            <Image
              src="/deskTopServiceProcess03.svg"
              alt="deskTopServiceProcess03"
              width={467}
              height={292}
            />
            <div className="flex-1 flex flex-col gap-2 justify-center text-white font-pre font-medium">
              <p className="font-pre font-bold text-[28px] text-primary">
                STEP 01 - 구성
              </p>
              <p>
                제작 의뢰가 들어오면 영상 목적에 따라 레퍼런스 설정을 합니다.
              </p>
              <div>
                <p>예산과 일정 협의 후 미팅을 진행합니다.</p>
                <p>[필요시 온라인 미팅 대체]</p>
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-2">
            <div className="flex-1 flex flex-col gap-2 justify-center text-white text-end font-pre font-medium">
              <p className="font-pre font-bold text-[28px] text-primary">
                STEP 01 - 구성
              </p>
              <p>
                제작 의뢰가 들어오면 영상 목적에 따라 레퍼런스 설정을 합니다.
              </p>
              <div>
                <p>예산과 일정 협의 후 미팅을 진행합니다.</p>
                <p>[필요시 온라인 미팅 대체]</p>
              </div>
            </div>
            <Image
              src="/deskTopServiceProcess04.svg"
              alt="deskTopServiceProcess04"
              width={467}
              height={292}
            />
          </div>
        </div>
      </section>
      <section className="mt-72 mx-auto w-1/2  text-center">
        <div className="text-primary">
          <p className="font-roboto font-extrabold text-[50px]">Why With Us?</p>
          <p className="font-pre font-semibold text-headline3">
            수 많은 업체들 중, 왜 알비필름일까요?
          </p>
        </div>
        <div className="flex flex-col gap-8 mt-20">
          <div className="flex flex-row justify-center gap-6">
            <Image
              src="/deskTopServiceWhy01.svg"
              alt="deskTopServiceWhy01"
              width={239}
              height={239}
            />
            <div className="text-start flex flex-col justify-center text-white">
              <p>
                넓은 스펙트럼을 보유한 젊은 인력풀을 구성해 현장에 따른 유연한
                대처를 가능하게 합니다.
              </p>
              <p>
                대표가 모든 프로젝트에 총괄로 참여해 시작부터 끝까지 책임집니다.
              </p>
            </div>
          </div>
          <div className="flex flex-row justify-center gap-6">
            <div className="text-end flex flex-col justify-center text-white">
              <p>
                넓은 스펙트럼을 보유한 젊은 인력풀을 구성해 현장에 따른 유연한
                대처를 가능하게 합니다.
              </p>
              <p>
                대표가 모든 프로젝트에 총괄로 참여해 시작부터 끝까지 책임집니다.
              </p>
            </div>
            <Image
              src="/deskTopServiceWhy02.svg"
              alt="deskTopServiceWhy02"
              width={239}
              height={239}
            />
          </div>
          <div className=" flex flex-row justify-center gap-6">
            <Image
              src="/deskTopServiceWhy03.svg"
              alt="deskTopServiceWhy03"
              width={239}
              height={239}
            />
            <div className="text-start flex flex-col justify-center text-white">
              <p>
                넓은 스펙트럼을 보유한 젊은 인력풀을 구성해 현장에 따른 유연한
                대처를 가능하게 합니다.
              </p>
              <p>
                대표가 모든 프로젝트에 총괄로 참여해 시작부터 끝까지 책임집니다.
              </p>
            </div>
          </div>
          <div className="flex flex-row justify-center gap-6">
            <div className="text-end flex flex-col justify-center text-white">
              <p>
                넓은 스펙트럼을 보유한 젊은 인력풀을 구성해 현장에 따른 유연한
                대처를 가능하게 합니다.
              </p>
              <p>
                대표가 모든 프로젝트에 총괄로 참여해 시작부터 끝까지 책임집니다.
              </p>
            </div>
            <Image
              src="/deskTopServiceWhy04.svg"
              alt="deskTopServiceWhy04"
              width={239}
              height={239}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
