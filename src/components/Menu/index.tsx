import React, { useContext } from 'react'
import { Menu as UikitMenu } from '@pancakeswap-libs/uikit'
import { useWeb3React } from '@web3-react/core'
import { allLanguages } from 'config/localisation/languageCodes'
import { LanguageContext } from 'contexts/Localisation/languageContext'
import useTheme from 'hooks/useTheme'
import useAuth from 'hooks/useAuth'
import { usePriceCakeBusd, useProfile } from 'state/hooks'
import styled from 'styled-components'
import config from './config'

const CustomeMenuTempDiv = styled.div`
div {
  nav div{ 
    div button{
      background-color: #75b093 ;
      font-weight: 500;  
    }
    button{
      svg {
        fill: #75b093;
        }
    }
  }
  div div .emxuDx{
    div {
      svg {
        fill: #75b093;
        }
      div{
        color: #75b093 ;
      }
    }
    a{
      svg {
        fill: #75b093;
        }
      div{
        color: #75b093 ;
      }
    }
  }
  
  div div div div{
   .changeColorForMenu {
      svg {
        fill: #75b093;
        }
      div{
        color: #75b093 ;
      }
    }
  }

  div div div .changeColorForMenu { 
    a{
      svg {
        fill: #75b093;
        }
      div{
        color: #75b093 ;
      }
    }
  }
}
`

const Menu = (props) => {
  const { account } = useWeb3React()
  const { login, logout } = useAuth()
  const { selectedLanguage, setSelectedLanguage } = useContext(LanguageContext)
  const { isDark, toggleTheme } = useTheme()
  const cakePriceUsd = usePriceCakeBusd()
  const { profile } = useProfile()

  return (
    <CustomeMenuTempDiv>
      <UikitMenu
        account={account}
        login={login}
        logout={logout}
        isDark={isDark}
        toggleTheme={toggleTheme}
        currentLang={selectedLanguage && selectedLanguage.code}
        langs={allLanguages}
        setLang={setSelectedLanguage}
        cakePriceUsd={cakePriceUsd.toNumber()}
        links={config}
        hrefLogoIcon="/images/Kuulaidfinance.png"
        hrefLogoIconForMobile="/images/LOGO.png"
        profile={{
          username: profile?.username,
          image: profile?.nft ? `/images/nfts/${profile.nft?.images.sm}` : "/images/nfts/ProfileImage.png",
          profileLink: '',
          noProfileLink: '',
          showPip: !profile?.username,
        }}
        {...props}
      />
    </CustomeMenuTempDiv>
  )
}

export default Menu
