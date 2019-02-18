import React from 'react'
import styled from '@emotion/styled'

const Image = styled.img({
  width: '100%'
})

const ProductPhoto = ({ productId, styles, selectedStyle }) => 
  styles
    .filter(({ id }) => selectedStyle === id)
    .map(({ id, imageSuffix }) => 
      <Image key={id} src={`/images/${productId}-${imageSuffix}.jpg`} alt='Product photo' />)

export default ProductPhoto