import React from 'react'
import { Route } from 'react-router-dom'
import Product from '../product'

const App = () => (
  <Route exact path="/" component={Product} />
)

export default App
