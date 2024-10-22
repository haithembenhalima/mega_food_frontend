import { fetchCart, addToCart, deleteFromCart } from './actions';

const cartExtraReducers = (builder) => {
  builder
  // Get all the products in the Cart
    .addCase(fetchCart.pending, (state) => {
      state.cartLoading = true;
      state.cartError = null;
    })
    .addCase(fetchCart.fulfilled, (state, action) => {
      state.cartLoading = false;
      state.cartData = action.payload;
    })
    .addCase(fetchCart.rejected, (state, action) => {
      state.cartLoading = false;
      state.cartError = action.error.message;
    })

  // Add a product to the Cart
  .addCase(addToCart.pending, (state) => {
    state.cartLoading = true;
    state.cartError = null;
  })
  .addCase(addToCart.fulfilled, (state, action) => {
    console.log('Before adding:', state.cartData);
    if (Array.isArray(state.cartData)) {
      state.cartData.push(action.payload);
    } else {
      console.error('cartData is not an array:', state.cartData);
    }
  })
  .addCase(addToCart.rejected, (state, action) => {
    state.cartLoading = false;
    state.cartError = action.error.message;
  })

  // delete product form the Cart
  .addCase(deleteFromCart.pending, (state) => {
    state.cartLoading = true;
    state.cartError = null;
  })
  .addCase(deleteFromCart.fulfilled, (state, action) => {
    console.log('Before deleting:', state.cartData);
    if (Array.isArray(state.cartData)) {
      state.cartData = state.cartData.filter(item => item.id !== action.payload);
    } else {
      console.error('cartData is not an array:', state.cartData);
    }
  })
  .addCase(deleteFromCart.rejected, (state, action) => {
    state.cartLoading = false;
    state.cartError = action.error.message;
  });
};

export default cartExtraReducers;
