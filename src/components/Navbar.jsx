import { Link } from "react-router-dom"
import {ShoppingCart,User} from "phosphor-react"
import Search from "../pages/shop/Search"
import './Navbar.css'
export function Navbar ({setProducts}) {
    return (
        <div className="navbar">
            <div className="logo">
                <h3>Tati<span>Store</span></h3>
            </div>
            <div className="Search-links">
                <Search setProducts = {setProducts} className = "Search" />
            <div className="links">
                <div className="links">
                    <Link to = "/">Shop</Link>
                    <Link to = "/cart">
                        <ShoppingCart size={32} color="white" style={{marginTop:"10px"}} className="shop-cart"/>
                    </Link>
                    <Link to = "/Login">
                        <User  style = {{marginTop:"10px"}}size={30} />
                    </Link>
                </div>

            </div>
            </div>
        </div>
    )
}