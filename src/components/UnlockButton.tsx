import React from 'react'
import { Button, useWalletModal } from '@pancakeswap-libs/uikit'
import useAuth from 'hooks/useAuth'
import useI18n from 'hooks/useI18n'
import styled from 'styled-components'

const StaticButtonWrap = styled.div`
color: "#75b093";
button{
    background-color: #536ef6;
    color: #ffffff
  }
`

const UnlockButton = (props) => {
  const TranslateString = useI18n()
  const { login, logout } = useAuth()
  const { onPresentConnectModal } = useWalletModal(login, logout)

  return (<>
    <StaticButtonWrap>
      <Button onClick={onPresentConnectModal} {...props}>
        {TranslateString(292, 'Unlock Wallet')}
      </Button>
    </StaticButtonWrap></>
  )
}

export default UnlockButton
