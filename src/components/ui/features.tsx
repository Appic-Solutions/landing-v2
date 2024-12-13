import { cn } from "@/lib/utils";
import Image from "next/image";
import { ParkOutlineBridgeIcon } from "../icons";

export default function FeaturesSection() {
  return (
    <section
      id="Features"
      className={cn(
        "scroll-mt-24 overflow-clip w-full max-w-[1200px] mx-auto px-6",
        "flex flex-col items-center justify-center gap-y-28 gap-x-16",
        "lg:scroll-mt-32 xl:flex-row xl:items-end xl:px-0"
      )}>

      <div className={cn(
        "w-full flex flex-col gap-y-16",
        "md:gap-y-14",
        "xl:gap-y-24"
      )}>
        <div className={cn(
          "w-full flex flex-col items-center justify-center gap-y-2 text-center",
          "md:gap-y-3 xl:items-start xl:gap-y-4 xl:text-left"
        )}>
          <p className={cn(
            "text-[28px] leading-[30px] max-w-fit bg-clip-text text-transparent ",
            "bg-[linear-gradient(90deg,#6E6E6E_0%,#FFFFFF_34.45%,#FFFFFF_51.67%,#6E6E6E_86.12%)]",
            "md:text-[34px] md:leading-[37px] md:mx-auto xl:text-[49px] xl:leading-[54px] xl:mx-0"
          )}>
            Key Features
          </p>
          <p className={cn(
            "text-white text-sm leading-[18px] max-w-[293px]",
            "md:text-[18px] md:leading-[22px] md:max-w-[354px]",
            "xl:text-[26px] xl:leading-[31px] xl:max-w-[515px]"
          )}>
            Lorem ipsum dolor sit amet consectetur. Lectus elit at euismod.
          </p>
        </div>

        <div className={cn(
          "grid gap-9",
          "md:grid-cols-2"
        )}>
          {Array.from({ length: 6 }).map((_, idx) => (
            <div
              key={idx}
              className={cn(
                "flex items-center justify-center p-0.5 rounded-[20px]",
                "bg-[linear-gradient(124.44deg,#4C4C4C_18.37%,rgba(57,57,57,_0.3)_70.34%)]"
              )}
            >
              <div
                className={cn(
                  "flex flex-col gap-y-5 w-full h-full p-5 rounded-[20px] text-white",
                  "bg-[linear-gradient(180deg,rgba(18,18,18,_0.8)_0%,rgba(33,33,33,_0.24)_100%),linear-gradient(0deg,rgba(255,255,255,_0.08),rgba(255,255,255,_0.08))]"
                )}
              >
                <div className="flex items-center justify-between">
                  <p className="text-[18px] font-bold">Number Of {idx + 1}</p>
                  <span className="h-8 w-8 bg-white text-black rounded-full flex items-center justify-center">
                    <ParkOutlineBridgeIcon />
                  </span>
                </div>

                <p className="">
                  Lorem ipsum dolor sit amet consectetur. Lectus elit at euismod interdum gravida.
                </p>

              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={cn(
        "-rotate-12 translate-x-16 flex items-center justify-center",
        "md:rotate-0 md:translate-x-0 xl:min-w-[342px] min-h-[730px] md:min-h-0"
      )}>
        <Image src={"/images/ornoments/iphone-13-pro.png"} alt="" width={342} height={692} />
      </div>

    </section >
  )
}