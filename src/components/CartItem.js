import React from "react"
import {Context} from "../Context"

export default function CartItem({item}) {
    const {removeFromCart} = React.useContext(Context)

    return (
        <div className="row" key={item.id}>
            <i className="ri-delete-bin-line" onClick={()=>removeFromCart(item)}></i>
            <img className="thumbnail" src={item.image}/>
            <p>{`$${item.price}`}</p>
        </div>
    )
}