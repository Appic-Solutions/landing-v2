"use client"
import { cn } from "@/libs/utils";
import { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { ROADMAP_ITEMS } from "../constants";

export default function Roadmap() {
    const [activeDot, setActiveDot] = useState<number>(1);

    const [sliderRef, instanceRef] = useKeenSlider({
        mode: "snap",
        slideChanged(e) {
            setActiveDot(e.track.details.rel);
        },
        initial: 1,
        slides: {
            origin: "center",
            perView: 2,
            spacing: 15,
        },
    });

    return (
        <section id="Roadmap" className="scroll-mt-24 flex flex-col gap-y-14 xl:gap-y-40 lg:scroll-mt-32">
            <div className={cn(
                "w-full max-w-[1200px] mx-auto px-6",
                "flex flex-col items-center justify-center gap-y-2 text-center",
                "md:gap-y-3 xl:items-start xl:gap-y-4 xl:text-left"
            )}>
                <p className={cn(
                    "text-[28px] leading-[30px] max-w-fit bg-clip-text text-transparent ",
                    "bg-[linear-gradient(90deg,#6E6E6E_0%,#FFFFFF_34.45%,#FFFFFF_51.67%,#6E6E6E_86.12%)]",
                    "md:text-[34px] md:leading-[37px] md:mx-auto xl:text-[49px] xl:leading-[54px] xl:mx-0"
                )}>
                    Roadmap
                </p>
                <p className="text-white text-sm leading-[26px] max-w-[293px] md:text-base md:max-w-[354px] xl:max-w-3xl">
                    Appic’s roadmap builds from an EVM-ICP bridge to a full cross-chain swap layer on ICP, targeting late 2025 completion. It includes ICP-to-EVM bridging, a Dex, and a swap router.
                </p>
            </div>


            {/* Desktop Version */}
            <div className="relative flex-col gap-y-28 xl:gap-y-44 hidden md:flex">
                <div className={cn(
                    "w-full max-w-[1100px] mx-auto",
                    "flex items-center justify-between",
                    "before:contents-[''] before:absolute before:inset-x-0 before:bg-white before:w-full before:h-px"
                )}>
                    {ROADMAP_ITEMS.map((item, idx) => (
                        <div key={idx}
                            className={cn(
                                "flex items-center justify-center gap-y-4 text-white text-[22px] font-bold leading-[28px] cursor-pointer z-10",
                                item.position === "top" ? "flex-col -translate-y-[22px]" : "flex-col-reverse translate-y-[22px]"
                            )}
                            onClick={() => {
                                setActiveDot(idx);
                                instanceRef.current?.moveToIdx(idx);
                            }}>
                            {item.label}
                            <span className={cn(
                                "min-w-6 min-h-6 max-w-6 max-h-6 border border-white rounded-full bg-black",
                                idx < activeDot && "bg-white",
                                activeDot === idx && "bg-[#3870DA] shadow-[0_0_20px_0_#2563eb]"
                            )} />
                        </div>
                    ))}
                </div>
                <div ref={sliderRef} className="keen-slider">
                    {ROADMAP_ITEMS.map((item, idx) => (
                        <div key={idx}
                            className={cn(
                                "keen-slider__slide",
                                "flex items-center justify-center bg-[linear-gradient(170deg,#4C4C4C_18.37%,rgba(57,57,57,_0.3)_70.34%)] p-0.5",
                                "xl:col-span-2 xl:row-start-2 xl:gap-y-10 xl:mx-auto rounded-[20px] text-white"
                            )}>
                            <div className={cn(
                                "absolute inset-0 w-[100px] h-[100px] rotate-45 animate-border-move-rotate",
                                "bg-[radial-gradient(#fff,#f1f5f9,_transparent)]"
                            )}
                                style={{ offsetPath: "rect(0% auto 100% auto)" }}
                            />
                            <div className={cn(
                                "w-full px-6 py-4 rounded-[20px] relative overflow-hidden h-full",
                                "bg-[linear-gradient(180deg,rgba(18,18,18,_1)_0%,rgba(33,33,33,_1)_100%),linear-gradient(0deg,rgba(255,255,255,_1),rgba(255,255,255,_1))]"
                            )}>
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

            {/* Mobile Version */}
            <div className="flex md:hidden flex-col gap-y-0 px-6">
                {ROADMAP_ITEMS.map((item, index) => (
                    <div key={index} className="flex w-full justify-start items-start gap-x-6">
                        <div className={cn(
                            "p-3 rounded-full flex items-center justify-center relative border border-white z-40",
                            index === 0 ? "bg-blue-600" : "bg-gray-300"
                        )} />
                        <div className={cn(
                            "flex flex-col gap-4 relative pb-6",
                            "after:content-[''] after:absolute after:w-[1px] after:h-full after:-left-[38px] after:bg-gray-300"
                        )}>
                            <p className="text-[22px] text-white font-bold">{item.label}</p>
                            <div className={cn(
                                "keen-slider__slide xl:col-span-2 xl:row-start-2 xl:gap-y-10 xl:mx-auto rounded-[20px] text-white",
                                "relative overflow-hidden flex items-center justify-center bg-[linear-gradient(170deg,#4C4C4C_18.37%,rgba(57,57,57,_0.3)_70.34%)] p-0.5"
                            )}>
                                <div className={cn(
                                    "absolute inset-0 w-[100px] h-[100px] rotate-45 animate-border-move-rotate",
                                    "bg-[radial-gradient(#fff,#f1f5f9,_transparent)]"
                                )}
                                    style={{ offsetPath: "rect(0% auto 100% auto)" }}
                                />
                                <div className={cn(
                                    "w-full px-6 py-4 rounded-[20px] relative overflow-hidden",
                                    "bg-[linear-gradient(180deg,rgba(18,18,18,_1)_0%,rgba(33,33,33,_1)_100%),linear-gradient(0deg,rgba(255,255,255,_1),rgba(255,255,255,_1))]"
                                )}>
                                    <div className="flex text-lg items-center gap-x-4 font-bold mb-2">
                                        <h3 className="text-white">{item.title}</h3>
                                    </div>
                                    <p className="font-normal text-sm text-white/80">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </section >
    );
}
