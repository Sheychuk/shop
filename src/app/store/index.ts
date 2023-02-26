import { combineReducers, configureStore } from '@reduxjs/toolkit'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { productListApi } from 'entities/product'
import { ordersCartSlice } from 'entities/order'

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  blacklist: [productListApi.reducerPath],
}

const rootReducer = combineReducers({
  [productListApi.reducerPath]: productListApi.reducer,
  ordersCart: ordersCartSlice.reducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(productListApi.middleware),
})

export const persistor = persistStore(store)
