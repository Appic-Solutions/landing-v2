import { cn } from "@/lib/utils";
import Image from "next/image";
import { ParkOutlineBridgeIcon } from "../icons";

export default function TokenomicsSection() {
  return (
    <section
      className={cn(
        "w-full max-w-[1200px] mx-auto mt-24 mb-32 px-6",
        "flex flex-col gap-y-14 xl:gap-y-28",
        "md:my-36 xl:my-44 xl:px-0"
      )}
    >
      <div
        className={cn(
          "w-full flex flex-col gap-y-16",
          "md:gap-y-14",
          "xl:gap-y-24"
        )}
      >
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
            Tokenomics
          </p>
          <p
            className={cn(
              "text-white text-sm leading-[18px] max-w-[293px]",
              "md:text-[18px] md:leading-[22px] md:max-w-[354px]",
              "xl:text-[26px] xl:leading-[31px] xl:max-w-[515px]"
            )}
          >
            Lorem ipsum dolor sit amet consectetur. Lectus elit at euismod.
          </p>
        </div>
      </div>

      <div
        className={cn(
          "grid items-center place-content-center justify-items-center gap-y-12 gap-x-12",
          "md:grid-cols-2 md:gap-y-16 xl:gap-y-0 xl:justify-items-start"
        )}
      >
        <div
          className={cn(
            "xl:col-span-2 xl:row-start-2 xl:gap-y-10 xl:mx-auto rounded-[40px]",
            "flex items-center justify-center bg-[linear-gradient(124.44deg,#4C4C4C_18.37%,rgba(57,57,57,_0.3)_70.34%)] p-0.5"
          )}
        >
          <div
            className={cn(
              "w-full flex flex-col items-center justify-center gap-y-8 rounded-[40px] py-10 max-w-[399px]",
              "bg-[linear-gradient(180deg,rgba(18,18,18,_0.8)_0%,rgba(33,33,33,_0.24)_100%),linear-gradient(0deg,rgba(255,255,255,_0.04),rgba(255,255,255,_0.04))]",
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

        <div
          className={cn(
            "flex flex-col items-center justify-center gap-y-12",
            "md:gap-y-8 md:items-start md:justify-normal",
            "xl:gap-y-12"
          )}
        >
          <p
            className={cn(
              "max-w-[317px] xl:max-w-[461px]",
              "text-lg text-white xl:text-[24px] xl:leading-[29px]"
            )}
          >
            Lorem ipsum dolor sit amet consectetur. Mattis sem tellus fames
            lectus arcu nec sit. Condimentum aliquet non convallis nulla et.
            Adipiscing et eget vivamus tellus massa consectetur nunc. Lobortis
            ullamcorper morbi iaculis volutpat.
          </p>
          <button
            className={cn(
              "w-[238px] h-[60px] text-white rounded-[20px]",
              "bg-[linear-gradient(90deg,#1C68F8_0%,#1753C5_71.5%,#113D92_100%),linear-gradient(318.8deg,rgba(255,255,255,0)_35.19%,rgba(255,255,255,0.3)_92.55%)]"
            )}
          >
            Try Swap
          </button>
        </div>

        <div
          className={cn(
            "grid gap-y-5",
            "md:grid-cols-2 md:gap-x-9 md:col-span-2 xl:col-span-1"
          )}
        >
          {Array.from({ length: 3 }).map((_, idx) => (
            <div
              key={idx}
              className={cn(
                "flex items-center justify-center p-0.5 rounded-[20px]",
                "bg-[linear-gradient(124.44deg,#4C4C4C_18.37%,rgba(57,57,57,_0.3)_70.34%)]",
                idx === 2 && "xl:col-start-2 xl:col-end-3"
              )}
            >
              <div
                className={cn(
                  "flex flex-col gap-y-5 w-full h-full px-5 py-4 rounded-[20px] text-white",
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
                  Lorem ipsum dolor sit amet consectetur. Lectus elit at euismod
                  interdum gravida.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
