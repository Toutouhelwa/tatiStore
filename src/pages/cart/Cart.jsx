import { useContext } from "react"
import { ShopContext } from "../../context/shop-context"
import { CartItem } from "./CartItem"
import { Navigate, useNavigate } from "react-router-dom"
import "./cart.css"
export default function Cart ({Products}) {
    const {cartItems , getTotalAmount} = useContext(ShopContext)
    const Navigate = useNavigate()
    return (
        <div className="cart">
            <div>
                <h1>Your Cart Items</h1>
            </div>
            <div className="cartItems">
            {Products.map((product)=> {
                if(cartItems[product.id] !==0) {
                 return <CartItem product={product} />
                }
            })}
            </div>
            <div className="checkout">
                <p className="subtotal">Subtotal: {getTotalAmount()} DNT</p>
                <button  className = "btn-checkout" onClick={()=>Navigate('/')}>Continue Shopping</button>
                <button className="btn-checkout" onClick={()=>Navigate('/checkout')}>Checkout</button>

            </div>

        </div>
    )
}