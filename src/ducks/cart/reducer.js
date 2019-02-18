import { ADDING_PRODUCT_TO_CART, PRODUCT_ADDED_TO_CART } from './actions'

export const productCartStatus = {
  WAITING: 0,
  ADDING: 1,
  ADDED: 2
}

const initialState = {
  status: productCartStatus.WAITING
}

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDING_PRODUCT_TO_CART:
      return {
        ...state,
        status: productCartStatus.ADDING
      }

    case PRODUCT_ADDED_TO_CART:
      return {
        ...state,
        status: productCartStatus.ADDED
      }

    default:
      return state
  }
}

export default cartReducer