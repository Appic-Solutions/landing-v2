import { ArrowsUpDownIcon, BlockchainIcon, LockIcon, ParkOutlineBridgeIcon } from "@/components/icons"

export interface NavbarItem {
  label: string
  href: string
  Icon: React.ReactNode
}

export const NAVBAR_ITEMS: NavbarItem[] = [
  {
    label: "Features",
    href: "/",
    Icon: <ParkOutlineBridgeIcon width={24} height={24} className="min-w-5 min-h-5 lg:hidden" />,
  },
  {
    label: "Tokenomics",
    href: "/s",
    Icon: <BlockchainIcon width={24} height={24} className="min-w-5 min-h-5 lg:hidden" />,
  },
  {
    label: "Roadmap",
    href: "/s",
    Icon: <ArrowsUpDownIcon width={24} height={24} className="min-w-5 min-h-5 lg:hidden" />,
  },
  {
    label: "FAQs",
    href: "/s",
    Icon: <LockIcon width={24} height={24} className="min-w-5 min-h-5 lg:hidden" />,
  },
]