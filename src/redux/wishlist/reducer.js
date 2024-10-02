import { fetchWishlist, addToWishlist, deleteFromWishlist } from './actions';

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
    })

  // Add a product to the wishlist
  .addCase(addToWishlist.pending, (state) => {
    state.wishlistLoading = true;
    state.wishlistError = null;
  })
  .addCase(addToWishlist.fulfilled, (state, action) => {
    state.wishlistLoading = false;
    state.wishlistData.push(action.payload);
  })
  .addCase(addToWishlist.rejected, (state, action) => {
    state.wishlistLoading = false;
    state.wishlistError = action.error.message;
  })

  // delete product form the wishlist
  .addCase(deleteFromWishlist.pending, (state) => {
    state.wishlistLoading = true;
    state.wishlistError = null;
  })
  .addCase(deleteFromWishlist.fulfilled, (state, action) => {
    state.wishlistLoading = false;
    state.wishlistData.pop(action.payload);
  })
  .addCase(deleteFromWishlist.rejected, (state, action) => {
    state.wishlistLoading = false;
    state.wishlistError = action.error.message;
  });
};

export default wishlistExtraReducers;
