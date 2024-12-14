import { cn } from "@/lib/utils";
import Image from "next/image";

export default function CustomersSection() {
  return (
    <section
      id="Customers"
      className={cn(
        "scroll-mt-24 w-full max-w-[1200px] mx-auto overflow-clip mt-24 mb-20 select-none",
        "md:grid-cols-3 md:mb-44 lg:scroll-mt-32"
      )}>

      <div className="w-[200%] animate-infinite-slider flex items-center justify-center gap-x-12">
        {Array.from({ length: 16 }).map((_, idx) => (
          <div
            key={idx}
            className={cn(
              "flex items-center justify-center relative min-w-[185px] min-h-[52px] grayscale duration-200",
              "xl:min-w-[309px] xl:min-h-[88px]",
            )}>
            <Image src={"/images/logo/customer-logo.png"} alt="" width={220} height={40} />
          </div>
        ))}
      </div>

    </section>
  )
}