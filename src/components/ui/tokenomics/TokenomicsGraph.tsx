"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { useIsVisible } from "@/hooks/useIsVisible";

const TokenomicsGraph = () => {
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
      className={cn(
        "flex items-center justify-center relative overflow-hidden rounded-[40px] text-white",

        "before:contents-[''] before:absolute before:top-1/2 before:w-[100px] before:h-[300px] before:z-0",
        "before:translate-x-0 before:translate-y-0 before:origin-top before:animate-border-rotate",
        "before:bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(102,102,102,0.75)_50%,rgba(255,255,255,0)_100%)]",

        "after:contents-[''] after:absolute after:top-1/2 after:w-[100px] after:h-[300px] after:z-0",
        "after:translate-x-0 after:translate-y-0 after:origin-top after:animate-[border-rotate_6s_linear_forwards_infinite]",
        "after:bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(102,102,102,0.75)_50%,rgba(255,255,255,0)_100%)]",

        "xl:col-span-2 xl:row-start-2 xl:gap-y-10 xl:mx-auto",
        `transition-opacity ease-in duration-700 ${
          isVisible ? "opacity-100 delay-50" : "opacity-0"
        }`
      )}
    >
      <div
        className={cn(
          "w-full flex flex-col items-center justify-center gap-y-8 rounded-[40px] py-10 max-w-[399px] z-10 m-0.5",
          "bg-[linear-gradient(180deg,rgba(18,18,18,1)_0%,rgba(33,33,33,1)_100%),linear-gradient(0deg,rgba(255,255,255,1),rgba(255,255,255,1))]",
          "xl:py-12"
        )}
      >
        <div className="px-16 xl:px-[70px]">
          <Image
            src={"/images/ornoments/cahrt.png"}
            alt=""
            width={257}
            height={257}
            className=""
          />
        </div>

        <p className="text-white/60 text-[18px] px-6 xl:px-8">
          Lorem ipsum dolor sit amet consectetur. Lectus elit at euismod
          interdum.
        </p>
      </div>
    </div>
  );
};

export default TokenomicsGraph;
