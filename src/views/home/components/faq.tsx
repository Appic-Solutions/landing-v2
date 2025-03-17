"use client";
import { cn } from "@/libs/utils";
import { useState } from "react";
import { FAQ_ITEMS } from "../constants";
import { ArrowRightIcon, ChevronDownIcon } from "@/components/icon";

export default function Faq() {
  const [activeFaq, setActiveFaq] = useState(0);
  const [activeFaqItem, setActiveFaqItem] = useState(0);

  return (
    <section
      id="FAQ"
      className={cn(
        "scroll-mt-24 w-full max-w-[1240px] mx-auto px-6 my-20 mt-32",
        "flex flex-col gap-y-16 gap-x-14 items-baseline",
        "md:mb-48 md:mt-36 lg:scroll-mt-64 lg:mt-64 lg:flex-row xl:px-0"
      )}
    >
      <div className="flex flex-col gap-y-10 xl:min-w-[480px] lg:gap-y-20 lg:max-h-fit">
        <div
          className={cn(
            "w-full flex flex-col justify-center gap-y-3",
            "md:gap-y-3 xl:items-start xl:gap-y-4 xl:text-left"
          )}
        >
          <div
            className={cn(
              "*:text-[28px] *:leading-[30px] *:max-w-fit *:bg-clip-text *:text-transparent",
              "*:bg-[linear-gradient(90deg,#6E6E6E_0%,#FFFFFF_34.45%,#FFFFFF_51.67%,#6E6E6E_86.12%)]",
              "*:md:text-[34px] *:md:leading-[37px] *:xl:text-[49px] *:xl:leading-[54px] *:xl:mx-0"
            )}
          >
            <p>FAQ</p>
          </div>
          <p
            className={cn(
              "text-white text-sm leading-[18px] max-w-[293px]",
              "md:text-[18px] md:leading-[22px] md:max-w-[375px]",
              "xl:text-[26px] xl:leading-[31px]"
            )}
          >
            Get answers to your questions about Appic’s innovative cross-chain
            solutions.
          </p>
        </div>

        {/* faq titles */}
        <div className="flex flex-col gap-6 flex-1 md:flex-row md:justify-between lg:flex-col">
          {FAQ_ITEMS.map((item, idx) => (
            <div
              key={idx}
              className={cn(
                "flex items-center justify-between gap-x-4 px-8 py-6 rounded-[24px] text-black cursor-pointer",
                "bg-[linear-gradient(90deg,rgba(217,217,217,_0.7)_0%,rgba(115,115,115,_0.9)_100%)]",
                "xl:text-[24px] xl:font-semibold xl:leading-[31px]",
                activeFaq === idx &&
                  "bg-[linear-gradient(159.81deg,_#1343A0_-34.87%,rgba(19,67,160,_0.5)_151.64%)] text-white font-bold"
              )}
              onClick={() => {
                setActiveFaq(idx);
                setActiveFaqItem(0);
              }}
            >
              {item.title}
              <ArrowRightIcon
                width={24}
                height={24}
                className="lg:min-h-8 lg:min-w-8"
              />
            </div>
          ))}
        </div>
      </div>

      {/* faq contents */}
      <div className="flex flex-col gap-y-10 flex-1">
        {FAQ_ITEMS[activeFaq].items.map((item, idx) => (
          <div
            key={idx}
            className={cn(
              "flex flex-col gap-y-5 px-6 py-6 bg-[#42424280] rounded-[10px]",
              "leading-[31px] text-white cursor-pointer duration-200",
              "md:text-[20px]",
              activeFaqItem === idx
                ? "min-h-fit bg-[#1343A0] backdrop-blur-[27px] drop-shadow-[0_3px_20px_5px_#651FFF33]"
                : "h-20 overflow-hidden"
            )}
            onClick={() => setActiveFaqItem(idx)}
          >
            <div className="flex items-center justify-between gap-x-1">
              {item.label}
              <ChevronDownIcon
                className={cn(
                  "duration-200",
                  activeFaqItem === idx ? "rotate-180" : "rotate-0"
                )}
              />
            </div>
            {item.content}
          </div>
        ))}
      </div>
    </section>
  );
}
