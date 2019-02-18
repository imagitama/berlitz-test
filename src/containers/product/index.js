import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import {
  selectTab,
  selectStyle
} from '../../ducks/product/actions'
import {
  addToCart
} from '../../ducks/cart/actions'
import { productCartStatus } from '../../ducks/cart/reducer'

const BackButton = ({ children }) => <div>{'<'} {children}</div>

const ProductTitle = ({ children }) => <h1>{children}</h1>

const ProductSubTitle = ({ children }) => <h2>{children}</h2>

const Tabs = ({ tabs, selectedTab, selectTab }) =>
  <div>
    <ul>
      {tabs.map(({ id, label }) => <li key={id} onClick={() => selectTab(id)}>{selectedTab === id ? <strong>{label}</strong> : <span>{label}</span>}</li>)}
    </ul>
    {tabs.filter(({ id }) => selectedTab === id).map(({ id, contents }) => <div key={id}>{contents}</div>)}
  </div>

const ProductPrice = ({ children, isOld = false }) => isOld ? <span>{children}</span> : <strong>{children}</strong>

const Dropdown = ({ options, onChange }) =>
  <select onChange={event => onChange(event.target.value)}>
    {options.map(({ id, label }) => <option key={id} value={id}>{label}</option>)}
  </select>

const Button = ({ children, onClick }) => <button onClick={onClick}>{children}</button>

const getLabelForAddToCartButton = status => {
  switch (status) {
    case productCartStatus.WAITING:
      return 'Add To Cart'
    case productCartStatus.ADDED:
      return 'Item added to cart'
    case productCartStatus.ADDING:
      return 'Adding to cart...'
    default:
      return 'Unknown'
  }
}

const AddToCartButton = connect(({ cart }) => cart, dispatch => bindActionCreators(
  {
    addToCart
  }, 
  dispatch
))(({ productId, status, addToCart }) =>
  <Button onClick={() => addToCart(productId)}>
    {getLabelForAddToCartButton(status)}
  </Button>
)

const ProductPhoto = ({ productId, styles, selectedStyle }) => styles.filter(({ id }) => selectedStyle === id).map(({ id, imageSuffix }) => <img key={id} src={`/images/${productId}-${imageSuffix}.jpg`} width={200} height={200} />)

const Product = ({ id, title, subtitle, tabs, selectedTab, selectTab, price, oldPrice, styles, selectStyle, selectedStyle }) => (
  <div>
    <BackButton>All products</BackButton>
    <ProductTitle>{title}</ProductTitle>
    <ProductSubTitle>{subtitle}</ProductSubTitle>
    <Tabs tabs={tabs} selectedTab={selectedTab} selectTab={selectTab} /> (#{selectedTab})
    <ProductPrice>{price}</ProductPrice>
    <ProductPrice isOld={true}>{oldPrice}</ProductPrice>
    <Dropdown options={styles} onChange={selectStyle} /> (#{selectedStyle})
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
