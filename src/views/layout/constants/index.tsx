import { ArrowsUpDownIcon, BlockchainIcon, DiscordIcon, GithubIcon, ParkOutlineBridgeIcon, QuestionMarkCircleIcon, XIcon, YoutubeIcon } from "@/components/icon";
import { FooterNavItems, MenuNavItem, SocialItem } from "../types";

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
];

export const FOOTER_NAV_ITEMS: FooterNavItems[] = [
  {
    title: "Solutions",
    items: [
      { label: "Bridge (live)", href: "https://app.appicdao.com/bridge" },
      { label: "Swap (coming soon)", href: null },
      { label: "Pools (coming soon)", href: null },
      { label: "Twin Token Creator", href: "https://app.appicdao.com/advanced" },
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

export const SOCIAL_ITEMS: SocialItem[] = [
  {
    icon: <DiscordIcon className="text-[#3870DA] w-5 h-5" />,
    href: "https://discord.com/invite/sHa7SCgEPV",
  },
  {
    icon: <YoutubeIcon className="text-[#3870DA] w-5 h-5" />,
    href: "https://twitter.com/Appic_ICP",
  },
  {
    icon: <XIcon className="text-[#3870DA] w-5 h-5" />,
    href: "https://youtube.com/@appicdao",
  },
  {
    icon: <GithubIcon className="text-[#3870DA] w-5 h-5" />,
    href: "https://github.com/appic-solutions",
  },
];
