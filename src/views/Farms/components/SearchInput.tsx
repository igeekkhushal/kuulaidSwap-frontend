import React, { useState, useMemo } from 'react'
import { Input } from '@pancakeswap-libs/uikit'
import styled from 'styled-components'
import debounce from 'lodash/debounce'

const StyledInput = styled(Input)`
  border-radius: 16px;
  margin-left: auto;
  background-color: #e5e5e5;
  color: #000;
  &:focus {
    outline: none;
  }
  :focus:not(:disabled){
    box-shadow: 0px 0px 0px 1px #75b093, 0px 0px 0px 4px #75b09399;
  }
  ::placeholder,
  ::-webkit-input-placeholder {
    color: #000;
  }
  :-ms-input-placeholder {
     color: #000;
  }
`

const InputWrapper = styled.div`
  position: relative;
  ${({ theme }) => theme.mediaQueries.sm} {
    width: 234px;
    display: block;
  }
`

const Container = styled.div<{ toggled: boolean }>``

interface Props {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const SearchInput: React.FC<Props> = ({ onChange: onChangeCallback }) => {
  const [toggled, setToggled] = useState(false)
  const [searchText, setSearchText] = useState('')

  const debouncedOnChange = useMemo(
    () => debounce((e: React.ChangeEvent<HTMLInputElement>) => onChangeCallback(e), 500),
    [onChangeCallback],
  )

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value)
    debouncedOnChange(e)
  }

  return (
    <Container toggled={toggled}>
      <InputWrapper>
        <StyledInput
          value={searchText}
          onChange={onChange}
          placeholder="Search farms"
          onBlur={() => setToggled(false)}
        />
      </InputWrapper>
    </Container>
  )
}

export default SearchInput
