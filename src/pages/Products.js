import React from "react"
import Product from "../components/Product"
import {Context} from "../Context"


export default function Photos() {
    //havrest id, src and isfavorite from the provider array
    const {products} = React.useContext(Context)
    
    return (
            <main className="photos">
                {products.map((photoObj, index)=><Product key={index} image={photoObj} index={index}/>) }
            </main>
           
    )
}