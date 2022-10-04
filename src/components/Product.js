import React from "react"
import {Context} from "../Context"
import {Link} from "react-router-dom"

export default function Product({product, index}){
    const {toggleFavorite, addToCart, removeFromCart, cartedItems } = React.useContext(Context)
    const [isHovered, setIsHovered] = React.useState(false)
    
    function hoverOn(){
        setIsHovered(true)
    }

    function hoverOff(){
        setIsHovered(false)
    }

    function showFavoriteIcons(){
        if (isHovered || product.isFavorite ){
            return (<i className={`heart ri-heart-${product.isFavorite?"fill":"line"}`} 
                    onClick={()=>toggleFavorite(product)}></i>)
        }

    }
    function showCartIcons(){
        if (isHovered || cartedItems.find(item=>product.id===item.id)){
            return (<i className={`cart ri-shopping-cart-${cartedItems.find(item=>product.id===item.id)?"fill":"line"}`} 
                onClick={()=>{
                    cartedItems.find(item=>product.id===item.id)?removeFromCart(product):addToCart(product)
                }}></i>)
        }
    }

    return (
        <div className="grid-item" onMouseOver={hoverOn} onMouseOut={hoverOff}>
            {showFavoriteIcons()}
            {showCartIcons()}
           <Link to={`/product/${product.id}`}> <img className="product-image" src={product.image}/></Link>
        </div>
    )
}