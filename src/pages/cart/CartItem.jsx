import { useContext } from "react";
import React from "react";
import { ShopContext } from "../../context/shop-context";
export function CartItem ({product}) {
    const {cartItems,addToCart,removeFromCart,updateCartAmount} = useContext(ShopContext)
    const {id} = product
    const removeDisabled = (e) => {
         return e.disabled = false
    }
    return (
       <div className="cartItem">
            <img src= {product.thumbnail} />
            <div className="description">
                <p>
                    <b>{product.title}</b>
                </p>
                <p>{product.price}DT</p>
                <div className="countHandler">
                    <button onClick={()=>removeFromCart(id)}>-</button>
                    <input  type = "text"  onClick={removeDisabled} value={cartItems[id]}onChange={(e) => updateCartItemCount(Number(e.target.value), id)}/>
                     <button onClick={()=>addToCart(id)}>+</button>
                </div>
            </div>
       </div>

    )
}