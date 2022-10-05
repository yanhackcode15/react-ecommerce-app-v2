import React from "react"

const Context = React.createContext()

function ContextProvider(props) {
    const [products, setProducts] = React.useState([])
    const sessionStorageCartedItems = JSON.parse(sessionStorage.getItem('cartedItems'))
    const [cartedItems, setCartedItems] = React.useState(sessionStorageCartedItems?sessionStorageCartedItems:[])
    const api="https://fakestoreapi.com/products?limit=100"
   
    React.useEffect(()=>{
        const productJson = sessionStorage.getItem('ecommerceProducts')
        console.log('productJson', productJson)
        if (productJson && productJson.length){
            setProducts(JSON.parse(productJson))
        }
        else {
            fetch(api)
            .then((response)=>{
                if (response.ok){
                    return response.json()
                }
                else {
                    throw response
                }})
            .then(data=>{
                sessionStorage.setItem('ecommerceProducts', JSON.stringify(data))
                setProducts(data)
            })
            .catch(error=>console.error("error fetching", error))
        }

    }, [])
    React.useEffect(()=>{
        sessionStorage.setItem('cartedItems', JSON.stringify(cartedItems))
    },[cartedItems])

    function toggleFavorite(image) {
        const updatedArray = products.map(product=>{
            if(product.id===image.id){
                return {...product, isFavorite:!product.isFavorite}
            }
            else {
                return product
            }
        })

        setProducts(updatedArray)
    }
    function addToCart(product){
        setCartedItems(prev=>{
            return [...prev, product] 
        })
    }
    function removeFromCart(product){
        setCartedItems(prev=>{
            return prev.filter(item=>product.id!==item.id)
        })
    }
   
    return (
        <Context.Provider value={{products, toggleFavorite, cartedItems, setCartedItems, addToCart, removeFromCart}}>
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvider, Context} 