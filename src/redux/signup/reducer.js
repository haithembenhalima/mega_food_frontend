import { signupAction } from './actions';

const signupExtraReducers = (builder) => {
  builder
    .addCase(signupAction.pending, (state) => {
      state.signupLoading = true;
      state.signupError = null;
    })
    .addCase(signupAction.fulfilled, (state, action) => {
      state.signupLoading = false;
      state.signupData = action.payload;
    })
    .addCase(signupAction.rejected, (state, action) => {
      state.signupLoading = false;
      state.signupError = action.error.message;
    });
};

export default signupExtraReducers;
