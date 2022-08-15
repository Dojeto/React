import React from "react"
import ReactDOM from "react-dom"
import Nav from "./Nav.jsx"
import Main from "./Main"
import data from "./data"

import "./style.css"

const App = ()=>{
    const test = data.map((ele)=>{
        return <Main
            // img = {ele.imageUrl}
            // location = {ele.location}
            // title = {ele.title}
            // startDate = {ele.startDate}
            // endDate = {ele.endDate}
            // description = {ele.description}

            item = {ele} // clean code
        />
    })
    return(
        <>
            <Nav/>
            {test}
        </>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(
    <App/>
)