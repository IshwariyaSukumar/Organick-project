import { configureStore } from "@reduxjs/toolkit";
import itemReducer from '../features/cartSlice';


 const store=configureStore({
    reducer:{
      item:itemReducer,
    },
})

export default store;