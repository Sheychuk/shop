import React, { FC, PropsWithChildren } from 'react';
import { Product } from 'shared/types'
import { Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';

type ProductCardProps = PropsWithChildren<{
  item: Product
}>

const ProductCard: FC<ProductCardProps> = ({ item, children }) => {
  const { title, thumbnail, price } = item

  return (
    <Card>
      <CardMedia
        sx={{ height: 140 }}
        image={thumbnail}
        title={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {price} $
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {title}
        </Typography>
      </CardContent>
      <CardActions>
        {children}
      </CardActions>
    </Card>
  )
}

export { ProductCard }
