import { fetchWishlist } from './actions';

const wishlistExtraReducers = (builder) => {
  builder
  // Get all the products in the wishlist
    .addCase(fetchWishlist.pending, (state) => {
      state.wishlistLoading = true;
      state.wishlistError = null;
    })
    .addCase(fetchWishlist.fulfilled, (state, action) => {
      state.wishlistLoading = false;
      state.wishlistData = action.payload;
    })
    .addCase(fetchWishlist.rejected, (state, action) => {
      state.wishlistLoading = false;
      state.wishlistError = action.error.message;
    });
};

export default wishlistExtraReducers;
