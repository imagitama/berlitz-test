import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import styled from '@emotion/styled'
import colors from '../../colors'
import sizes from '../../sizes'

import {
  selectTab,
  selectStyle
} from '../../ducks/product/actions'

import Tabs from '../../components/tabs/tabs'
import AddToCartButton from '../../components/add-to-cart-button/add-to-cart-button'
import BackButton from '../../components/back-button/back-button'
import ProductTitle from '../../components/product-title/product-title'
import ProductSubTitle from '../../components/product-subtitle/product-subtitle'
import ProductPrice from '../../components/product-price/product-price'

import ProductPhoto from '../../components/product-photo/product-photo'
import ProductStylesDropdown from '../../components/product-styles-dropdown/product-styles-dropdown'

const LayoutWrapper = styled.div({
  display: 'flex'
})

const LeftColumn = styled.div({
  flex: 1,
  borderRight: `0.1rem solid ${colors.muted}`
})

const RightColumn = styled.div({
  flex: 1
})

const InnerContent = styled.div({
  padding: `1rem 2rem`
})

const Product = ({ id, title, subtitle, tabs, selectedTab, selectTab, price, oldPrice, styles, selectStyle, selectedStyle, stylesLabel }) => (
  <LayoutWrapper>
    <LeftColumn>
      <InnerContent>
        <BackButton>All products</BackButton>
        <ProductTitle>{title}</ProductTitle>
        <ProductSubTitle>{subtitle}</ProductSubTitle>
      </InnerContent>
      <Tabs tabs={tabs} selectedTab={selectedTab} selectTab={selectTab} />
      <InnerContent>
        <ProductPrice>{price}</ProductPrice>
        <ProductPrice isOld={true}>{oldPrice}</ProductPrice>
        <ProductStylesDropdown label={stylesLabel} styles={styles} selectStyle={selectStyle} />
      </InnerContent>
      <InnerContent>
        <AddToCartButton productId={id} />
      </InnerContent>
    </LeftColumn>
    <RightColumn>
      <ProductPhoto productId={id} styles={styles} selectedStyle={selectedStyle} />
    </RightColumn>
  </LayoutWrapper>
)

const mapStateToProps = ({ product }) => product

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      selectTab,
      selectStyle
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Product)
