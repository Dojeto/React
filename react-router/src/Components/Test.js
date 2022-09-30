import React from "react";
import {useParams } from "react-router-dom";

const Test = ()=>{
    const {id} = useParams()
    return <>
        <h1>mother fucker {id}</h1>
    </>
}

export default Test;