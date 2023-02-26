import { useAppDispatch } from 'shared/hooks/redux'
import { bindActionCreators } from '@reduxjs/toolkit'
import { ordersCartSlice } from './ordersCartSlice'

export const useOrderActions = () => {
  const dispatch = useAppDispatch()
  return bindActionCreators(ordersCartSlice.actions, dispatch)
}
