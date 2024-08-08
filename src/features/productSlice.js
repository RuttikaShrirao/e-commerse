import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    getProducts: (state, action) => {
      // fetch("https://fakestoreapi.com/products")
      // .then(res=>res.json())
      // .then(data =>
      //   state.products = [...data]
      // )
      state.products.push(...action.payload)
    },
    updateProduct: (state, action) => {
      const index = state.products.findIndex(product => product.id === action.payload.id);
      state.products[index] = action.payload;
    },
    deleteProduct: (state, action) => {
      console.log(state.products,"-------delete-------",action.payload.id)
      state.products = state.products.filter(product => product.id !== action.payload.id);
    }
  },
});

export const { getProducts, updateProduct, deleteProduct } = productSlice.actions;
export default productSlice.reducer;
