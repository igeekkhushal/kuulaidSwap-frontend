import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
    calloutClass: "changeColorForMenu"
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    calloutClass: "changeColorForMenu",
    // status: {
    //   text: 'MIGRATE',
    //   color: 'warning',
    // },
    items: [
      // {
      //   label: 'LP Migration',
      //   href: 'https://v1exchange.pancakeswap.finance/#/migrate',
      // },
      {
        label: 'Exchange',
        href: 'http://ec2-3-239-250-71.compute-1.amazonaws.com:8082/',
      },
      {
        label: 'Liquidity',
        href: 'http://ec2-3-239-250-71.compute-1.amazonaws.com:8082/#/pool',
      },
      // {
      //   label: 'V1 Liquidity (Old)',
      //   href: 'https://v1exchange.pancakeswap.finance/#/pool',
      // },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
    calloutClass: "changeColorForMenu"
  },
  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
  // {
  //   label: 'Collectibles',
  //   icon: 'NftIcon',
  //   href: '/collectibles',
  // },
  // {
  //   label: 'Team Battle',
  //   icon: 'TeamBattleIcon',
  //   href: '/competition',
  // },
  // {
  //   label: 'Teams & Profile',
  //   icon: 'GroupsIcon',
  //   items: [
  //     {
  //       label: 'Leaderboard',
  //       href: '/teams',
  //     },
  //     {
  //       label: 'Task Center',
  //       href: '/profile/tasks',
  //     },
  //     {
  //       label: 'Your Profile',
  //       href: '/profile',
  //     },
  //   ],
  // },
  // {
  //   label: 'Info',
  //   icon: 'InfoIcon',
  //   items: [
  //     {
  //       label: 'Overview',
  //       href: 'https://pancakeswap.info',
  //     },
  //     {
  //       label: 'Tokens',
  //       href: 'https://pancakeswap.info/tokens',
  //     },
  //     {
  //       label: 'Pairs',
  //       href: 'https://pancakeswap.info/pairs',
  //     },
  //     {
  //       label: 'Accounts',
  //       href: 'https://pancakeswap.info/accounts',
  //     },
  //   ],
  // },
  // {
  //   label: 'IFO',
  //   icon: 'IfoIcon',
  //   href: '/ifo',
  // },
  {
    label: 'More',
    icon: 'MoreIcon',
    calloutClass: "changeColorForMenu",
    items: [
      {
        label: 'Contact',
        href: '#',
      },
      {
        label: 'Voting',
        href: '#',
      },
      {
        label: 'Github',
        href: '#',
      },
      {
        label: 'Docs',
        href: '#',
      },
      // {
      //   label: 'Blog',
      //   href: '#',
      // },
      // {
      //   label: 'Merch',
      //   href: '#',
      // },
    ],
  },
]

export default config
