export const SELECT_STYLE = 'SELECT_STYLE'
export const selectStyle = styleId => ({
  type: SELECT_STYLE,
  styleId: parseInt(styleId)
})

export const SELECT_TAB = 'SELECT_TAB'
export const selectTab = tabId => ({
  type: SELECT_TAB,
  tabId: parseInt(tabId)
})