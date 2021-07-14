import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'KuulaidSwap',
  description:
    'The most popular AMM on KCC by user count! Earn $KUUL and KSC through yield farming or win it in the Lottery, then stake it in Syrup Pools to earn more tokens! Initial Farm Offerings , NFTs, and more, on a platform you can trust.',
  image: 'https://pancakeswap.finance/images/easter-battle.png',
}

export const customMeta: { [key: string]: PageMeta } = {
  '/competition': {
    title: 'KuulaidSwap Easter Battle',
    description: 'Register now for the PancakeSwap Easter battle!',
    image: 'https://pancakeswap.finance/images/easter-battle.png',
  },
}
