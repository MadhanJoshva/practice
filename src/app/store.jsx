
import {configureStore} from '@reduxjs/toolkit'
import cartreducer from '../cart/cartSlice.jsx'
import userreducer from '../user/userSlice.jsx'

console.log("cartReducer:", cartreducer);
export const store = configureStore ({
    reducer:{
        cart: cartreducer,
        user: userreducer
    },
})