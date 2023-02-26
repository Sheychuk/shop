import React from 'react'
import { useAppSelector } from 'shared/hooks/redux'
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material'
import { DeleteOrder } from 'features/delete-order'
import { ChangeOrderCount } from 'features/change-order-count'

const OrdersCart = () => {
  const { ordersId, ordersMap } = useAppSelector((state) => state.ordersCart)

  const invoiceTotal = ordersId.reduce(
    (acc, id) => acc + ordersMap[id].data.price * ordersMap[id].count,
    0,
  )

  return (
    <>
      <TableContainer component={Paper}>
        <Table aria-label='spanning table'>
          <TableHead>
            <TableRow>
              <TableCell>Desc</TableCell>
              <TableCell align='right'>Qty.</TableCell>
              <TableCell align='right'>Unit</TableCell>
              <TableCell align='right'>Sum</TableCell>
              <TableCell align='right'></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {ordersId.map((id) => {
              const order = ordersMap[id]
              return (
                <TableRow key={id}>
                  <TableCell>{order.data.title}</TableCell>
                  <TableCell size='small' align='right'>
                    <ChangeOrderCount count={order.count} id={id} />
                  </TableCell>
                  <TableCell align='right'>{order.data.price}</TableCell>
                  <TableCell align='right'>{order.data.price * order.count}</TableCell>
                  <TableCell align='right'>
                    <DeleteOrder id={id} />
                  </TableCell>
                </TableRow>
              )
            })}
            <TableRow>
              <TableCell colSpan={3}>
                <b>Total</b>
              </TableCell>
              <TableCell align='right'>
                <b>{invoiceTotal}</b>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}

export { OrdersCart }
