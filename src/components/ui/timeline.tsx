"use client";

import { Test_Road_Data } from "@/constants/roadmap.constants";
import { cn } from "@/lib/utils";
import { useState } from "react";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const TimeLine = () => {
  const [activeDot, setActiveDot] = useState<number>(0);

  const [sliderRef, instanceRef] = useKeenSlider({
    mode: "snap",
    slideChanged(e) {
      setActiveDot(e.track.details.rel);
    },
    slides: {
      origin: "center",
      perView: 2,
      spacing: 15,
    },
  });

  return (
    <div className="relative flex flex-col gap-y-44">
      <div
        className={cn(
          "w-full max-w-[1100px] mx-auto",
          "flex items-center justify-between",
          "before:contents-[''] before:absolute before:inset-x-0 before:bg-white before:w-full before:h-px"
        )}
      >
        {Test_Road_Data.map((item, idx) => (
          <div
            key={idx}
            className={cn(
              "flex items-center justify-center gap-y-4 text-white text-[22px] font-bold leading-[28px] cursor-pointer",
              " z-10",
              item.position === "top"
                ? "flex-col -translate-y-[22px]"
                : "flex-col-reverse translate-y-[22px]"
            )}
            onClick={() => {
              setActiveDot(idx);
              instanceRef.current?.moveToIdx(idx);
            }}
          >
            {item.label}
            <span
              className={cn(
                "min-w-6 min-h-6 max-w-6 max-h-6 border border-white rounded-full bg-black",
                idx < activeDot && "bg-white",
                activeDot === idx && "bg-[#3870DA]"
              )}
            />
          </div>
        ))}
      </div>
      <div ref={sliderRef} className="keen-slider">
        {Test_Road_Data.map((item, idx) => (
          <div
            key={idx}
            className={cn(
              "keen-slider__slide xl:col-span-2 xl:row-start-2 xl:gap-y-10 xl:mx-auto rounded-[20px] text-white",
              "flex items-center justify-center bg-[linear-gradient(170deg,#4C4C4C_18.37%,rgba(57,57,57,_0.3)_70.34%)] p-0.5"
            )}
          >
            <div
              className={cn(
                "w-full px-6 py-4 rounded-[20px]",
                "bg-[linear-gradient(180deg,rgba(18,18,18,_0.9)_0%,rgba(33,33,33,_0.24)_100%),linear-gradient(0deg,rgba(255,255,255,_0.04),rgba(255,255,255,_0.04))]"
              )}
            >
              <div className="flex text-lg items-center gap-x-4 font-bold mb-2">
                <span className="text-[#3870DA]">{item.label}</span>
                <h3 className="text-white">{item.title}</h3>
              </div>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimeLine;
