import {
  ArrowsUpDownIcon,
  BlockchainIcon,
  DiscountIcon,
  FireIcon,
  GovernanceIcon,
  LockIcon,
  ParkOutlineBridgeIcon,
} from "@/components/icon";
import { CardItem, ChartDataItem, CustomerSlideItem, RoadmapItem, ShapeItem } from "../types";
import { ChartConfig } from "@/components/common/chart";

export const BUBBLE_ITEMS: ShapeItem[] = [
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

export const CUSTOMERS_IMAGES: CustomerSlideItem[] = [
  {
    label: "DFINITY",
    logo: "/images/logo/icp-logo.png",
  },
  {
    label: "ICPHUB PT",
    logo: "/images/logo/icp-pt.png",
  },
  {
    label: "GOLD DAO",
    logo: "/images/logo/gldt.svg",
  },
  {
    label: "NFID",
    logo: "/images/logo/nfid.png",
  },
  {
    label: "OICY",
    logo: "/images/logo/oicy.png",
  },
];

export const KEY_FEATURES: CardItem[] = [
  {
    label: "Appic Crosschain Swap",
    desc: "Appic enables easy token swaps across chains like ICP, EVM, SOLANA, and BTC, using top DEXs liquidity for fast, cheap swaps. e.g., USDT on Base to ckBTC on ICP.",
    icon: <BlockchainIcon className="w-5 h-5" />,
    screenshotPath: "/images/features/swap.png",
  },
  {
    label: "Appic Bridge",
    desc: "Appic Bridge connects EVM chains to ICP, locking tokens on one side and minting wrapped versions on the other. ICP-to-EVM bridging is coming soon.",
    icon: <ParkOutlineBridgeIcon className="w-5 h-5" />,
    screenshotPath: "/images/features/bridge.png",
  },
  {
    label: "Appic Dex",
    desc: "Appic Dex offers fast, low-fee swaps on ICP with concentrated liquidity pools, optimized for traders and providers in one canister.",
    icon: <ArrowsUpDownIcon className="w-5 h-5" />,
    screenshotPath: "/images/features/dex.png",
  },
  {
    label: "Appic Twin Token Creator",
    desc: `Appic Twin Token Creator lets projects make wrapped "twin" tokens on ICP or EVM, bridging them  instantly. e.g., Gold token to Base.`,
    icon: <LockIcon className="w-5 h-5" />,
    screenshotPath: "/images/features/twin-token.png",
  },
];

export const TOKENOMICS_ITEMS: CardItem[] = [
  {
    label: "Governance",
    desc: "Appic token holders have voting power to shape the platform’s future. They can participate in proposals and influence the roadmap by casting their votes.",
    icon: <GovernanceIcon className="w-5 h-5" />,
  },
  {
    label: "Buy Back (Burn)",
    desc: "Appic uses platform fees to buy back and burn Appic tokens. This reduces the total supply over time, aiming to maintain a deflationary token model.",
    icon: <FireIcon className="w-5 h-5" />,
  },
  {
    label: "Transaction Fee",
    desc: "Appic tokens can be used to pay transaction fees at a reduced rate. This offers holders a cost-saving benefit when using the platform.",
    icon: <DiscountIcon className="w-5 h-5" />,
  },
];

export const CHART_DATA: ChartDataItem[] = [
  { name: "Treasury", value: 45, fill: "#8067DC" },
  { name: "SNS", value: 28, fill: "#3466C6" },
  { name: "Team", value: 11.5, fill: "#5D92F7" },
  { name: "Investors", value: 15.5, fill: "#A367DC" },
];

export const CHART_CONFIG: ChartConfig = {
  "Pre Seed": {
    label: "Pre Seed",
    color: "#F15A24",
  },
  mobile: {
    label: "Mobile",
    color: "#60a5fa",
  },
};

export const ROADMAP_ITEMS: RoadmapItem[] = [
  {
    label: "Completed",
    position: "top",
    title: "Initial EVM-ICP Bridge",
    description: `Launched the EVM-ICP bridge connecting Binance Smart Chain and Base, with a minter canister to lock EVM tokens and mint twin tokens (e.g., icBNB, icUSDT.bsc) on ICP, plus a basic frontend for bridging.`,
  },
  {
    label: "Q2 2025",
    position: "bottom",
    title: "ICP to EVM Bridging",
    description: `Upgrade the minter canister and EVM helper contracts to mint wrapped ICP tokens on EVM chains (e.g., Gold token on Base), adding “Mint” transactions and optional treasury management for locked ICP.`,
  },
  {
    label: "Q3 2025",
    position: "top",
    title: "Appic Dex Deployment",
    description: `Build a Rust-based Dex canister with concentrated liquidity pools, enabling fast, efficient swaps on ICP, and integrate it into the frontend for pool management and trading.`,
  },
  {
    label: "Q3-4 2025",
    position: "bottom",
    title: "Swap Router Development",
    description: `Create a swap router canister to aggregate liquidity from ICP and EVM DEXs (e.g., Uniswap, ICPSwap), add “Swap” transactions to the minter for combined bridge-and-swap operations, and connect to external DEXs.`,
  },
  {
    label: "Q4 2025",
    position: "top",
    title: "Full System Integration",
    description: `Link the bridge, Dex, and router with the frontend for seamless cross-chain swaps, enhance the Chain Fusion Helper Canister to track all activities (swaps, bridges, deployments), and develop an SDK for dApp integration.`,
  },
];

export const FAQ_ITEMS = [
  {
    title: "Appic Swap",
    items: [
      {
        label: "What is Appic Swap?",
        content: `Appic Swap lets you trade tokens between any chain, like ICP and EVM networks, using one`,
      },
      {
        label: "How does it find the best swap rates?",
        content: `It pulls real-time quotes from DEXs like Uniswap, Panckeswap, Appic Dex and ICPSwap, then picks `,
      },
      {
        label: "Can I swap tokens across different EVM chains?",
        content: `Yes, it supports EVM-to-EVM swaps, routing through ICP for better liquidity and lower costs.`,
      },
      {
        label: "What makes Appic Swap faster?",
        content: `It combines bridging and swapping into one step, cutting down transaction time and fees.`,
      },
      {
        label: "Is it secure?",
        content: `Yes, it verifies quotes on-chain during execution and uses ICP’s secure infrastructure.`,
      },
    ],
  },
  {
    title: "Appic Bridge",
    items: [
      {
        label: "What does Appic Bridge do?",
        content: `It connects EVM chains to ICP, letting you move tokens back and forth by locking and minting them.`,
      },
      {
        label: "Which chains are supported now?",
        content: `Binance Smart Chain and Base are live, with more EVM chains easily added soon.`,
      },
      {
        label: "Can I bridge ICP tokens to EVM chains?",
        content: `Not yet, but it’s coming soon with the next minter update in 2-3 months.`,
      },
      {
        label: "How does it stay secure?",
        content: `It uses ICP’s ECDSCA API for Ethereum addresses and a multi-RPC strategy to ensure reliable `,
      },
      {
        label:
          "What’s the benefit of direct EVM-to-EVM for ICP tokens bridging?",
        content: `It skips ICP as a middle step, making transfers between EVM chains faster and simpler.`,
      },
    ],
  },
  {
    title: "Appic Dex",
    items: [
      {
        label: "What is Appic Dex?",
        content: `It’s a decentralized exchange on ICP with liquidity pools for fast, low-cost token swaps.`,
      },
      {
        label: "Why is it better than other ICP DEXs?",
        content: `It uses concentrated liquidity and one Rust canister for atomic-speed swaps with lower fees.`,
      },
      {
        label: "What are concentrated liquidity pools?",
        content: `They let providers focus funds in specific price ranges, reducing slippage and boosting capital `,
      },
      {
        label: "Which tokens will it support?",
        content: `It focuses on stablecoin pairs first, like icUSDC and ckUSDC, with more to come.`,
      },
      {
        label: "When will it be ready?",
        content: `It’s in development, expected to launch in 3-4 months from March 2025.`,
      },
    ],
  },
  {
    title: "Appic Twin Token Creator ",
    items: [
      {
        label: "What is the Twin Token Creator?",
        content: `It lets projects create wrapped “twin” tokens on ICP or EVM chains without permission.`,
      },
      {
        label: "How does it work with the bridge?",
        content: `Twin tokens can be bridged between chains using Appic Bridge, connecting ecosystems`,
      },
      {
        label: "Can any project use it?",
        content: `Yes, it’s fully open and decentralized—anyone can deploy a twin token on any supported chain.`,
      },
      {
        label: "What’s an example of a twin token?",
        content: `A Gold token on ICP could become a wrapped Gold token on Base or Arbitrum.`,
      },
      {
        label: "When will it support ICP-to-EVM tokens?",
        content: `It’s already live for evm tokens to be wrapped on ICP,and coming soon for ICP tokens.`,
      },
    ],
  },
];
