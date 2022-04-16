import React from "react"
import Navbar from "./components/Navbar"

import Card from "./components/Card"
import travelData from "./data"

export default function App(){

    const travelElements = travelData.map( card => {
        return (
            
            <Card
                key={card.id}
                card = {card}
            />
            
            
        )
    })

    return (
        <div>
            <Navbar/>
            
            {travelElements}

        </div>
    )
}