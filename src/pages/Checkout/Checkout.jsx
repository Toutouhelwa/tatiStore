import { useContext } from "react"
import { ShopContext } from "../../context/shop-context"
import "./Checkout.css"
export function  Checkout ({Products}) {
    const {cartItems , getTotalAmount} = useContext(ShopContext)
    return (
        <div class="container checkout ">
            <h2>grand total: <span id="total-price">{getTotalAmount()}DNT</span></h2>
            <div className="check-orders">
                {
                    Products.map((current) => {
                        if (cartItems [current.id] > 0) {
                            let itemInfo = cartItems[current.id]
                            return (
                                <div > 
                                    <div className="ordered">
                                        <img src= {current.thumbnail} width ="100px" />
                                        <h4 >{current.title}</h4>
                                        <span>({current.price}/{itemInfo})</span>
                                    </div>
                                </div>
                            )
                        }

                    })
                }
                
            </div>
            <div className="check-forum">
                <div class="first-forum">
                    <form action="">
                        <div class="label-container">
                            <label for="name">your name:</label>
                            <input type="text" placeholder="enter your name"/>
                        </div>
                        <div class="label-container">
                            <label for="name">your email:</label>
                            <input type="email" placeholder="enter your email"/>
                        </div>
                        <div class="label-container">
                            <label for="name">adresse line 01:</label>
                            <input type="text" placeholder="e.g.flat no."/>
                        </div>
                        <div class="label-container">
                            <label for="name">city:</label>
                            <input type="text" placeholder="e.g.tunis"/>
                        </div>
                        <div class="label-container">
                            <label for="name">country:</label>
                            <input type="text" placeholder="e.g.tunisia"/>
                        </div>
                    </form>
                </div>
                <div class="second-forum">
                    <div class="label-container">
                        <label for="name">your number:</label>
                        <input type="text" placeholder="enter your number"/>
                    </div>
                    <div class="label-container">
                        <label for="name">payment method:</label>
                            <select>
                                <option value="cash">cash on delivery</option>
                                <option value="credit">credit card</option>
                                <option value="paypal">paypal</option>
                                <option value="paytm">paytm</option>
                            </select>
                    </div>
                    <div class="label-container">
                        <label for="name">adresse line 01:</label>
                        <input type="email" placeholder="e.g.street name"/>
                    </div>
                    <div class="label-container">
                        <label for="name">state:</label>
                        <input type="text" placeholder="e.g.state name."/>
                    </div>
                    <div class="label-container">
                        <label for="name">pin code:</label>
                        <input type="text" placeholder="e.g.tunis"/>
                    </div>
                </div>

            </div>
            <button class="btn">order now</button>
        </div>
    )

}
    
        