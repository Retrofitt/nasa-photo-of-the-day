
import React,{useState, useEffect} from "react";


export default function TopSection(props){

    const { name, date, title }= props
    return (
        <div>
            <h1>{title}</h1>
            <h2>CopyRight belongs to {name}</h2>
            <p>NASA Photo of this day: {date}</p>
        </div>
    )
}
