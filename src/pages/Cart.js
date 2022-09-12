import React from "react"
import {Link} from "react-router-dom"
import {Context} from "../Context"
import CartItem from "../components/CartItem"

//add a time delay to mimic order placement
export default function Cart() {
    const {cartedItems, setCartedItems} = React.useContext(Context)
    function placeOrder() {
        setCartedItems([])
    }
    function calcTotalPrice(){
       return cartedItems.reduce((total, item)=>(total+item.price),0)
    }
    return (
        <main className="cartPage">
            <h1>Checkout</h1>
            <div className="cart-items">
                {cartedItems.map(item=>(<CartItem item={item} />
        ))}
            </div>
            <h2>{`Total: $${calcTotalPrice()}`}</h2>
            {cartedItems.length?<Link className="place-order" to="/confirmation"><button className="place-order" onClick={placeOrder}>Place Order</button></Link>: <h2>Add something to the cart...</h2>}
        </main>
    )
}