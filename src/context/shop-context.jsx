import {React ,createContext,useState} from "react";
import { PRODUCTS } from "../components/product";
export const ShopContext = createContext(null);
const getDefaultCart = () => {
    let cart = {}
    for (let i=1;i<PRODUCTS.length + 1 ;i++) {
        cart[i] = 0
    }
    return cart 
}
export const ShopContextProvider = (props) => {
    const [cartItems , setCartItems] = useState(getDefaultCart());
    const addToCart = (itemId) => { 
        setCartItems((prev) =>
         (
            {...prev,[itemId]:prev[itemId] +1}
            ))
        }
    const removeFromCart = (itemId) => {
        setCartItems((prev)=> 
        (
            {...prev,[itemId]:prev[itemId] - 1}
            ))
        }
    const updateCartAmount  = (newAmount, itemId) => {
        setCartItems((prev)=>({...prev,[itemId]:newAmount}))
    }
    const getTotalAmount =()=> {
        let totalAmount = 0
        for(const item in cartItems) {
            if(cartItems[item] > 0 ) {
                 let itemInfo = PRODUCTS.find((current)=> current.id === Number(item))
                totalAmount+= cartItems[item] * itemInfo.price
            }
        }
        return totalAmount
    }
    const contextValue = {getTotalAmount,cartItems,addToCart,removeFromCart,updateCartAmount}
    return (
            <ShopContext.Provider value = {contextValue}>
                    {props.children}
            </ShopContext.Provider>
    )
}