import { useContext } from "react"
import { ShopContext } from "../../context/shop-context"
import { useState } from "react"
import React from "react"
import { Navigate, useNavigate } from "react-router-dom"
export default function Product ({data}) {
    const Navigate = useNavigate()
    const {addToCart , cartItems} = useContext(ShopContext)
    const cartItemCount = cartItems[data.id]
    const srcImage = data.thumbnail
     return(<div className="product">
        <div className="discount">
            <h3> -{data.discountPercentage}% off</h3>
        </div>
        <img src={srcImage} onClick={() => Navigate(`/ProductInfo/${data.id}`)} />
        <h2>{data.title}</h2>
        <p>{data.description}</p>
        <b> {data.price}DNT<del >{Math.floor((data.price/(1-(data.discountPercentage / 100)))) }DNT</del></b>
        <button className="addToCartBttn" onClick={() => addToCart(data.id)}>Add to Cart {cartItemCount > 0 && <> ({cartItemCount})</>}</button>
    </div>)

}