"use client";

import { useIsVisible } from "@/hooks/useIsVisible";
import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";

interface Props {
  index: number;
  item: {
    label: string;
    title: string;
    description: string;
  };
}

const TimeLineCard = ({ index, item }: Props) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref1 = useRef(null);
  const isVisible1 = useIsVisible(ref1);

  useEffect(() => {
    if (!isVisible && isVisible1) {
      setIsVisible(true);
    }
  }, [isVisible1, isVisible]);

  return (
    <div
      ref={ref1}
      key={index}
      className={cn(
        "flex w-full justify-start items-start gap-x-6",
        `transition-all ease-in duration-700 ${
          isVisible
            ? "opacity-100 delay-500 translate-y-0"
            : "opacity-0 translate-y-10"
        }`
      )}
    >
      <div
        className={cn(
          "p-3 rounded-full flex items-center justify-center relative border border-white z-40",
          index === 0 ? "bg-blue-600" : "bg-gray-300"
        )}
      />
      <div
        className={cn(
          "flex flex-col gap-4 relative pb-6",
          "after:content-[''] after:absolute after:w-[1px] after:h-full after:-left-[38px] after:bg-gray-300"
        )}
      >
        <p className="text-[22px] text-white font-bold">{item.label}</p>
        <div
          className={cn(
            "keen-slider__slide xl:col-span-2 xl:row-start-2 xl:gap-y-10 xl:mx-auto rounded-[20px] text-white",
            "relative overflow-hidden flex items-center justify-center bg-[linear-gradient(170deg,#4C4C4C_18.37%,rgba(57,57,57,_0.3)_70.34%)] p-0.5"
          )}
        >
          <div
            className={cn(
              "absolute inset-0 w-[100px] h-[100px] rotate-45 animate-border-move-rotate",
              "bg-[radial-gradient(#fff,#f1f5f9,_transparent)]"
            )}
            style={{ offsetPath: "rect(0% auto 100% auto)" }}
          />
          <div
            className={cn(
              "w-full px-6 py-4 rounded-[20px] relative overflow-hidden",
              "bg-[linear-gradient(180deg,rgba(18,18,18,_1)_0%,rgba(33,33,33,_1)_100%),linear-gradient(0deg,rgba(255,255,255,_1),rgba(255,255,255,_1))]"
            )}
          >
            <div className="flex text-lg items-center gap-x-4 font-bold mb-2">
              <h3 className="text-white">{item.title}</h3>
            </div>
            <p className="font-normal text-sm text-white/80">
              {item.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeLineCard;
