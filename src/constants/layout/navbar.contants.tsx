import { ArrowsUpDownIcon, BlockchainIcon, LockIcon, ParkOutlineBridgeIcon } from "@/components/icons"

export interface NavbarItem {
  label: string
  href: string
  Icon: React.ReactNode
}

export const NAVBAR_ITEMS: NavbarItem[] = [
  {
    label: "Features",
    href: "#Features",
    Icon: <ParkOutlineBridgeIcon width={24} height={24} className="min-w-5 min-h-5 lg:hidden" />,
  },
  {
    label: "Tokenomics",
    href: "#Tokenomics",
    Icon: <BlockchainIcon width={24} height={24} className="min-w-5 min-h-5 lg:hidden" />,
  },
  {
    label: "Roadmap",
    href: "#Roadmap",
    Icon: <ArrowsUpDownIcon width={24} height={24} className="min-w-5 min-h-5 lg:hidden" />,
  },
  {
    label: "FAQs",
    href: "#FAQs",
    Icon: <LockIcon width={24} height={24} className="min-w-5 min-h-5 lg:hidden" />,
  },
]