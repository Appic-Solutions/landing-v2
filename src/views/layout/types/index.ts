import { ReactNode } from "react";

export interface MenuNavItem {
  label: string;
  href: string;
  Icon: ReactNode;
}

export interface FooterNavItem {
  label: string;
  href: string | null;
}

export interface FooterNavItems {
  title: string;
  items: FooterNavItem[];
}
export interface SocialItem {
  icon: ReactNode;
  href: string;
}
