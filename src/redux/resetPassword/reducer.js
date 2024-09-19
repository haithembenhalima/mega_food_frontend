import { resetAction } from './actions';

const resetExtraReducers = (builder) => {
  builder
    .addCase(resetAction.pending, (state) => {
      state.resetLoading = true;
      state.resetError = null;
    })
    .addCase(resetAction.fulfilled, (state, action) => {
      state.resetLoading = false;
      state.resetData = action.payload;
    })
    .addCase(resetAction.rejected, (state, action) => {
      state.resetLoading = false;
      state.resetError = action.error.message;
    });
};

export default resetExtraReducers;
