import React from 'react'
import { Route } from 'react-router-dom'
import styled from '@emotion/styled'
import { Global } from '@emotion/core'
import Product from '../product'
import sizes from '../../sizes'
import colors from '../../colors'
import mediaQueries from '../../media-queries'

const ContentStyled = styled.div({
  borderRadius: sizes.borderRadius,
  background: colors.contentBg,
  overflow: 'hidden' // crop product photo
})

const App = () => (
  <ContentStyled>
    <Global styles={`
html {
  font-size: 12px;
}

body {
  font-family: 'Quicksand', sans-serif;
  background: ${colors.bodyBg};
  padding: 2rem 1rem;

  ${mediaQueries.small} {
    padding: 4rem 2rem;
  }

  ${mediaQueries.medium} {
    max-width: 1024px;
    margin: 0 auto;
  }
}`} />
    <Route exact path="/" component={Product} />
  </ContentStyled>
)

export default App
