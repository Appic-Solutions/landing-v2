import { ReactNode } from "react";

export interface ShapeItem {
  width: string;
  height: string;
  positionTop?: string;
  positionBottom?: string;
  positionRight?: string;
  positionLeft?: string;
}

export type CustomerSlideItem = string;

export interface CardItem {
  label: string;
  desc: string;
  icon: ReactNode;
  screenshotPath?: string;
}

export interface ChartDataItem {
  name: string;
  value: number;
  fill: string;
}

export interface RoadmapItem {
  label: string;
  position: string;
  title: string;
  description: string;
}
