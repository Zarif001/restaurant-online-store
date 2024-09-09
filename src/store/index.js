import { createSlice, configureStore } from "@reduxjs/toolkit";
const initialState = {
  selectedCategory: null,
  products:[],
  cartItems: [],
  totalQuantity: 0,
  overallPrice: 0,
  status: null,
  order: false
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    filteredByCategory(state, action) {
      state.selectedCategory = action.payload;
    },
    addItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === newItem.id);
      state.totalQuantity++;

      if (!existingItem) {
        state.cartItems.push({
          ...newItem,
          quantity: 1,
          totalPrice: newItem.price, 
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price; 
      }

      state.overallPrice = state.cartItems.reduce((total, item) => total + item.totalPrice, 0 );
    },
    removeItem(state, action) {
      const id = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === id);

      if (existingItem) {
        if (existingItem.quantity === 1) {
          state.cartItems = state.cartItems.filter((item) => item.id !== id);
          state.totalQuantity--; 
        } else {
          existingItem.quantity--;
          existingItem.totalPrice -= existingItem.price; 
          state.totalQuantity--; 
        }
      }
      state.overallPrice = state.cartItems.reduce((total, item) => total + item.totalPrice, 0 );
    }, 
    pageReload(state) {
      state.order = false
    },
    clearItems(state) {
      state.cartItems = [],
      state.overallPrice = 0,
      state.totalQuantity = 0,  
      state.order = true

    },
   
    fetchPending(state) {
        state.status = 'loading'
    },
    fetchSuccess(state) {
        state.status = 'success'

    },
    fetchError(state) {
      state.status = 'error'
    },
    fetchDataGet(state, action) {
      state.products = action.payload
    },
    fetchCartItemsGet(state, action) {
      state.cartItems = action.payload || [];
      state.totalQuantity = state.cartItems.reduce((total, item) => total + item.quantity, 0);  
      state.overallPrice = state.cartItems.reduce((total, item) => total + item.totalPrice, 0 );
    },
  },
});

const store = configureStore({
  reducer: {
    products: productSlice.reducer,
  },
});

export const productActions = productSlice.actions;
export default store;
