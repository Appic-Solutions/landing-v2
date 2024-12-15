"use client";

import { useIsVisible } from "@/hooks/useIsVisible";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const MobileImage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref1 = useRef(null);
  const isVisible1 = useIsVisible(ref1);

  useEffect(() => {
    if (!isVisible && isVisible1) {
      setIsVisible(true);
    }
  }, [isVisible1, isVisible]);

  return (
    <div
      ref={ref1}
      className={cn(
        "-rotate-12 translate-x-16 flex items-center justify-center",
        "md:rotate-0 md:translate-x-0 xl:min-w-[342px] min-h-[730px] md:min-h-0",
        `transition-all ease-in duration-700 ${
          isVisible
            ? "opacity-100 delay-500 translate-y-0"
            : "opacity-0 translate-y-10"
        }`
      )}
    >
      <Image
        src={"/images/ornoments/iphone-13-pro.png"}
        alt=""
        width={342}
        height={692}
      />
    </div>
  );
};

export default MobileImage;
