import { SELECT_TAB, SELECT_STYLE } from './actions'

const initialState = {
  id: 'ath-msr7',
  title: 'Audio Technica ATH-MSR7',
  subtitle: '2017 Best Headphones of the Year Award Winner',
  tabs: [
    {
      id: 1,
      label: 'Description',
      contents: 'Foo'
    },
    {
      id: 2,
      label: 'Details',
      contents: 'Bar'
    }
  ],
  selectedTab: 1,
  price: 59.99,
  oldPrice: 89.99,
  styles: [
    {
      id: 1,
      label: 'Black',
      imageSuffix: 'black'
    },
    {
      id: 2,
      label: 'Brown',
      imageSuffix: 'brown'
    }
  ],
  selectedStyle: 1
}

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_TAB:
      return {
        ...state,
        selectedTab: action.tabId
      }

    case SELECT_STYLE:
      return {
        ...state,
        selectedStyle: action.styleId
      }
    
    default:
      return state
  }
}

export default productReducer