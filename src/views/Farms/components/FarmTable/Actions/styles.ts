import styled from 'styled-components'

export const ActionContainer = styled.div`
  padding: 16px;
  border: 2px solid ${({ theme }) => theme.colors.input};
  border-radius: 16px;
  flex-grow: 1;
  flex-basis: 0;
  margin-bottom: 16px;

  ${({ theme }) => theme.mediaQueries.sm} {
    margin-left: 12px;
    margin-right: 12px;
    margin-bottom: 0;
    max-height: 100px;
  }

  ${({ theme }) => theme.mediaQueries.xl} {
    margin-left: 48px;
    margin-right: 0;
    margin-bottom: 0;
    max-height: 100px;
  }
`

export const ActionTitles = styled.div`
  font-weight: 600;
  font-size: 12px;
  margin-bottom: 8px;
`

export const Title = styled.span`
  color: #75b093;
`

export const Subtle = styled.span`
  color: #000000;
`

export const ActionContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  button{
    background-color: #536ef6;
  }
`
export const Earned = styled.div`
  font-weight: 600;
  font-size: 20px;
  color: #e5e5e5;
`

export const Staked = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.textSubtle};
`
