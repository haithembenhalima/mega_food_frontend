import { forgotAction } from './actions';

const forgotExtraReducers = (builder) => {
  builder
    .addCase(forgotAction.pending, (state) => {
      state.forgotLoading = true;
      state.forgotError = null;
    })
    .addCase(forgotAction.fulfilled, (state, action) => {
      state.forgotLoading = false;
      state.forgotData = action.payload;
    })
    .addCase(forgotAction.rejected, (state, action) => {
      state.forgotLoading = false;
      state.forgotError = action.error.message;
    });
};

export default forgotExtraReducers;
