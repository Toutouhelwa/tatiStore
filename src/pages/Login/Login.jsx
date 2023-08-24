import React from "react"
import { useState } from "react"
import './Login.css'
import { Link } from "react-router-dom"
import {FacebookLogo,GoogleLogo } from "phosphor-react"

export default function Login () {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
   const handelSubmit = (e)=> {
        e.preventDefault();
        console.log(email)
        console.log(password)
   }
    return(
        <div className="login-form">
            <form onSubmit={handelSubmit}>
            <h2>Log in</h2>
                <label For="email">
                    <h4>Email:</h4>
                    <input type="email" placeholder="yourEmail@gmail.com" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                </label>
                <label For="password">
                    <h4>Password:</h4>
                    <input type="password"  placeholder="************" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                </label>
                <div style={{display:"flex" ,alignItems:"center"}}>
                <button type="submit" className="link-btn">Log in</button> <h2>Or: <Link to="https://www.facebook.com/"><FacebookLogo size={40} /></Link></h2>
                <Link to = "https://myaccount.google.com/"><GoogleLogo size={40} /></Link>
                </div>
                <Link to = "/Sign">
                    <span>Don't have an account?Register here.</span>
                </Link>
            </form>

        </div>
    )
}