"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { ArrowUpRightIcon } from "../icons";
import Link from "next/link";
import { NAVBAR_ITEMS } from "@/constants/layout/navbar.contants";
import { useEffect, useState } from "react";

export default function HeaderSection() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .map((entry) => entry.target.id);

        if (visibleSections.includes("HeroBanner") || visibleSections.includes("Customers")) {
          setActiveSection("#Features");
          history.replaceState(null, "", "#Features");
        } else if (visibleSections.length > 0) {
          const firstVisible = `#${visibleSections[0]}`;
          setActiveSection(firstVisible);
          history.replaceState(null, "", firstVisible);
        }
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));

    const sectionHash = window.location.hash;
    if (sectionHash) {
      setActiveSection(sectionHash);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={cn(
        "max-w-[1920px] mx-auto flex items-center justify-between p-6 fixed inset-x-0 z-50",
        "lg:grid lg:grid-cols-12"
      )}>

      {/* Logo */}
      <Link
        href={"#HeroBanner"}
        className="relative w-[42px] h-[34px] md:w-[52px] md:h-[42px] lg:col-span-2">
        <Image src={"/images/logo/logo.png"} alt="Logo" fill />
      </Link>

      {/* Navbar */}
      <ul
        className={cn(
          "fixed bottom-3.5 right-6 left-6 z-[99]",
          "border-[1.63px] border-white/30 text-white rounded-full backdrop-blur-[102px]",
          "bg-[radial-gradient(75.61%_136.07%_at_48.06%_0%,rgba(255,255,255,0.6)_0%,rgba(255,255,255,0)_100%)]",
          "grid grid-cols-4 items-center gap-x-1 py-1.5 px-3 h-[62px]",
          "lg:w-full lg:max-w-[596px] lg:mx-auto lg:static lg:col-span-8"
        )}>

        {NAVBAR_ITEMS.map((item, idx) => (
          <li
            key={idx}
            className={cn(
              "w-full flex items-center justify-center rounded-full h-[46px]",
              activeSection === item.href &&
              "bg-[linear-gradient(81.4deg,#000000_-15.41%,#1D1D1D_113.98%)]",
              "hover:bg-[linear-gradient(81.4deg,rgba(0,0,0,0.2)_-15.41%,rgba(29,29,29,0.2)_113.98%)]",
              "*:flex *:items-center *:justify-center *:w-full *:h-full *:gap-x-1.5"
            )}>
            <Link
              href={item.href}
              onClick={() => setActiveSection(item.href)}
              className="flex items-center gap-x-1">
              {item.Icon}
              <span className="hidden lg:flex text-sm font-bold">
                {item.label}
              </span>
            </Link>
          </li>
        ))}

      </ul>

      <Link
        href=""
        className={cn(
          "text-white border-[1.5px] border-white/30 col-span-2 justify-self-end backdrop-blur-[102px]",
          "bg-[radial-gradient(75.61%_136.07%_at_48.06%_0%,rgba(255,255,255,0.6)_0%,rgba(255,255,255,0)_100%)]",
          "flex items-center justify-center gap-x-1 text-sm font-semibold h-12 rounded-full w-[160px]"
        )}>
        <ArrowUpRightIcon width={14} height={14} />
        Join our discord
      </Link>

    </header>
  );
}
