// import { createSlice } from "@reduxjs/toolkit";
// import axios from "axios";


// let initialState={
//     products:[],
// }
// const ProductSlice = createSlice({
//     name:'product',
//     initialState,
//     reducers : {
//         setProducts:(state, action) => {
//             state.products = action.payload
//         },
//     },
// })

// export const fetchProducts =()=>{
//     return (dispatch)=>{
//         axios.get('https://fakestoreapi.com/products')
//         .then(res =>{
//             dispatch(setProducts(res.data))
//         })

//     }
// }
// export const {setProducts} = ProductSlice.actions
// export default ProductSlice.reducer ;





// ExtraRuducer


import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    products: [],
    jewelery:[],
    men:[],
    womens:[],
    electronic:[],
    status: 'idle'
}

const ProductSlice = createSlice({
    name: 'product',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state, action) => {
                state.status = "wait"
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                // if(action.meta.arg === '')
                if(action.meta.arg === 'products/category/jewelery'){
                    state.jewelery = action.payload
                }
                if(action.meta.arg === `products/category/men's clothing`){
                    state.men = action.payload
                }
                if(action.meta.arg === `products/category/women's clothing`){
                    state.womens = action.payload
                }
                if(action.meta.arg === `products/category/electronics`){
                    state.electronic = action.payload
                }
                if(action.meta.arg === 'products'){
                    state.products = action.payload
                }
                state.status = "idle"
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = "error"
            })
    }
})

export const fetchProducts =  createAsyncThunk(
    'product/getFromAPI',
    async (url) => {
        const response = await axios.get(`https://fakestoreapi.com/${url}`)
        return response.data
    }
)

// export const CategoryProducts =  createAsyncThunk(
//     'product/getFromAPI',
//     async (url) => {
//         const response = await axios.get('https://fakestoreapi.com/products')
//         return response.data
//     }
// )

export default ProductSlice.reducer






















