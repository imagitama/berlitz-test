export const ADDING_PRODUCT_TO_CART = 'ADDING_PRODUCT_TO_CART`'
export const addingToCart = productId => ({
  type: ADDING_PRODUCT_TO_CART,
  productId
})

export const PRODUCT_JUST_ADDED_TO_CART = 'PRODUCT_JUST_ADDED_TO_CART`'
export const justAddedToCart = productId => ({
  type: PRODUCT_JUST_ADDED_TO_CART,
  productId
})

export const PRODUCT_ADDED_TO_CART = 'PRODUCT_ADDED_TO_CART`'
export const addedToCart = productId => ({
  type: PRODUCT_ADDED_TO_CART,
  productId
})

export const addToCart = productId => dispatch => {
  dispatch(addingToCart(productId))

  setTimeout(() => {
    dispatch(justAddedToCart(productId))

    setTimeout(() => {
      dispatch(addedToCart(productId))
    }, 2000)
  }, 2000)
}