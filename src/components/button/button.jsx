import React from 'react'
import styled from '@emotion/styled'
import colors from '../../colors'
import sizes from '../../sizes'

const ButtonStyled = styled.button({
  background: colors.highlight,
  color: colors.highlightText,
  appearance: 'none',
  border: 'none',
  borderRadius: sizes.borderRadius,
  padding: sizes.default,
  textTransform: 'uppercase',
  fontWeight: 'bold'
})

const Button = ({ children, onClick }) => <ButtonStyled onClick={onClick}>{children}</ButtonStyled>

export default Button