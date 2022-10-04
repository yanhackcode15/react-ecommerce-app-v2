import React from "react"
import {BrowserRouter, HashRouter, Route, Routes, Link} from "react-router-dom"
import Header from "./components/Header"
import Products from "./pages/Products"
import Cart from "./pages/Cart"
import Confirmation from "./pages/Confirmation"
import ProdPage from "./pages/ProdPage"

//new react router 6 changed how component is nested in the routes

export default function App() {
    return (
        <HashRouter>
            <div>
                <Header />
                <Routes>
                    <Route path="cart" element={<Cart />}></Route>
                    <Route path="" element={<Products />}></Route>
                    <Route path="confirmation/:price" element={<Confirmation />}></Route>
                    <Route path="product/:id" element={<ProdPage />}></Route>

                </Routes>
            </div>
        </HashRouter>
    )
}