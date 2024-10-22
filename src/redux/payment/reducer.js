import { onlinePayment } from './actions';

const paymentExtraReducers = (builder) => {
  builder
  // Online payment
    .addCase(onlinePayment.pending, (state) => {
      state.paymentLoading = true;
      state.paymentError = null;
    })
    .addCase(onlinePayment.fulfilled, (state, action) => {
      state.paymentLoading = false;
      state.paymentData = action.payload;
    })
    .addCase(onlinePayment.rejected, (state, action) => {
      state.paymentLoading = false;
      state.paymentError = action.error.message;
    })

};

export default paymentExtraReducers;
