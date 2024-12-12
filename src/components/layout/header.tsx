"use client"
import { cn } from "@/lib/utils";
import Image from "next/image";
import { ArrowUpRightIcon } from "../icons";
import Link from "next/link";
import { NAVBAR_ITEMS } from "@/constants/layout/navbar.contants";
import { usePathname } from "next/navigation";

export default function HeaderSection() {
  const path = usePathname()

  return (
    <header className={cn(
      "max-w-[1920px] mx-auto flex items-center justify-between p-6 fixed inset-x-0 z-50",
      "lg:grid lg:grid-cols-12"
    )}>

      {/* Logo */}
      <Image
        src={"/images/logo/logo.png"}
        alt=""
        width={42}
        height={34}
        className="md:w-[52px] md:h-[42px] lg:col-span-2"
      />

      {/* Navabr */}
      <ul
        className={cn(
          "fixed bottom-3.5 right-6 left-6 z-[99]",
          "border-[1.63px] border-white/30 text-white rounded-full backdrop-blur-[102px]",
          "bg-[radial-gradient(75.61%_136.07%_at_48.06%_0%,rgba(255,255,255,0.6)_0%,rgba(255,255,255,0)_100%)]",
          "grid grid-cols-4 items-center gap-x-1 py-1.5 px-3 h-[62px]",
          "lg:w-full lg:max-w-[596px] lg:mx-auto lg:static lg:col-span-8",
        )}
      >
        {
          NAVBAR_ITEMS.map((item, idx) => (
            <li
              key={idx}
              className={cn(
                "w-full flex items-center justify-center rounded-full h-[46px]",
                path === item.href &&
                "bg-[linear-gradient(81.4deg,#000000_-15.41%,#1D1D1D_113.98%)]",
                "hover:bg-[linear-gradient(81.4deg,rgba(0,0,0,0.2)_-15.41%,rgba(29,29,29,0.2)_113.98%)]",
                "*:flex *:items-center *:justify-center *:w-full *:h-full *:gap-x-1.5"
              )}>
              <Link
                href={item.href}
                className="flex items-center gap-x-1"
              >
                {item.Icon}
                <span className="hidden lg:flex text-sm font-bold">
                  {item.label}
                </span>
              </Link>
            </li>
          ))
        }
      </ul>

      <Link
        href=""
        className={cn(
          "text-white border-[1.5px] border-white/30 col-span-2 justify-self-end",
          "bg-[radial-gradient(75.61%_136.07%_at_48.06%_0%,rgba(255,255,255,0.6)_0%,rgba(255,255,255,0)_100%)]",
          "flex items-center justify-center gap-x-1 text-sm font-semibold h-12 rounded-full w-[160px]"
        )}
      >
        <ArrowUpRightIcon width={14} height={14} />
        Join our discord
      </Link>

    </header >
  )
}