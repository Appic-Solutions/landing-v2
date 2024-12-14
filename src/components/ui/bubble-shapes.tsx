import { Bubble_Items } from "@/constants/bubble.constants";
import { cn } from "@/lib/utils";

export default function BubbleShapesSection() {
  return (
    <div className="hidden absolute inset-0 z-[-1] lg:block">
      {Bubble_Items.map(
        (
          {
            width,
            height,
            positionTop,
            positionBottom,
            positionRight,
            positionLeft,
          },
          idx
        ) => (
          <div
            key={idx}
            className={cn(
              "absolute rounded-full bg-[linear-gradient(322.44deg,rgba(17,61,146,_0.3)_14.48%,rgba(255,255,255,_0.3)_94.54%)] opacity-65 border border-white/15",
              "animate-float"
            )}
            style={{
              width,
              height,
              top: positionTop,
              bottom: positionBottom,
              right: positionRight,
              left: positionLeft,
            }}
          />
        )
      )}
    </div>
  )
}