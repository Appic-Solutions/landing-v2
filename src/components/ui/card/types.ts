import { HTMLAttributes, ReactNode } from "react";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  label: string;
  description: string;
  icon: ReactNode;
  className?: string;
  isActive?: boolean;
  customOnClick?: () => void;
}
