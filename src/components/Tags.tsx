import React from 'react'
import { Tag, VerifiedIcon, CommunityIcon, BinanceIcon } from '@pancakeswap-libs/uikit'

const CoreTag = (props) => {
  const {color, style} = props;
  return (<Tag style={style} outline startIcon={<VerifiedIcon color={color || "secondary"} />} {...props}>
    Core
  </Tag>)
}

const CommunityTag = (props) => {
  const {color, style} = props;
  return (<Tag style={style} outline startIcon={<CommunityIcon color={color || "secondary"} />} {...props}>
    Community
  </Tag>)
}

const BinanceTag = (props) => (
  <Tag variant="binance" outline startIcon={<BinanceIcon color="secondary" />} {...props}>
    Binance
  </Tag>
)

const DualTag = (props) => {
  const {color, style} = props;
  return (
    <Tag variant="textSubtle" outline {...props}>
      Dual
    </Tag>
  )
}


export { CoreTag, CommunityTag, BinanceTag, DualTag }
