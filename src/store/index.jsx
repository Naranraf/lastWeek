import { configureStore } from '@reduxjs/toolkit';
import isLoading from './slices/isLoading.slice';
import productReducer from './slices/products.slice'; // Cambiar el nombre del import

export default configureStore({
  reducer: {
    isLoading,
    products: productReducer, // Cambiar el nombre del reducer
  },
});
