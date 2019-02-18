import React from 'react'
import { Route } from 'react-router-dom'
import { Global } from '@emotion/core'
import Product from '../product'

const App = () => (
  <div>
    <Global styles={`
html {
  font-size: 12px;
}

body {
  font-family: 'Quicksand', sans-serif;
}`} />
    <Route exact path="/" component={Product} />
  </div>
)

export default App
