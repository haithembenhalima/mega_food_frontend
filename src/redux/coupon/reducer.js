import { fetchCoupon, addCoupon, deleteCoupon, applyCoupon } from './actions';

const couponExtraReducers = (builder) => {
  builder
  // Get all the coupons in the coupon
    .addCase(fetchCoupon.pending, (state) => {
      state.couponLoading = true;
      state.couponError = null;
    })
    .addCase(fetchCoupon.fulfilled, (state, action) => {
      state.couponLoading = false;
      state.couponData = action.payload;
    })
    .addCase(fetchCoupon.rejected, (state, action) => {
      state.couponLoading = false;
      state.couponError = action.error.message;
    })

  // Add a coupon to the coupon
  .addCase(addCoupon.pending, (state) => {
    state.couponLoading = true;
    state.couponError = null;
  })
  .addCase(addCoupon.fulfilled, (state, action) => {
    console.log('Before adding:', state.couponData);
    if (Array.isArray(state.couponData)) {
      state.couponData.push(action.payload);
    } else {
      console.error('couponData is not an array:', state.couponData);
    }
  })
  .addCase(addCoupon.rejected, (state, action) => {
    state.couponLoading = false;
    state.couponError = action.error.message;
  })

  // delete coupon form the coupon
  .addCase(deleteCoupon.pending, (state) => {
    state.couponLoading = true;
    state.couponError = null;
  })
  .addCase(deleteCoupon.fulfilled, (state, action) => {
    console.log('Before deleting:', state.couponData);
    if (Array.isArray(state.couponData)) {
      state.couponData = state.couponData.filter(item => item.id !== action.payload);
    } else {
      console.error('couponData is not an array:', state.couponData);
    }
  })
  .addCase(deleteCoupon.rejected, (state, action) => {
    state.couponLoading = false;
    state.couponError = action.error.message;
  })

  // Apply the coupon
  .addCase(applyCoupon.pending, (state) => {
    state.couponLoading = true;
    state.couponError = null;
  })
  .addCase(applyCoupon.fulfilled, (state, action) => {
    state.couponLoading = false;
    state.couponData = action.payload;
  })
  .addCase(applyCoupon.rejected, (state, action) => {
    state.couponLoading = false;
    state.couponError = action.error.message;
  });
};

export default couponExtraReducers;
