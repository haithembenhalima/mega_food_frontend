import { configureStore } from '@reduxjs/toolkit'
import CategoryReducer from './category/slice'
import ProductReducer from './product/slice'
import SignupReducer from './signup/slice'
import LoginReducer from './login/slice'
import ForgotPasswordReducer from './forgotPassword/slice'

export default configureStore({
  reducer: {
    category: CategoryReducer,
    product: ProductReducer,
    signup: SignupReducer,
    login: LoginReducer,
    forgotPassword: ForgotPasswordReducer,  
  },
})