import React from 'react'
import styled from '@emotion/styled'
import colors from '../../colors'
import sizes from '../../sizes'
import Dropdown from '../../components/dropdown/dropdown'

const Label = styled.div({
  textTransform: 'uppercase'
})

const ProductStylesDropdown = ({ label, styles, selectStyle }) =>
  <div>
    <Label>{label}</Label>
    <Dropdown options={styles} onChange={selectStyle} />
  </div>

export default ProductStylesDropdown