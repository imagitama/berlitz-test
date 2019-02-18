import React from 'react'
import styled from '@emotion/styled'
import colors from '../../colors'
import sizes from '../../sizes'

const DropdownStyled = styled.select({
  appearance: 'none',
  border: `0.1rem solid ${colors.secondaryText}`,
  borderRadius: sizes.borderRadius,
  padding: sizes.default
})

const Dropdown = ({ options, onChange }) =>
  <DropdownStyled onChange={event => onChange(event.target.value)}>
    {options.map(({ id, label }) => <option key={id} value={id}>{label}</option>)}
  </DropdownStyled>

export default Dropdown