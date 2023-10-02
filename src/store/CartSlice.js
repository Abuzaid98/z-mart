import { createSlice } from "@reduxjs/toolkit";
let cartFromLocalStorage = JSON.parse(localStorage.getItem("z-cart")) || []
const initialState={
    cart:cartFromLocalStorage,
    subTotal:""
}
export const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addCart:(state, action)=>{
            const obj = {...action.payload, q:1}
            const rcds = [...state.cart]
            const index = rcds.findIndex(row => row.id === obj.id)
            if(index === -1){
                rcds.push(obj)
            }
            else{
                rcds[index].q = rcds[index].q + obj.q
            }
            state.cart = rcds ;
        },
        increaseItem:(state, action)=>{
            const rcds = [...state.cart]
            const index = rcds.findIndex(row => row.id === action.payload.id )
            if(index !== -1){
                rcds[index].q +=1
            }
            state.cart = rcds 
        },
        deacreaseItem:(state, action)=>{
            const rcds = [...state.cart]
            const index = rcds.findIndex(row => row.id === action.payload.id)
            if(index !== -1 && rcds[index].q > 1){
                rcds[index].q -=1
            }
            state.cart = rcds ;
        }, 
        totalPrice  :(state, action)=>{
            let price = state.cart.reduce((initialVal, curVal)=>{
                let {price, q} = curVal
                initialVal = initialVal + price*q
                return initialVal ;
            },0)
            state.subTotal= price ;
        },  
        removeCartItem: (state, action)=>{
            state.cart.splice(action.payload, 1)
        }
    }
})
export const {addCart,removeCartItem, increaseItem, deacreaseItem, totalPrice}= cartSlice.actions
export default cartSlice.reducer 