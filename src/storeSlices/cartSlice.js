import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems : [],
  subTotal : 0,
  shippingCharges : 0,
  tax : 0,
  total : 0,
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const isItemExist = state.cartItems.find(e => e.id === item.id )
      isItemExist ? state.cartItems.forEach( e => {
        if(e.id === item.id)  e.quantity++ ;
      }) :
      state.cartItems.push(item);
    },
    removeFromCart : (state, action) => {
      console.log(action.payload);
      state.cartItems = state.cartItems.filter( (e) => e.id !== action.payload) 
    },
    increment : (state, action) => {
      state.cartItems.forEach( (e) => {
        if(e.id === action.payload ){
          if(e.quantity < e.rating.count){
            e.quantity++;
          }
        }
      })
    },
    decrement : (state, action) => {
      state.cartItems.forEach( (e) => {
        if(e.id === action.payload ){
          if(e.quantity > 1){
            e.quantity--;
          }
        }
      })
    },
    calculatePrice : (state) => {
      state.subTotal = Number(state.cartItems.reduce((acc, i) => acc + i.price * i.quantity, 0).toFixed())
      state.shippingCharges =  state.subTotal > 2000 ? 0 : 149
      state.tax = Number((state.subTotal * 0.18 ).toFixed(0))
      state.total = state.shippingCharges + state.tax + state.subTotal;
    }
  },
});

export const { addToCart, removeFromCart,  increment, decrement, calculatePrice} = cartSlice.actions;
export default cartSlice.reducer;
