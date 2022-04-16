import React from "react"
import logo from '../images/navlogo.png'

export default function Navbar(){
    return (
        <div className = "nav">
            <img src={logo} className = "nav--logo"/>
            <h1 className = "nav--text"> my Japan travel journal</h1>
        </div>
    )
}