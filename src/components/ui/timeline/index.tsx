"use client";

import { useState } from "react";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import DesktopTimeLine from "./DesktopTimeLine";
import MobileTimeLine from "./MobileTimeLine";

const TimeLine = () => {
  const [activeDot, setActiveDot] = useState<number>(1);

  const [sliderRef, instanceRef] = useKeenSlider({
    mode: "snap",
    slideChanged(e) {
      setActiveDot(e.track.details.rel);
    },
    initial: 1,
    slides: {
      origin: "center",
      perView: 2,
      spacing: 15,
    },
  });

  return (
    <>
      <DesktopTimeLine
        activeDot={activeDot}
        setActiveDot={setActiveDot}
        instanceRef={instanceRef}
        sliderRef={sliderRef}
      />
      <MobileTimeLine />
    </>
  );
};

export default TimeLine;
