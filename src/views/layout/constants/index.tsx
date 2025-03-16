import { ArrowsUpDownIcon, BlockchainIcon, ParkOutlineBridgeIcon, QuestionMarkCircleIcon } from "@/components/icon";
import { FooterNavItems, MenuNavItem } from "../types"

export const NAVBAR_ITEMS: MenuNavItem[] = [
  {
    label: "Features",
    href: "#Features",
    Icon: <ParkOutlineBridgeIcon className="min-w-5 min-h-5 lg:hidden" />,
  },
  {
    label: "Tokenomics",
    href: "#Tokenomics",
    Icon: <BlockchainIcon className="min-w-5 min-h-5 lg:hidden" />,
  },
  {
    label: "Roadmap",
    href: "#Roadmap",
    Icon: <ArrowsUpDownIcon className="min-w-5 min-h-5 lg:hidden" />,
  },
  {
    label: "FAQ",
    href: "#FAQ",
    Icon: <QuestionMarkCircleIcon className="min-w-5 min-h-5 lg:hidden" />,
  },
]


export const FOOTER_NAV_ITEMS: FooterNavItems[] = [
  {
    title: "Solutions",
    items: [
      { label: "Bridge (live)", href: "https://app.appicdao.com/bridge" },
      { label: "Swap (coming soon)", href: null },
      { label: "Pools (coming soon)", href: null },
      { label: "Aenean facilisis", href: "https://app.appicdao.com/advanced" },
    ],
  },
  {
    title: "Resources",
    items: [
      { label: "Appic Docs (coming soon)", href: null },
      { label: "Appic SDK (coming soon)", href: null },
      {
        label: "Investor Deck",
        href: "https://www.figma.com/slides/3qkLMZLL3uYDNMFTrp2SPk/Appic-Pitch-Deck?node-id=1-1078&t=PEDS7qjRVZrJFA8r-0",
      },
      { label: "Medium Articles", href: "https://medium.com/@vibes_12966" },
    ],
  },
];

export const SOCIAL_ITEMS = [
  { img: "/images/ornaments/discord.svg", href: "https://discord.com/invite/sHa7SCgEPV" },
  { img: "/images/ornaments/x.svg", href: "https://twitter.com/Appic_ICP" },
  { img: "/images/ornaments/youtube.png", href: "https://youtube.com/@appicdao" },
]