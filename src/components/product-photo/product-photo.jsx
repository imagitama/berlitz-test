import React from 'react'
import styled from '@emotion/styled'
import colors from '../../colors'
import sizes from '../../sizes'

const ProductPhoto = ({ productId, styles, selectedStyle }) => styles.filter(({ id }) => selectedStyle === id).map(({ id, imageSuffix }) => <img key={id} src={`/images/${productId}-${imageSuffix}.jpg`} width={200} height={200} alt='Product photo' />)

export default ProductPhoto