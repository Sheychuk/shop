import React, { FC } from 'react'
import { Button } from '@mui/material'
import { useOrderActions } from '../../../entities/order'
import { Product } from '../../../shared/types'

type AddToCartProps = {
  item: Product
}

const AddToCart: FC<AddToCartProps> = ({ item }) => {
  const { addOrder } = useOrderActions()

  return (
    <Button fullWidth variant='outlined' onClick={() => addOrder(item)}>
      Add to cart
    </Button>
  )
}

export { AddToCart }
