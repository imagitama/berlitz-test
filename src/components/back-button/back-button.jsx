import React from 'react'
import styled from '@emotion/styled'
import colors from '../../colors'

const Arrow = styled.span({
  color: colors.secondaryText
})

const BackButton = ({ children }) => <div><Arrow>{'<'}</Arrow> {children}</div>

export default BackButton