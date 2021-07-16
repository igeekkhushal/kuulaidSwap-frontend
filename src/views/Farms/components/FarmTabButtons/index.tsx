import React from 'react'
import styled from 'styled-components'
import { useRouteMatch, Link } from 'react-router-dom'
import { ButtonMenu, ButtonMenuItem, NotificationDot } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'

interface FarmTabButtonsProps {
  hasStakeInFinishedFarms: boolean
}

const FarmTabButtons: React.FC<FarmTabButtonsProps> = ({ hasStakeInFinishedFarms }) => {
  const { url, isExact } = useRouteMatch()
  const TranslateString = useI18n()

  return (
    <Wrapper>
      <ButtonMenu variant="darkgreen" activeIndex={isExact ? 0 : 1} scale="sm">
        <ButtonMenuItem as={Link} to={`${url}`} >
          {TranslateString(1198, 'Live')}
        </ButtonMenuItem>
        <NotificationDot show={hasStakeInFinishedFarms}>
          <ButtonMenuItem as={Link} to={`${url}/history`}>
            {TranslateString(388, 'Finished')}
          </ButtonMenuItem>
        </NotificationDot>
      </ButtonMenu>
    </Wrapper>
  )
}

export default FarmTabButtons

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  div{
  background-color: #75b093;
  }
  a {
    padding-left: 12px;
    padding-right: 12px;
    color: #ffffff;
    font-weight: 500;
  }
  .fjifXT{
    background-color: #679b80;

  }

  ${({ theme }) => theme.mediaQueries.sm} {
    margin-left: 16px;
  }
`
