
import React,{useState, useEffect} from "react";

export default function CommentSection(props){
    const { comment } = props

    return (
        <div>
            <p>{comment}</p>
        </div>
    )
}
