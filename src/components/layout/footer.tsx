import { Footer_Menu_Items, Social_Media_Items } from "@/constants/layout/footer.contants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function FooterSection() {
  return (
    <footer className={cn(
      "w-full max-w-[1200px] mx-auto px-6 pt-14 pb-28",
      "grid gap-y-6 gap-x-10",
      "md:grid-cols-2 lg:grid-cols-4 lg:pb-14 xl:px-0"
    )}>
      <div className="flex flex-col gap-y-6 xl:max-w-[285px]">
        <Image src={"/images/logo/logo.png"} alt="" width={52} height={43} />
        <p className="text-white max-w-80">
          Nam posuere accumsan porta. Integer id orci sed ante tincidunt tincidunt sit amet sed libero.
        </p>
        <div className="flex items-center gap-x-4">
          {Social_Media_Items.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              className={cn(
                "flex items-center justify-center min-w-9 min-h-9",
                "rounded-full bg-[#424242] text-[#3870DA]"
              )}>
              {item.icon}
            </Link>
          ))}
        </div>
      </div>

      {
        Footer_Menu_Items.map((item, idx) => (
          <div
            key={idx}
            className="grid gap-y-[18px]"
          >
            <p className="text-[#3870DA] font-bold text-[18px]">{item.title}</p>
            <ul className="flex flex-col gap-y-4 text-white">
              {item.items.map((link, ids) => (
                <li key={ids}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))
      }
    </footer >
  )
}