import React from 'react'
import styled from '@emotion/styled'
import Dropdown from '../../components/dropdown/dropdown'
import sizes from '../../sizes'

const Label = styled.div({
  textTransform: 'uppercase',
  fontWeight: 'bold',
  marginBottom: sizes.default
})

const ProductStylesDropdown = ({ label, styles, selectStyle }) =>
  <div>
    <Label>{label}</Label>
    <Dropdown options={styles} onChange={selectStyle} />
  </div>

export default ProductStylesDropdown