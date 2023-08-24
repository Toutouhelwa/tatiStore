import "./Register.css"
import React from "react"
import { useState } from "react"
export default function Register() {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [name,setName] = useState("")
    const [lastName , setLastName] = useState("")
    const handelSubmit = (e)=> {
        e.preventDefault();
        alert("hello ," + " " + name + " " + lastName)
    }
    return(
        <div className="login-form">
            <form onSubmit={handelSubmit}>
            <h2>Register</h2>
            <h3 className="infotitle">Personnal Informations:</h3>
                <label For="firstName">
                    <h4>FirstName:</h4>
                    <input type="text" placeholder="your FirstName" value={name} onChange={(e)=>setName(e.target.value)}/>
                </label>
                <label For="password">
                    <h4>LastName:</h4>
                    <input type="text"  placeholder="your LastName" value={lastName} onChange={(e)=>setLastName(e.target.value)}/>
                </label>
            <h3 className="infotitle">Sign in informations:</h3>
                <label For="email">
                    <h4>Email:</h4>
                    <input type="email" placeholder="yourEmail@gmail.com" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                </label>
                <label For="password">
                    <h4>Password:</h4>
                    <input type="password"  placeholder="************" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                </label>
                <label For="password">
                    <h4>Confirm the password:</h4>
                    <input type="password"  placeholder="************" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                </label>
                <button type="submit" className="link-btn" onClick={handelSubmit}>Register</button>
            </form>

        </div>
    )
}