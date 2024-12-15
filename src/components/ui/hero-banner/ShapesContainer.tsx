"use client";

import dynamic from "next/dynamic";

const Shapes = dynamic(() => import("./Shapes"), {
  ssr: false,
});

export default function BubbleShapesSection() {
  return (
    <div className="hidden absolute inset-0 z-[-1] lg:block">
      <Shapes />
    </div>
  );
}
