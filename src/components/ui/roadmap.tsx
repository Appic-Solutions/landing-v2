import { cn } from "@/lib/utils";
import TimeLine from "./timeline";

export default function RoadmapSection() {
  return (
    <section
      id="Roadmap"
      className="scroll-mt-24 flex flex-col gap-y-14 xl:gap-y-40 lg:scroll-mt-32">
      <div
        className={cn(
          "w-full max-w-[1200px] mx-auto px-6",
          "flex flex-col items-center justify-center gap-y-2 text-center",
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
          Roadmap
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
      <TimeLine />
    </section>
  );
}
