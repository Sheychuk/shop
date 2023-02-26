import React from 'react'
import { ProductCard, productListApi } from 'entities/product'
import { Grid } from '@mui/material'
import { AddToCart } from '../../../features/add-to-orders-cart'

const ProductsList = () => {
  const { data, isLoading, error } = productListApi.useFetchProductsListQuery(9)

  return (
    <>
      {isLoading && <b>Loading...</b>}

      {error && <b>Ops... products was not loaded!!!</b>}

      <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
        {data?.products.map((item) => (
          <Grid item xs={2} sm={4} md={4} key={item.id}>
            <ProductCard item={item}>
              <AddToCart item={item} />
            </ProductCard>
          </Grid>
        ))}
      </Grid>
    </>
  )
}

export { ProductsList }
