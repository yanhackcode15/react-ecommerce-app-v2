import React from "react"
import {Link} from "react-router-dom"
import {Context} from "../Context"

export default function Header() {
    const {cartedItems} =React.useContext(Context)
    return (
        <header>
            <Link exact="true" to="/"><h2>React Online Store</h2></Link>
            <Link to="/cart"><i className={`ri-shopping-cart-${cartedItems.length?"fill":"line"} ri-fw ri-2x`}></i></Link>
        </header>
    )
}