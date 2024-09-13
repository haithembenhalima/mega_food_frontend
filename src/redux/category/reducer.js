import { fetchCategories } from './actions';

const categoryExtraReducers = (builder) => {
  builder
    .addCase(fetchCategories.pending, (state) => {
      state.catgeoryLoading = true;
      state.categoryError = null;
    })
    .addCase(fetchCategories.fulfilled, (state, action) => {
      state.catgeoryLoading = false;
      state.categoryData = action.payload;
    })
    .addCase(fetchCategories.rejected, (state, action) => {
      state.catgeoryLoading = false;
      state.categoryError = action.error.message;
    });
};

export default categoryExtraReducers;
