"use client"
import { cn } from "@/libs/utils";
import Link from "next/link";
import { TOKENOMICS_ITEMS } from "../constants";
import CustomCard from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/common/chart";
import { Pie, PieChart } from "recharts";
import { CHART_CONFIG, CHART_DATA } from "../constants";

export default function Tokenomics() {
    return (
        <section
            id="Tokenomics"
            className={cn(
                "scroll-mt-24 w-full max-w-[1200px] mx-auto mt-24 mb-32 px-6",
                "flex flex-col gap-y-14 xl:gap-y-28",
                "md:my-36 lg:scroll-mt-32 xl:my-44 xl:px-0"
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
                        Tokenomics
                    </p>
                    <p className={cn(
                        "text-white text-sm leading-[18px] max-w-[293px]",
                        "md:text-[18px] md:leading-[22px] md:max-w-[354px]",
                        "xl:text-[26px] xl:leading-[31px] xl:max-w-[515px]"
                    )}>
                        Appic token can be staked for rewards, used for voting on Governance, applied to cover transaction fees, or to earn liquidity incentives.
                    </p>
                </div>
            </div>
            <div className={cn(
                "grid items-center place-content-center justify-items-center gap-y-12 gap-x-12",
                "md:grid-cols-2 md:items-start md:gap-y-16 xl:gap-y-0 xl:justify-items-start"
            )}>
                <div className={cn(
                    "flex items-center justify-center relative overflow-hidden rounded-[40px] text-white",

                    "before:contents-[''] before:absolute before:top-1/2 before:w-[100px] before:h-[300px] before:z-0",
                    "before:translate-x-0 before:translate-y-0 before:origin-top before:animate-border-rotate",
                    "before:bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(102,102,102,0.75)_50%,rgba(255,255,255,0)_100%)]",

                    "after:contents-[''] after:absolute after:top-1/2 after:w-[100px] after:h-[300px] after:z-0",
                    "after:translate-x-0 after:translate-y-0 after:origin-top after:animate-[border-rotate_6s_linear_forwards_infinite]",
                    "after:bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(102,102,102,0.75)_50%,rgba(255,255,255,0)_100%)]",

                    "xl:col-span-2 xl:row-start-2 xl:gap-y-10 xl:mx-auto",
                )}>
                    <div className={cn(
                        "w-full flex flex-col items-center justify-center gap-y-8 rounded-[40px] py-10 max-w-[399px] z-10 m-0.5",
                        "bg-[linear-gradient(180deg,rgba(18,18,18,1)_0%,rgba(33,33,33,1)_100%),linear-gradient(0deg,rgba(255,255,255,1),rgba(255,255,255,1))]",
                        "px-4 xl:py-12"
                    )}>
                        <div className="sm:px-4 xl:px-12">
                            <ChartContainer config={CHART_CONFIG} className="mx-auto aspect-square h-[320px]">
                                <PieChart>
                                    <ChartTooltip
                                        cursor={false}
                                        content={<ChartTooltipContent hideLabel className="bg-white text-black" />}
                                    />
                                    <Pie
                                        data={CHART_DATA}
                                        dataKey="value"
                                        nameKey="name"
                                        innerRadius={60}
                                        width={320}
                                        height={320}
                                    />
                                </PieChart>
                            </ChartContainer>
                        </div>
                    </div>
                </div>
                <div className={cn(
                    "flex flex-col items-center justify-center gap-y-12",
                    "md:gap-y-8 md:items-start md:justify-normal",
                    "xl:gap-y-12"
                )}>
                    <p className={cn(
                        "max-w-[317px] xl:max-w-[461px]",
                        "text-lg text-white xl:text-[24px] xl:leading-[29px]"
                    )}>
                        Early investors have the opportunity to purchase Appic tokens at a discounted rate. To take advantage of this exclusive offer and join the Appic ecosystem, get in touch with us using the button below.
                    </p>
                    <Link
                        href="mailto:vibes@appicdao.com"
                        className={cn(
                            "flex items-center justify-center",
                            "w-[238px] h-[60px] text-white rounded-[20px] duration-200",
                            "bg-[linear-gradient(90deg,#1C68F8_0%,#1753C5_71.5%,#113D92_100%),linear-gradient(318.8deg,rgba(255,255,255,0)_35.19%,rgba(255,255,255,0.3)_92.55%)]",
                            "hover:ring-2 hover:ring-[#113D92] hover:shadow-[0_0_20px_5px_#113D92]"
                        )}>
                        Get in Touch
                    </Link>
                </div>

                <div className={cn(
                    "grid gap-y-5",
                    "md:grid-cols-2 md:gap-x-9 md:col-span-2 xl:col-span-1"
                )}>
                    {TOKENOMICS_ITEMS.map((item, idx) => (
                        <CustomCard
                            key={idx}
                            label={item.label}
                            description={item.desc}
                            icon={item.icon}
                            className={idx === 2 ? "xl:col-start-2 xl:col-end-3" : ""}
                        />
                    ))}
                </div>
            </div>
        </section >
    )
}