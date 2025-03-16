import React, { useEffect, useState } from "react";
import { BUBBLE_ITEMS } from "../constants";

export default function Bubbles() {
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
      <div className="hidden absolute inset-0 z-[-1] lg:block">
        {BUBBLE_ITEMS.map((item, idx) => (
          <div key={idx}
            className="absolute rounded-full bg-[linear-gradient(322.44deg,rgba(17,61,146,_0.3)_14.48%,rgba(255,255,255,_0.3)_94.54%)] opacity-65 border border-white/15"
            style={{
              width: item.width,
              height: item.height,
              top: item.positionTop,
              bottom: item.positionBottom,
              right: item.positionRight,
              left: item.positionLeft,
              transform: `translate(
              ${calculateLimitedMovement(mousePosition.x - window.innerWidth / 2, idx + 1)}px,
              ${calculateLimitedMovement(mousePosition.y - window.innerHeight / 2, idx + 1)}px)`,
              transition: "transform 0.7s ease-out",
            }}
          />
        ))}
      </div>
    </>
  );
};