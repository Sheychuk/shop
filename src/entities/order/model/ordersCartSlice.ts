import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Product } from 'shared/types'

type OrderCartState = {
  ordersId: number[]
  ordersMap: {
    [id: number]: {
      count: number
      data: Product
    }
  }
}

const initialState: OrderCartState = {
  ordersId: [],
  ordersMap: {},
}

export const ordersCartSlice = createSlice({
  name: 'ordersCart',
  initialState,
  reducers: {
    addOrder: (state, action: PayloadAction<Product>) => {
      const { id } = action.payload

      if (state.ordersMap[id]) {
        state.ordersMap[id].count += 1
      } else {
        state.ordersId.push(id)
        state.ordersMap[id] = {
          count: 1,
          data: action.payload,
        }
      }
    },
    deleteOrder: (state, action: PayloadAction<number>) => {
      state.ordersId = state.ordersId.filter((id) => id !== action.payload)
      delete state.ordersMap[action.payload]
    },
    setOrderCount: (state, action: PayloadAction<{ id: number; count: number }>) => {
      state.ordersMap[action.payload.id].count = action.payload.count
    },
  },
})
