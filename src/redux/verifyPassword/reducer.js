import { verifyAction } from './actions';

const verifyExtraReducers = (builder) => {
  builder
    .addCase(verifyAction.pending, (state) => {
      state.verifyLoading = true;
      state.verifyError = null;
    })
    .addCase(verifyAction.fulfilled, (state, action) => {
      state.verifyLoading = false;
      state.verifyData = action.payload;
    })
    .addCase(verifyAction.rejected, (state, action) => {
      state.verifyLoading = false;
      state.verifyError = action.error.message;
    });
};

export default verifyExtraReducers;
