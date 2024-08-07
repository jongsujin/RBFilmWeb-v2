"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function MobileTab() {
  const router = useRouter();
  const [currentTab, setCurrentTab] = useState<string>("HOME");

  const onClickTab = (tab: string) => {
    setCurrentTab(tab);
    router.push(`/${tab.toLowerCase()}`);
  };
  return (
    <div className="w-[90%] pt-10 flex flex-row items-center justify-around text-black font-pre text-sm sm:text-lg font-medium">
      {["HOME", "SERVICE", "PORTFOLIO", "PHOTO", "CONTACT"].map((item) => (
        <button
          key={item}
          type="button"
          className={`cursor-pointer border ${
            item === currentTab ? "border-primary bg-primary" : "border-black"
          } rounded-2xl p-2 whitespace-nowrap`}
          onClick={() => onClickTab(item)}
        >
          {item}
        </button>
      ))}
    </div>
  );
}
