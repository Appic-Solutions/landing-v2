import { cn } from "@/lib/utils";
import { ParkOutlineBridgeIcon } from "../../icons";
import CustomCard from "../../shared/card";
import TokenomicsGraph from "./TokenomicsGraph";

export default function TokenomicsSection() {
  return (
    <section
      id="Tokenomics"
      className={cn(
        "scroll-mt-24 w-full max-w-[1200px] mx-auto mt-24 mb-32 px-6",
        "flex flex-col gap-y-14 xl:gap-y-28",
        "md:my-36 lg:scroll-mt-32 xl:my-44 xl:px-0"
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
        <TokenomicsGraph />
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
              "w-[238px] h-[60px] text-white rounded-[20px] duration-200",
              "bg-[linear-gradient(90deg,#1C68F8_0%,#1753C5_71.5%,#113D92_100%),linear-gradient(318.8deg,rgba(255,255,255,0)_35.19%,rgba(255,255,255,0.3)_92.55%)]",
              "hover:ring-2 hover:ring-[#113D92] hover:shadow-[0_0_20px_5px_#113D92]"
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
            <CustomCard
              key={idx}
              title={`Number Of ${idx + 1}`}
              description="Lorem ipsum dolor sit amet consectetur. Lectus elit at euismod interdum gravida."
              icon={<ParkOutlineBridgeIcon />}
              className={idx === 2 ? "xl:col-start-2 xl:col-end-3" : ""}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
