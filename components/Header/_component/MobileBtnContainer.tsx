"use client";

import { useRouter } from "next/navigation";
import React from "react";
import Image from "next/image";
import { LuPhoneCall } from "react-icons/lu";
import Button from "../../Button/Button";

export default function MobileBtnContainer() {
  const router = useRouter();
  const onClickMovePageBtn = (url: string) => {
    router.push(url);
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
            onClick={() => onClickMovePageBtn("/contact")}
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
            onClick={() => onClickMovePageBtn("/contact")}
            bg="bg-black"
            br="rounded-[18px]"
            borderColor="border-white"
            fontSize="text-body"
            lineHeight="leading-3"
            fontFamily="font-pre"
            fontWeight="font-medium"
          />
        </div>
        <div className="flex-1 flex flex-row items-center justify-end gap-5">
          <LuPhoneCall className="cursor-pointer w-5 h-5 text-gray" />
          <Image
            src="/emailBtn.svg"
            alt="메일버튼"
            width={24}
            height={24}
            className="cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}
