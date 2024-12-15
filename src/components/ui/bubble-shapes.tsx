"use client";

import { Bubble_Items } from "@/constants/bubble.constants";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export default function BubbleShapesSection() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Ensure the component is client-side
    setIsClient(true);

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      setMousePosition({ x: clientX, y: clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const calculateLimitedMovement = (value: number, factor: number): number => {
    const limitedValue = Math.min(Math.max(value / factor, -10), 10);
    return limitedValue;
  };

  if (!isClient) {
    // Prevent rendering until the component is hydrated
    return null;
  }

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
              "absolute rounded-full bg-[linear-gradient(322.44deg,rgba(17,61,146,_0.3)_14.48%,rgba(255,255,255,_0.3)_94.54%)] opacity-65 border border-white/15"
            )}
            style={{
              width,
              height,
              top: positionTop,
              bottom: positionBottom,
              right: positionRight,
              left: positionLeft,
              transform: isClient
                ? `translate(
                  ${calculateLimitedMovement(
                    mousePosition.x - window.innerWidth / 2,
                    idx + 1
                  )}px,
                  ${calculateLimitedMovement(
                    mousePosition.y - window.innerHeight / 2,
                    idx + 1
                  )}px
                )`
                : undefined,
              transition: "transform 1s ease-out",
            }}
          />
        )
      )}
    </div>
  );
}
