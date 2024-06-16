"use client";

import React from "react";
import Image from "next/image";
import Button from "../../Button/Button";

export default function MobileBtnContainer() {
  const onClickBtn = () => {
    // eslint-disable-next-line no-alert
    alert("버튼2 클릭");
  };
  return (
    <div className="flex flex-row border-t border-white">
      <div className="w-full flex flex-row justify-between mt-9 pr-5 pl-5">
        <div className="flex-1 flex flex-row gap-2">
          <Button
            width="w-24"
            height="h-8"
            buttonType="button"
            content="회사 소개서"
            onClick={onClickBtn}
            bg="bg-black"
            br="rounded-[18px]"
            borderColor="border-white"
            fontSize="text-body"
            lineHeight="leading-3"
            fontFamily="font-pre"
            fontWeight="font-medium"
          />
          <Button
            width="w-24"
            height="h-8"
            buttonType="button"
            content="견적 문의"
            onClick={onClickBtn}
            bg="bg-black"
            br="rounded-[18px]"
            borderColor="border-white"
            fontSize="text-body"
            lineHeight="leading-3"
            fontFamily="font-pre"
            fontWeight="font-medium"
          />
        </div>
        <div className="flex-1 flex flex-row justify-end gap-5">
          <Image src="/callBtn.svg" alt="전화버튼" width={24} height={24} />
          <Image src="/emailBtn.svg" alt="메일버튼" width={24} height={24} />
        </div>
      </div>
    </div>
  );
}
