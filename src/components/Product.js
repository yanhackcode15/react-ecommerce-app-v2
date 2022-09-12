import React from "react"
import getClassName from "../utilities/util"
import {Context} from "../Context"

export default function Product({image, index}){
    const {toggleFavorite, addToCart, removeFromCart, cartedItems } = React.useContext(Context)
    const [isHovered, setIsHovered] = React.useState(false)
    
    function hoverOn(){
        setIsHovered(true)
    }

    function hoverOff(){
        setIsHovered(false)
    }

    function showFavoriteIcons(){
        if (isHovered || image.isFavorite ){
            return (<i className={`heart ri-heart-${image.isFavorite?"fill":"line"}`} 
                    onClick={()=>toggleFavorite(image)}></i>)
        }

    }
    function showCartIcons(){
        if (isHovered || cartedItems.find(item=>image.id===item.id)){
            return (<i className={`cart ri-shopping-cart-${cartedItems.find(item=>image.id===item.id)?"fill":"line"}`} 
                onClick={()=>{
                    cartedItems.find(item=>image.id===item.id)?removeFromCart(image):addToCart(image)
                }}></i>)
        }
    }

    return (
        <div className={`grid-image`} onMouseOver={hoverOn} onMouseOut={hoverOff}>
            {showFavoriteIcons()}
            {showCartIcons()}
            <img className="photo" src={image.image}/>      
        </div>
    )
}