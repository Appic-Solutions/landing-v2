import { cn } from "@/lib/utils";
import Image from "next/image";

export default function CustomersSection() {
  return (
    <section className={cn(
      "w-full max-w-[1200px] mx-auto mt-12 mb-20",
      "grid items-center place-items-center gap-y-5",
      "md:grid-cols-3 md:mb-44"
    )}>

      {Array.from({ length: 3 }).map((_, idx) => (
        <div
          key={idx}
          className={cn(
            "flex items-center justify-center w-[185px] h-[52px]",
            "xl:w-[309px] xl:h-[88px]"
          )}>
          <Image src={"/images/logo/customer-logo.png"} alt="" width={220} height={40} />
        </div>
      ))}

    </section>
  )
}