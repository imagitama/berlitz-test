import React from 'react'
import styled from '@emotion/styled'
import colors from '../../colors'

const Arrow = styled.span({
  color: colors.secondaryText
})

const BackButton = ({ children }) => <div><Arrow>&#8592;</Arrow> {children}</div>

export default BackButton