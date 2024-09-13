import { fetchProducts } from './actions';

const productExtraReducers = (builder) => {
  builder
    .addCase(fetchProducts.pending, (state) => {
      state.productLoading = true;
      state.productError = null;
    })
    .addCase(fetchProducts.fulfilled, (state, action) => {
      state.productLoading = false;
      state.productData = action.payload;
    })
    .addCase(fetchProducts.rejected, (state, action) => {
      state.productLoading = false;
      state.productError = action.error.message;
    });
};

export default productExtraReducers;
