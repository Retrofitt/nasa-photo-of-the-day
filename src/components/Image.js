
import React,{useState, useEffect} from "react";

export default function Image(props){
    const { photoUrl, title }= props
   
    return (
        <div>
            <img
            alt= {title}
            src= {photoUrl}
            >
            </img>
        </div>
    )
}
