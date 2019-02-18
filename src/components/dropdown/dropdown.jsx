import React from 'react'
import styled from '@emotion/styled'
import colors from '../../colors'
import sizes from '../../sizes'

const DropdownStyled = styled.select({
  appearance: 'none',
  border: `0.1rem solid ${colors.secondaryText}`,
  borderRadius: sizes.borderRadius,
  padding: sizes.default,
  textAlign: 'left',
  width: '50%'
})

const DropdownWrapper = styled.div({
  position: 'relative'
})

const DropdownArrow = styled.div({
  position: 'absolute',
  top: '0.5rem',
  right: '55%',
  transform: 'rotate(270deg)',
  fontSize: '2rem',
  color: colors.secondaryText
})

const Dropdown = ({ options, onChange }) =>
  <DropdownWrapper>
    <DropdownArrow>&#8249;</DropdownArrow>
    <DropdownStyled onChange={event => onChange(event.target.value)}>
      {options.map(({ id, label }) => <option key={id} value={id}>{label}</option>)}
    </DropdownStyled>
  </DropdownWrapper>

export default Dropdown