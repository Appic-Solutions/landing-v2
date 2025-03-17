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
      )}
    >
      <div
        className={cn(" overflow-hidden bg-background outline")}
        style={{
          mask: "linear-gradient(90deg, transparent, white 20%, white 80%, transparent)",
          WebkitMask:
            "linear-gradient(90deg, transparent, white 20%, white 80%, transparent)",
        }}
      >
        <ul
          className={cn(
            "flex w-max flex-nowrap items-center gap-x-16 py-2 grayscale",
            "animate-infinite-scroll"
          )}
        >
          {CUSTOMERS_IMAGES.concat(CUSTOMERS_IMAGES).map((item, idx) => (
            <Image
              key={idx}
              src={item}
              width={200}
              height={100}
              alt=""
              className="transition-all ease-out max-h-16 object-contain"
              style={{
                filter: "drop-shadow(0 0 0px #ffffff)",
              }}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}
