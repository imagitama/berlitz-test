import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

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
import Dropdown from '../../components/dropdown/dropdown'
import ProductPhoto from '../../components/product-photo/product-photo'

const Product = ({ id, title, subtitle, tabs, selectedTab, selectTab, price, oldPrice, styles, selectStyle, selectedStyle, stylesLabel }) => (
  <div>
    <BackButton>All products</BackButton>
    <ProductTitle>{title}</ProductTitle>
    <ProductSubTitle>{subtitle}</ProductSubTitle>
    <Tabs tabs={tabs} selectedTab={selectedTab} selectTab={selectTab} />
    <ProductPrice>{price}</ProductPrice>
    <ProductPrice isOld={true}>{oldPrice}</ProductPrice>
    {stylesLabel}
    <Dropdown options={styles} onChange={selectStyle} />
    <AddToCartButton productId={id} />
    <ProductPhoto productId={id} styles={styles} selectedStyle={selectedStyle} />
  </div>
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
