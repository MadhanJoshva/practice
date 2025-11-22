import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItem:[],
    total:0,
}

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart(state,action){
            const item = state.cartItem.find(i=>i.id===action.payload.id)
            if(item){
                item.qty +=1;
            }else{
                state.cartItem.push({...action.payload,qty:1})
            }
        },
        removeCart(state,action){
            state.cartItem = state.cartItem.filter(i=>i.id !== action.payload) 
        },
        incrementCart(state,action){
            const item = state.cartItem.find(i=>i.id === action.payload.id)
            if(item){
                item.qty +=1;
            }
        },
        decrementCart(state,action){
            const item = state.cartItem.find(i=>i.id == action.payload.id)
             if(item && item.qty>1){
               item.qty -=1;
             }
        },
    },
})

export const { addToCart, removeCart, incrementCart, decrementCart } = cartSlice.actions;

export default cartSlice.reducer;