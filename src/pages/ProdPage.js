import React from "react"
import {Context} from "../Context"
import {useParams} from "react-router-dom"

export default function ProdPage() {
    const {id} = useParams()
    const {products, cartedItems, removeFromCart, addToCart} = React.useContext(Context)
    const product = products.find(product=>product.id===+id)
    React.useEffect(()=>{}, [product])
    function showCartIcons(){
        return (
            <button onClick={()=>{
            cartedItems.find(item=>product.id===item.id)?removeFromCart(product):addToCart(product)
            }}> 
                {cartedItems.find(item=>product.id===item.id)?"REMOVE FROM CART":"ADD TO CART"} 
            </button>
            )
        
    }
    function renderPage(){
        return (
            <div className="product-page-container">
                <div className="product-image grid-item"><img className="product-image" src={product.image}/></div>
                <div className="product-info grid-item">
                    <h2>{product.title}</h2>
                    <h4>{product.description}</h4>
                    <h4>{product.price}</h4>
                    {showCartIcons()}
                </div>
            </div>
    )}
    return (
        <div>
            {product? renderPage(): "loading..."}
            
        </div>
    )
}