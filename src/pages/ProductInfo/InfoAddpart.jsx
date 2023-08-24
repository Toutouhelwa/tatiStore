import "./info.css"
import { useContext } from "react";
import React from "react";
import { ShopContext } from "../../context/shop-context";
export default function InfoAddpart ({product}) {
    const {cartItems,addToCart} = useContext(ShopContext)
    const cartItemCount = cartItems[product.id]
    return(
        <div style={{textAlign:"center"}}>
            <h2>Price : {product.price} DNT</h2>
            <div>
                <h3>old Price: <del >{Math.floor((product.price/(1-(product.discountPercentage / 100)))) } DNT</del></h3>
                <div className="discount-info">
                    <h3><span style={{color:"black"}}>discount :</span>-{product.discountPercentage}% off</h3>
                </div>
            </div>
            <button className="addToCartBttn" onClick={() => addToCart(product.id)}>Add to Cart {cartItemCount > 0 && <> ({cartItemCount})</>}</button>


        </div>
    )
}