import {AiOutlinePhone, AiOutlineTwitter , AiOutlineInstagram,AiOutlineLinkedin} from "react-icons/ai"
import {SlEnvolope} from "react-icons/sl"
import {CiLocationOn} from "react-icons/ci"
import {AiOutlineFacebook} from "react-icons/ai"
import "./Footer.css"
export default function () {
    return(
        <section class="contact" >
            <div>
                <ul>
                <li><h3>Quick Links</h3></li>
                <li>Home</li>
                <li>About</li>
                <li>Shop</li>
                <li>Contact</li>
                </ul>
            </div>
            <div>
                <ul>
                <li><h3>Extra Links</h3></li>
                <li>Login</li>
                <li>Register</li>
                <li>Cart</li>
                <li>Orders</li>
                </ul>
            </div>
            <div>
                <ul>
                <li><h3 >Contact-info</h3></li>
                <li> <AiOutlinePhone/>+216 29432423</li>
                <li> <AiOutlinePhone/>+216 55 805 325</li>
                <li> <SlEnvolope/> ManelTati@gmail.com</li>
                <li> <CiLocationOn/> tunisia,tunis-2021</li>
                </ul>
            </div>
            <div>
                <ul>
                <li><h3 class="title">Follow Us</h3></li>
                <li><AiOutlineFacebook/> facebook</li>
                <li><AiOutlineTwitter/> twitter</li>
                <li> <AiOutlineInstagram/> instagram</li>
                <li> <AiOutlineLinkedin/> linkedin</li>
                </ul>
            </div>
        </section>
    
    )
}