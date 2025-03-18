import { cn } from "@/libs/utils";
import Image from "next/image";
import { CUSTOMERS_IMAGES } from "../constants";

export default function Customers() {
  return (
    <section
      id="Customers"
      className={cn(
        "scroll-mt-24 w-full max-w-[1200px] mx-auto overflow-clip mt-24 mb-20 select-none",
        "md:grid-cols-3 md:mb-44 lg:scroll-mt-32"
      )}>
      <div className={cn(" overflow-hidden bg-background outline")}
        style={{
          mask: "linear-gradient(90deg, transparent, white 20%, white 80%, transparent)",
          WebkitMask:
            "linear-gradient(90deg, transparent, white 20%, white 80%, transparent)",
        }}>
        <ul className="flex w-max flex-nowrap items-center gap-x-16 py-2 grayscale animate-infinite-scroll">
          {CUSTOMERS_IMAGES.concat(CUSTOMERS_IMAGES).map((item, idx) => (
            <li key={idx} className="flex items-center justify-center gap-x-4 text-[#B0B0B0] text-4xl font-rounded-mplus">
              <Image
                src={item.logo}
                alt={item.label}
                width={55}
                height={55}
              />
              {item.label}
            </li>
          ))}
        </ul>
      </div>
    </section >
  );
}
