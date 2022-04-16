import React from "react"


export default function Card(props){
    return (
        <div> 
            <div className = "card">
                <div>
                    <img className = "card--img" 
                    src={require(`../images/${props.card.imageUrl}`)}/>
                </div>
                <div className = "card--container">
                    
                    <img className = "card--marker" src={require("../images/mapmarker.png")}/>
                    
                    <h4 className = "card--location"> {props.card.location} </h4>
                    
                    <a className = "card--map" href={props.card.googleMapsUrl} target="_blank"> 
                        View on Google Maps </a>
                    
                    <h1 className = "card--title"> {props.card.title} </h1>
                    
                    <p className = "card--date">  {props.card.startDate}  
                    {props.card.endDate && " - " + props.card.endDate}  </p>
                    
                    <p className = "card--desc"> {props.card.description} </p>
                </div>
                
            </div>      
                
            <hr />
            
        </div>
    )
}