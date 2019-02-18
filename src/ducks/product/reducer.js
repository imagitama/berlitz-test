import { SELECT_TAB, SELECT_STYLE } from './actions'

const initialState = {
  id: 'ath-msr7',
  title: 'Audio Technica ATH-MSR7',
  subtitle: '2017 Best Headphones of the Year Award Winner',
  tabs: [
    {
      id: 1,
      label: 'Description',
      contents: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rhoncus tempus ex in elementum. Etiam nunc ipsum, pharetra pulvinar lacinia vel, porta nec tellus. Nullam auctor mauris in lorem fringilla tristique. Sed tincidunt a nunc in commodo. Maecenas ac tincidunt massa. Quisque rutrum sollicitudin sapien, vel convallis nisi aliquet in. Cras nec efficitur orci, vitae scelerisque mi.'
    },
    {
      id: 2,
      label: 'Details',
      contents: 'Curabitur consectetur eleifend neque, facilisis blandit est elementum eu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu magna interdum, gravida diam nec, sollicitudin urna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam in vehicula purus. Integer velit ligula, varius posuere lobortis sit amet, vehicula ut dui. Aliquam dapibus purus et erat varius, at pulvinar nisl imperdiet. Nullam eu justo sed dolor dictum mattis quis nec dui. Cras maximus condimentum eleifend.'
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
  selectedStyle: 1,
  stylesLabel: 'Colors'
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