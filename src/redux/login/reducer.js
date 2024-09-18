import { loginAction } from './actions';

const loginExtraReducers = (builder) => {
  builder
    .addCase(loginAction.pending, (state) => {
      state.loginLoading = true;
      state.loginError = null;
    })
    .addCase(loginAction.fulfilled, (state, action) => {
      state.loginLoading = false;
      state.loginData = action.payload;
    })
    .addCase(loginAction.rejected, (state, action) => {
      state.loginLoading = false;
      state.loginError = action.error.message;
    });
};

export default loginExtraReducers;
