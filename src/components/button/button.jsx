import React from 'react'
import styled from '@emotion/styled'
import colors from '../../colors'
import sizes from '../../sizes'
import mediaQueries from '../../media-queries'

const ButtonStyled = styled.button({
  background: colors.highlight,
  color: colors.highlightText,
  appearance: 'none',
  border: 'none',
  borderRadius: sizes.borderRadius,
  padding: `${sizes.default} ${sizes.huge}`,
  textTransform: 'uppercase',
  fontWeight: 'bold',
  width: '100%',
  [mediaQueries.small]: {
    width: 'auto'
  }
})

const Button = ({ children, onClick }) => <ButtonStyled onClick={onClick}>{children}</ButtonStyled>

export default Button