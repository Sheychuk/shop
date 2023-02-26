import { Routes, Route } from 'react-router'
import { lazy } from 'react'

const ProductsListPage = lazy(() => import('./home'))

export const Routing = () => {
  return (
    <Routes>
      <Route path='/' element={<ProductsListPage />} />
      {/* <Route path='/:taskId' element={<ProductDetailsPage />} />*/}
    </Routes>
  )
}
