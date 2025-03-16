import Image from "next/image";
import Link from "next/link";
import { FOOTER_NAV_ITEMS, SOCIAL_ITEMS } from "../constants";
import { cn } from "@/libs/utils";

export default function FooterSection() {
  return (
    <footer className={cn(
      "w-full max-w-[1200px] mx-auto px-6 pt-14 pb-28",
      "grid gap-y-6 gap-x-10",
      "md:grid-cols-2 lg:grid-cols-3 lg:pb-14 xl:px-0"
    )}>
      <div className="flex flex-col gap-y-6 xl:max-w-[285px]">
        <Image src={"/images/logo/logo.png"} alt="" width={52} height={43} />
        <p className="text-white max-w-80 flex items-center gap-x-2 text-sm">
          POWERED BY ICP
          <Image src="/images/ornaments/icp.svg" alt="" width={150} height={40} />
        </p>
        <div className="flex items-center gap-x-4">
          {SOCIAL_ITEMS.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              className="flex items-center justify-center min-w-9 min-h-9">
              <Image src={item.img} alt="" width={32} height={32} />
            </Link>
          ))}
        </div>
      </div>
      {FOOTER_NAV_ITEMS.map((item, idx) => (
        <div key={idx} className="grid gap-y-[18px]">
          <p className="text-[#3870DA] font-bold text-[18px]">{item.title}</p>
          <ul className="flex flex-col gap-y-4 text-white">
            {item.items.map((link, ids) => (
              <li key={ids}>
                {link.href ? (
                  <Link href={link.href} className="duration-150 hover:opacity-80">
                    {link.label}
                  </Link>
                ) : (
                  link.label
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </footer>
  )
}