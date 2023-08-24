import { useState } from "react"
import {AiOutlineSearch} from "react-icons/ai"
import "./Search.css"
export default function Search ({setProducts}){
    const [text,setText] = useState('')
    const HandelChange = (event) => {
        setText(event.target.value)
        console.log(text)
    }
    const filtredProducts  = () => {
        setProducts((prev) => prev.filter((current) => current.title === text))
        
    }
    return (
        <div className="searchPart">
             <input type="text"  placeholder="Search for product" value={text} onChange={HandelChange} className="search-input"/>
             <AiOutlineSearch className = "search-icon" onClick={filtredProducts}/>
        </div> 
    )

}