import { configureStore } from '@reduxjs/toolkit'
import CategoryReducer from './reducers/category'
import ProductReducer from './reducers/product'

export default configureStore({
  reducer: {
    category: CategoryReducer,
    product: ProductReducer
  },
})