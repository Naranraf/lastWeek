import { createSlice } from "@reduxjs/toolkit";
import { setIsLoading } from "./isLoading.slice";
import axios from "axios";

export const newsSlice = createSlice({
  name: "news",
  initialState: [],
  reducers: {
    setNews: (state, action) => {
      return action.payload;
    }
  }
});

export const { setNews } = newsSlice.actions;

export default newsSlice.reducer;

// redux thunk / middlewares
// Se ejecutan entre el dispatch y la accion

/*
export const myFunctionThunk = () => dispatch => {
    //Tareas a realizar
    dispatch( actionName1() )

    //Mas tareas
    dispatch( actionName2() )
}
*/

export const getNewsThunk = () => (dispatch) => {
  dispatch(setIsLoading(true));

  axios
    .get("https://e-commerce-api-v2.academlo.tech/")
    .then((resp) => dispatch(setNews(resp.data)))
    .catch((error) => console.error(error))
    .finally(() => dispatch(setIsLoading(false)));
  //.finally(() => {}) -> metodo que se ejecuta cuando la promesa es resuelta (no importa si fue satisfactoria o rechazada)
};


export const filterheadLineThunk = value => dispatch =>{
  dispatch(setIsLoading(true));
  axios
  .get(`https://e-commerce-api-v2.academlo.tech/categories`)
  .then(resp => dispatch(setNews(resp.data)))
  .cath(error => console.error(error) )
  .finally(() => dispatch(setIsLoading(false)))
}