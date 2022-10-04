import React from "react"
import {Context} from "../Context"
import { useParams } from "react-router-dom"

export default function ProdPage() {
    const {id} = useParams()
    const {products} = React.useContext(Context)
    const product = products.find(product=>product.id===+id)
    console.log('product', product)
    React.useEffect(()=>{}, [product])
    const renderPage=()=>(
        <>
        <div><img src={product.image}/></div>
        <h2>Product Title</h2>
        <h6>Product Description</h6>
        <h6>Product Price</h6>
        <button>Checkout</button>
        </>
    )
    return (
        <div className="product-page-container">
            {product? renderPage(): "loading..."}
            
        </div>
    )
}