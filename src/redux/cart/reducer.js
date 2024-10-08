import { fetchCart, addToCart, deleteFromCart } from './actions';

const CartExtraReducers = (builder) => {
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
    state.cartLoading = false;
    state.cartData.push(action.payload);
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
    state.cartLoading = false;
    state.cartData.pop(action.payload);
  })
  .addCase(deleteFromCart.rejected, (state, action) => {
    state.cartLoading = false;
    state.cartError = action.error.message;
  });
};

export default CartExtraReducers;
