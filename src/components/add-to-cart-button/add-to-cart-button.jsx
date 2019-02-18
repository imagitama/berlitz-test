import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Button from '../button/button'
import {
  addToCart
} from '../../ducks/cart/actions'
import { productCartStatus } from '../../ducks/cart/reducer'

const getLabelForAddToCartButton = status => {
  switch (status) {
    case productCartStatus.WAITING:
      return 'Add To Cart'
    case productCartStatus.ADDING:
      return 'Adding to cart...'
    case productCartStatus.JUST_ADDED:
      return 'Item added to cart!'
    case productCartStatus.ADDED:
      return 'View Cart'
    default:
      return 'Unknown'
  }
}

const AddToCartButton = ({ productId, status, addToCart }) => (
  <Button onClick={() => addToCart(productId)}>
    {getLabelForAddToCartButton(status)}
  </Button>
)

const mapStateToProps = ({ cart }) => cart

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    addToCart
  }, 
  dispatch
)

export default connect(mapStateToProps, mapDispatchToProps)(AddToCartButton)