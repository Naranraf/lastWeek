import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { setIsLoading } from "./isLoading.slice";

export const getProducts = createAsyncThunk("products/getProducts", async () => {
  try {
    const response = await axios.get(`https://e-commerce-api-v2.academlo.tech/api/v1/products/`);
    return response.data;
   
  } catch (error) {
    console.error("Error al obtener los productos:", error);
    throw error;
  }
});

const productSlice = createSlice({
  name: "products",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const { getProducts: getProductsAction } = productSlice.actions;
export default productSlice.reducer;

export const getProductsThunk = () => (dispatch) => {
  dispatch(setIsLoading(true));
  axios
    .get("https://e-commerce-api-v2.academlo.tech/api/products")
    .then((resp) => dispatch(getProductsAction(resp.data)))
    .catch((error) => alert("No sirve la API"))
    .finally(() => dispatch(setIsLoading(false)));
};
