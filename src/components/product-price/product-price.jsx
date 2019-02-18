import React from 'react'
import styled from '@emotion/styled'
import colors from '../../colors'
import sizes from '../../sizes'

const ProductPriceStyled = styled.span(({ isOld = false }) => ({
  color: isOld ? colors.secondaryText : colors.primaryText,
  textDecoration: isOld ? 'line-through' : null,
  fontSize: '1.5rem',
  fontWeight: 'bold',
  marginRight: sizes.default
}))

const ProductPrice = props => <ProductPriceStyled {...props}>${props.children}</ProductPriceStyled>

export default ProductPrice