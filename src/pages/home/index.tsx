import React from 'react'
import { OrdersCart } from 'widgets/orders-cart'
import { ProductsList } from 'widgets/products-list'
import { Container, Grid, Typography } from '@mui/material'

const HomePage = () => {
  return (
    <Container maxWidth='xl'>
      <Typography gutterBottom variant='h1' component='div'>
        Shop
      </Typography>
      <hr />
      <Grid container spacing={2}>
        <Grid item xs={7}>
          <ProductsList />
        </Grid>
        <Grid item xs={5}>
          <OrdersCart />
        </Grid>
      </Grid>
    </Container>
  )
}

export default HomePage
