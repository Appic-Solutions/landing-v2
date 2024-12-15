import { cn } from "@/lib/utils";
import { ParkOutlineBridgeIcon } from "../../icons";
import CustomCard from "../../shared/card";
import MobileImage from "./MobileImage";

export default function FeaturesSection() {
  return (
    <section
      id="Features"
      className={cn(
        "scroll-mt-24 overflow-clip w-full max-w-[1200px] mx-auto px-6",
        "flex flex-col items-center justify-center gap-y-28 gap-x-16",
        "lg:scroll-mt-32 xl:flex-row xl:items-end xl:px-0"
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
            Key Features
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

        <div className={cn("grid gap-9", "md:grid-cols-2")}>
          {Array.from({ length: 6 }).map((_, idx) => (
            <CustomCard
              key={idx}
              title={`Number Of ${idx + 1}`}
              description={
                "Lorem ipsum dolor sit amet consectetur. Lectus elit at euismod interdum gravida."
              }
              icon={<ParkOutlineBridgeIcon />}
            />
          ))}
        </div>
      </div>

      <MobileImage />
    </section>
  );
}
