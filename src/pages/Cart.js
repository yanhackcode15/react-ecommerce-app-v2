import React from "react"
import {Link, useNavigate} from "react-router-dom"
import {Context} from "../Context"
import CartItem from "../components/CartItem"
import {PayPalButtons} from "@paypal/react-paypal-js"

//store cart in local storage
export default function Cart() {
    const {cartedItems, setCartedItems} = React.useContext(Context)
    const navigate = useNavigate();

    function placeOrder() {
        setCartedItems([])
    }
    function calcTotalPrice(){
       return cartedItems.reduce((total, item)=>(total+item.price),0)
    }
    const totalPrice = calcTotalPrice()
    return (
        <main className="cartPage">
            <h1>Checkout</h1>
            <div className="cart-items">
                {cartedItems.map(item=>(<CartItem key={item.id} item={item} />
        ))}
            </div>
            <h2>{`Total: $${totalPrice}`}</h2>
            {cartedItems.length?
            <PayPalButtons
                className="paypal-buttons"
                createOrder={(data, actions) => {
                    return actions.order.create({
                        purchase_units: [
                            {
                                amount: {
                                    value: totalPrice,
                                },
                            },
                        ],
                    });
                }}
                onApprove={(data, actions) => {
                    return actions.order.capture().then((details) => {
                        const name = details.payer.name.given_name;
                        alert(`Transaction completed by ${name}`);
                        navigate(`/confirmation/${encodeURIComponent(totalPrice)}`)
                    })
                }}
            />
            : <h2>Add something to the cart...</h2>}
                
        </main>
    )
}