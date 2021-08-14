
import React from "react";


export default function TopSection(props){

    const { name, date, title }= props
    return (
        <div>
            <h1>{title}</h1>
            <h2>{name}</h2>
            <p>{date}</p>
        </div>
    )
}
