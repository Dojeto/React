import React from "react"
import logo from "./troll-face.png"
import "./style.css"

const Nav = ()=>{
    return(
        <nav className="navbar">
            <img src={logo} alt="test" />
            <h3>Meme Generator</h3>
        </nav>
    )
}

export default Nav