import React from "react"
import Product from "../components/Product"
import {Context} from "../Context"


export default function Products() {
    //havrest id, src and isfavorite from the provider array
    const {products} = React.useContext(Context)
    
    return (
            <main className="grid-container">
                {products.map((product, index)=><Product key={index} product={product} index={index}/>) }
            </main>
           
    )
}