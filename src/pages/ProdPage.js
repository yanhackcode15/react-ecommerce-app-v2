import React from "react"
import {Context} from "../Context"
import {useParams} from "react-router-dom"

export default function ProdPage() {
    const {id} = useParams()
    const {products} = React.useContext(Context)
    const product = products.find(product=>product.id===+id)
    console.log('product', product)
    React.useEffect(()=>{}, [product])
    const renderPage=()=>(
        <div className="product-page-container">
        <div className="product-image"><img className="product-image" src={product.image}/></div>
        <div className="product-info">
            <h2>{product.title}</h2>
            <h4>{product.description}</h4>
            <h4>{product.price}</h4>
            <button>Checkout</button>
        </div>
        </div>
    )
    return (
        <div>
            {product? renderPage(): "loading..."}
            
        </div>
    )
}