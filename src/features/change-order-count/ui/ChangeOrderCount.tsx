import React, { ChangeEvent, FC } from 'react'
import { ButtonGroup, IconButton, TextField } from '@mui/material'
import { useOrderActions } from '../../../entities/order'
import RemoveIcon from '@mui/icons-material/Remove'
import AddIcon from '@mui/icons-material/Add'

type DeleteOrderProps = {
  id: number
  count: number
}

const ChangeOrderCount: FC<DeleteOrderProps> = ({ id, count }) => {
  const { setOrderCount } = useOrderActions()

  const handleDecreaseButtonClick = () => {
    setOrderCount({ id, count: count - 1 })
  }
  const handleIncreaseButtonClick = () => {
    setOrderCount({ id, count: count + 1 })
  }

  const handleInputCountChange = (event: ChangeEvent<HTMLInputElement>) => {
    const count = parseInt(event.target.value, 10)

    if (isNaN(count) || count < 1) {
      setOrderCount({ id, count: 1 })
    } else {
      setOrderCount({ id, count })
    }
  }

  return (
    <ButtonGroup variant='contained' aria-label='outlined primary button group'>
      <IconButton disabled={count < 2} aria-label='decrease' onClick={handleDecreaseButtonClick}>
        <RemoveIcon />
      </IconButton>
      <TextField type='number' size='small' value={count} onChange={handleInputCountChange} />
      <IconButton aria-label='increase' onClick={handleIncreaseButtonClick}>
        <AddIcon />
      </IconButton>
    </ButtonGroup>
  )
}

export { ChangeOrderCount }
