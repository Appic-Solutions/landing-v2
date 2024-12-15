import { Test_Road_Data } from "@/constants/roadmap.constants";
import TimeLineCard from "./TimeLineCard";
import React from "react";

const MobileTimeLine = () => {
  return (
    <div className="flex md:hidden flex-col gap-y-0 px-6">
      {Test_Road_Data.map((item, index) => (
        <TimeLineCard key={index} index={index} item={item} />
      ))}
    </div>
  );
};

export default MobileTimeLine;
