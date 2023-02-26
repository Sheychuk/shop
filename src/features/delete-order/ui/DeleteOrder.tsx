import React, { FC } from 'react'
import { IconButton } from '@mui/material'
import { useOrderActions } from '../../../entities/order'
import DeleteIcon from '@mui/icons-material/Delete'
import { pink } from '@mui/material/colors'

type DeleteOrderProps = {
  id: number
}

const DeleteOrder: FC<DeleteOrderProps> = ({ id }) => {
  const { deleteOrder } = useOrderActions()

  return (
    <IconButton aria-label='delete' onClick={() => deleteOrder(id)}>
      <DeleteIcon sx={{ color: pink[500] }} />
    </IconButton>
  )
}

export { DeleteOrder }
