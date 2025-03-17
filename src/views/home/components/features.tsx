"use client";

import CustomCard from "@/components/ui/card";
import { cn } from "@/libs/utils";
import Image from "next/image";
import { KEY_FEATURES } from "../constants";
import { useEffect, useState } from "react";

export default function Features() {
  const [activeItem, setActiveItem] = useState<number>(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveItem((prev) => {
        if (prev === KEY_FEATURES.length) {
          return 1;
        }

        return prev + 1;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [activeItem]);

  return (
    <section
      id="Features"
      className={cn(
        "scroll-mt-24 overflow-clip w-full max-w-[1300px] mx-auto px-6",
        "flex flex-col items-center justify-center gap-y-28 gap-x-16",
        "lg:scroll-mt-32 xl:flex-row xl:items-end xl:px-0"
      )}
    >
      <div className="w-full flex flex-col gap-y-16 md:gap-y-14 xl:gap-y-24">
        <div
          className={cn(
            "w-full flex flex-col items-center justify-center gap-y-2 text-center",
            "md:gap-y-3 xl:items-start xl:gap-y-4 xl:text-left"
          )}
        >
          <p
            className={cn(
              "text-[28px] leading-[30px] max-w-fit bg-clip-text text-transparent ",
              "bg-[linear-gradient(90deg,#6E6E6E_0%,#FFFFFF_34.45%,#FFFFFF_51.67%,#6E6E6E_86.12%)]",
              "md:text-[34px] md:leading-[37px] md:mx-auto xl:text-[49px] xl:leading-[54px] xl:mx-0"
            )}
          >
            Key Features
          </p>
        </div>
        <div className="flex flex-col md:flex-row w-full gap-16 pb-4">
          <div className="md:col-span-7 grid gap-10 md:grid-cols-2 w-full md:w-[60%]">
            {KEY_FEATURES.map((item, idx) => (
              <CustomCard
                customOnClick={() => setActiveItem(idx + 1)}
                key={idx}
                label={item.label}
                description={item.desc}
                icon={item.icon}
                isActive={idx + 1 === activeItem}
                className="cursor-pointer"
              />
            ))}
          </div>
          <div>
            <div className=" relative w-[342px] h-[700px] z-10 overflow-hidden rounded-[50px] rotate-[-4deg] translate-x-12">
              <Image
                className="absolute z-10"
                src="/images/features/mobile-frame.png"
                alt="mobile-frame"
                fill
              />
              {KEY_FEATURES.map((item, idx) => (
                <div
                  key={idx}
                  className={cn(
                    "absolute top-0 left-0 w-full h-full flex items-center justify-center transition-all duration-500",
                    idx + 1 === activeItem
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-52"
                  )}
                >
                  <Image
                    src={item.screenshotPath!}
                    alt={item.label}
                    width={310}
                    height={672}
                    className="rounded-[40px]"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* <div
          className={cn(
            "-rotate-12 translate-x-16 flex items-center justify-center",
            "md:rotate-0 md:translate-x-0 xl:min-w-[342px] min-h-[730px] md:min-h-0"
          )}
        >
          <Image
            src={"/images/ornaments/iphone-13-pro.png"}
            alt=""
            width={342}
            height={692}
          />
        </div> */}
      </div>
    </section>
  );
}
