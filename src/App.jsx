import React, { useEffect } from 'react'
import Navbar from './component/navbar/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Products from './component/products/Products'
import Cart from './component/cart/Cart'
import ProductDetail from './component/productDetail/ProductDetail'
import axios from 'axios'
import Footer from './component/footer/Footer'
import './App.css'
import Home from './page/Home'

const App = () => {
  // useEffect(()=>{
  //   axios.get('https://dummyjson.com/products')
  //   .then(res =>{
  //     console.log(res)
  //   })
  // },[])
  return (
    <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/Products' element={<Products/>} />
            <Route path='/Cart' element={<Cart/>} />
            <Route path='/ProductDetail/:id' element={<ProductDetail/>} />
        </Routes>
        <Footer/>
    </BrowserRouter>
  )
}

export default App