import CustomCard from "@/components/ui/card";
import { cn } from "@/libs/utils";
import Image from "next/image";
import { KEY_FEATURES } from "../constants";

export default function Features() {
    return (
        <section
            id="Features"
            className={cn(
                "scroll-mt-24 overflow-clip w-full max-w-[1300px] mx-auto px-6",
                "flex flex-col items-center justify-center gap-y-28 gap-x-16",
                "lg:scroll-mt-32 xl:flex-row xl:items-end xl:px-0"
            )}>
            <div className="w-full flex flex-col gap-y-16 md:gap-y-14 xl:gap-y-24">
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
                </div>
                <div className="grid gap-10 md:grid-cols-2">
                    {KEY_FEATURES.map((item, idx) => (
                        <CustomCard
                            key={idx}
                            label={item.label}
                            description={item.desc}
                            icon={item.icon}
                            className="max-h-fit"
                        />
                    ))}
                </div>
                <div className={cn(
                    "-rotate-12 translate-x-16 flex items-center justify-center",
                    "md:rotate-0 md:translate-x-0 xl:min-w-[342px] min-h-[730px] md:min-h-0",
                )}>
                    <Image
                        src={"/images/ornaments/iphone-13-pro.png"}
                        alt=""
                        width={342}
                        height={692}
                    />
                </div>
            </div>
        </section>
    )
}