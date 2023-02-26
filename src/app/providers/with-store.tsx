import React from 'react'
import { Provider } from 'react-redux'
import { persistor, store } from '../store'
import { PersistGate } from 'redux-persist/integration/react'

export const withStore = (component: () => React.ReactNode) => () =>
  (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        {component()}
      </PersistGate>
    </Provider>
  )
