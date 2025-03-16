"use client"
import { cn } from "@/libs/utils";
import dynamic from "next/dynamic";
import Link from "next/link";

const Bubbles = dynamic(() => import("./bubbles"), {
    ssr: false,
});

export default function HeroBanner() {
    return (
        <section
            id="HeroBanner"
            className={cn(
                "relative h-[calc(100vh-100px)] w-full overflow-clip",
                "flex flex-col justify-center gap-y-12",
                "md:items-center md:gap-y-16 lg:h-screen lg:gap-y-9"
            )}>
            <Bubbles />
            <div className={cn(
                "text-[48px] leading-[58px] pl-9",
                "*:bg-clip-text *:text-transparent *:max-w-fit *:md:mx-auto",
                "md:text-[64px] md:leading-[71px] md:pl-0 lg:text-[69px] lg:leading-[76px]"
            )}>
                <p className="bg-[linear-gradient(90deg,#6E6E6E_0%,#FFFFFF_34.45%,#FFFFFF_51.67%,#6E6E6E_86.12%)]">
                    Discover
                </p>
                <p className="bg-[linear-gradient(90deg,#6E6E6E_0%,#FFFFFF_34.45%,#FFFFFF_51.67%,#6E6E6E_86.12%)]">
                    Appic Crosschain Dex
                </p>
                <svg viewBox="0 0 345 90" className="flex items-center justify-end max-w-fit w-[300px] md:w-96">
                    <text
                        x="50%"
                        y="50%"
                        dy=".35em"
                        textAnchor="middle"
                        className="animate-text-stroke text-[64px]"
                        stroke="url(#textGradient)"
                        fill="none"
                        strokeWidth="2"
                    >
                        Built On ICP
                    </text>
                </svg>
            </div>

            <div className={cn(
                "flex flex-col items-center justify-center gap-y-6 gap-x-7 text-sm font-medium text-white",
                "sm:flex-row md:text-base",
                "*:h-12 *:w-[157px] *:rounded-[16px] *:backdrop-blur-[30px] *:md:h-[60px] *:md:w-[191px] *:md:rounded-[20px] *:duration-200"
            )}>
                <div className="bg-[linear-gradient(124.44deg,#4C4C4C_18.37%,rgba(57,57,57,0.3)_70.34%)] flex items-center justify-center">
                    <Link
                        href="https://www.figma.com/slides/3qkLMZLL3uYDNMFTrp2SPk/Appic-Pitch-Deck?node-id=1-1078&t=PEDS7qjRVZrJFA8r-0"
                        target="_blank"
                        className={cn(
                            "h-[46px] w-[155px] rounded-[16px] duration-200 flex items-center justify-center",
                            "bg-[linear-gradient(50deg,rgba(5,5,5,1)_0%,rgba(10,10,10,0.7)_100%)]",
                            "md:h-[58px] md:w-[189px] md:rounded-[20px]",
                            "hover:ring-2 hover:ring-[rgba(57,57,57,0.3)] hover:shadow-[0_0_20px_5px_rgba(57,57,57,0.3)]"
                        )}>
                        Learn More
                    </Link>
                </div>
                <Link
                    href="https://app.appicdao.com/bridge"
                    target="_blank"
                    className={cn(
                        "flex items-center justify-center",
                        "bg-[linear-gradient(90deg,#1C68F8_0%,#1753C5_71.5%,#113D92_100%),linear-gradient(318.8deg,rgba(255,255,255,0)_35.19%,rgba(255,255,255,0.3)_92.55%)]",
                        "hover:ring-2 hover:ring-[#113D92] hover:shadow-[0_0_20px_5px_#113D92]"
                    )}>
                    Launch App
                </Link>
            </div>

            <Link
                href={"#Customers"}
                className="flex items-center justify-center gap-x-2 text-white absolute inset-x-0 bottom-0 lg:bottom-12"
            >
                <div className="text-xs md:text-base font-medium">
                    <p>Scroll</p>
                    <p>Down</p>
                </div>
                <div className={cn(
                    "flex items-center justify-center flex-col w-11 h-11",
                    "border-2 border-white rounded-full md:w-[60px] md:h-[60px]",
                    "*:block *:w-2 *:h-2 *:border-b-2 *:border-r-2 *:border-white *:rotate-45 md:*:w-3 md:*:h-3",
                    "*:animate-scroll-button-effect-animate"
                )}>
                    <span></span>
                    <span style={{ animationDelay: "0.2s" }}></span>
                    <span style={{ animationDelay: "0.4s" }}></span>
                </div>
            </Link>
        </section>
    )
}