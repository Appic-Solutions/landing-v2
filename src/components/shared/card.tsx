import { cn } from "@/lib/utils";
import { HTMLAttributes, ReactNode } from "react";

export default function CustomCard({
  title,
  description,
  icon,
  className,
  ...props
}: {
  title: string
  description: string
  icon: ReactNode
  className?: string
} & HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "flex items-center justify-center relative overflow-hidden rounded-[20px] text-white",

        "before:contents-[''] before:absolute before:top-1/2 before:w-[100px] before:h-[300px] before:z-0",
        "before:translate-x-0 before:translate-y-0 before:origin-top before:animate-border-rotate",
        "before:bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(102,102,102,0.75)_50%,rgba(255,255,255,0)_100%)]",
        className
      )}
      {...props}
    >
      <div
        className={cn(
          "flex flex-col gap-y-5 relative z-10 rounded-[20px] p-6 m-0.5",
          "bg-[linear-gradient(180deg,rgba(18,18,18,1)_0%,rgba(33,33,33,1)_100%),linear-gradient(0deg,rgba(255,255,255,1),rgba(255,255,255,1))]"
        )}
      >
        <div className="flex items-center justify-between">
          <p className="text-[18px] font-bold">{title}</p>
          <span className="h-8 w-8 bg-white text-black rounded-full flex items-center justify-center">
            {icon}
          </span>
        </div>

        {description}

      </div>
    </div>
  )
}