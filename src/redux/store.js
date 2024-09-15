import { configureStore } from '@reduxjs/toolkit'
import CategoryReducer from './category/slice'
import ProductReducer from './product/slice'
import SignupReducer from './signup/slice'
export default configureStore({
  reducer: {
    category: CategoryReducer,
    product: ProductReducer,
    signup: SignupReducer, 
  },
})