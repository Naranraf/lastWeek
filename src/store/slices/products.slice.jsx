import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { setIsLoading } from "./isLoading.slice";

export const productSlice = createSlice({
  name: "products",
  initialState: [],
  reducers: {
    getProducts: (state, action) => {
      return action.payload;
    }
  }
});

export const { getProducts } = productSlice.actions;

export default productSlice.reducer;

export const getProductsThunk = () => (dispatch) => {
  dispatch(setIsLoading(true));

  axios
    .get("https://e-commerce-api-v2.academlo.tech/api/v1/products/")
    .then((resp) => {
      dispatch(getProducts(resp.data));
      console.log(resp.data);
    })
    .catch((error) => console.error(error))
    .finally(() => dispatch(setIsLoading(false)));
};
