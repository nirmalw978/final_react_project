//import {BrowserRouter as Router, Routes, Route, Link, BrowserRouter} from 'react-router-dom';
import {BrowserRouter , Routes,Route} from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import Shop from "./Pages/Shop";
import ShopCatagory from "./Pages/ShopCatagory";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LoginSignup";
import Product from "./Pages/Product";
import Footer from "./components/Footer/Footer";
import React from "react";
import banner1 from "./components/assets/banner1.png"
import banner2 from "./components/assets/banner2.jpg"
import banner3 from "./components/assets/banner3.jpg"
function App() {
    return(
<BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/mens' element={<ShopCatagory banner={banner1} category="men"/>}/>
        <Route path='/womens' element={<ShopCatagory banner={banner2} category="women"/>}/>
        <Route path='/kids' element={<ShopCatagory banner={banner3} category="kid"/>}/>
        <Route path='/product' element={<Product/>}>
            <Route path=':productId' element={<Product/>}/>
            </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>


    </Routes>
    <Footer/>
</BrowserRouter>

    );

}
export default App;
