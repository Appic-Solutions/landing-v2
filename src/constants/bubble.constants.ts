export interface ShapeSize {
  width: string;
  height: string;
  positionTop?: string;
  positionBottom?: string;
  positionRight?: string;
  positionLeft?: string;
}

export const Bubble_Items: ShapeSize[] = [
  // left_top
  {
    width: "101px",
    height: "101px",
    positionTop: "25%",
    positionLeft: "5%",
  },
  // left_bottom
  {
    width: "131px",
    height: "131px",
    positionLeft: "8%",
    positionBottom: "20%",
  },
  // left_center
  {
    positionLeft: "30%",
    positionTop: "35%",
    width: "68px",
    height: "68px",
  },
  // right_top
  {
    positionRight: "29%",
    positionTop: "22%",
    width: "101px",
    height: "101px",
  },
  // right_center-first
  {
    positionRight: "0%",
    positionBottom: "25%",
    width: "239px",
    height: "239px",
  },
  // right_center-second
  {
    positionRight: "35%",
    positionBottom: "50%",
    width: "65px",
    height: "65px",
  },
  // right_bottom
  {
    positionRight: "30%",
    positionBottom: "15%",
    width: "101px",
    height: "101px",
  },
];
