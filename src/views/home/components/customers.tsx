import { cn } from "@/libs/utils";
import Image from "next/image";
import { CUSTOMERS_IMAGES } from "../constants";

export default function Customers() {
  return (
    <section
      id="Customers"
      className={cn(
        "scroll-mt-24 w-full max-w-[1200px] mx-auto overflow-clip mt-24 mb-20 select-none",
        "md:grid-cols-3 md:mb-44 lg:scroll-mt-32",
      )}>
      <div className="w-[200%] animate-infinite-slider flex items-center justify-center gap-x-32">
        {CUSTOMERS_IMAGES.map((img, idx) => (
          <Image
            key={idx}
            src={img}
            alt=""
            width={160}
            height={64}
            objectFit="cover"
          />
        ))}
      </div>
    </section>
  );
}
