import React, { useEffect, useState } from "react";
import { Bubble_Items } from "@/constants/bubble.constants";
import { cn } from "@/lib/utils";

const Shapes = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
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
    const limitedValue = Math.min(Math.max(value / factor, -8), 8);
    return limitedValue;
  };
  return (
    <>
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
              // "animate-float"
            )}
            style={{
              width,
              height,
              top: positionTop,
              bottom: positionBottom,
              right: positionRight,
              left: positionLeft,
              transform: `translate(
                ${calculateLimitedMovement(
                  mousePosition.x - window.innerWidth / 2,
                  idx + 1
                )}px,
                ${calculateLimitedMovement(
                  mousePosition.y - window.innerHeight / 2,
                  idx + 1
                )}px
              )`,
              transition: "transform 0.7s ease-out",
            }}
          />
        )
      )}
    </>
  );
};

export default Shapes;
