import { createSlice } from "@reduxjs/toolkit";

const initialState: any={
    count:0,
    cart:[],
    total:0
} 


export const cartSlice=createSlice(
    {
        name:"item",
        initialState,
        reducers:{
            addCart:(state,action)=>{
                
                const index= state.cart.findIndex(item => item.id === action.payload.id);
                if(index < 0){
                    state.cart.push({id: action.payload.id, data: action.payload, quantity: 1,price:action.payload.discountPrice});
                    
                }
                else{
                    state.cart[index].quantity = state.cart[index].quantity + 1;
                    state.cart[index].price += action.payload.discountPrice;
                    
                }
                
                state.count+=1;
                state.total+=action.payload.discountPrice;
                
            },

        },
});

export const {addCart}=cartSlice.actions;
export default cartSlice.reducer;