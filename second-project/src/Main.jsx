import React from "react"

const Main = (props)=>{
    return(
<div className="wrapper">
    <div className="main-content">
        <img src={props.item.imageUrl} alt="lol" />
        <div className="text">
            <h4>{props.item.location}</h4>
            <h1>{props.item.title}</h1>
            <h2>{props.item.startDate} - {props.item.endDate}</h2>
            <p>{props.item.description}</p>
        </div>
    </div>
</div>
    )
}


export default Main;