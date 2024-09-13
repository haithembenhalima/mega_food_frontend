import { configureStore } from '@reduxjs/toolkit'
import CategoryReducer from './category/slice'
import ProductReducer from './product/slice'

export default configureStore({
  reducer: {
    category: CategoryReducer,
    product: ProductReducer
  },
})