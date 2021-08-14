
import React from "react";

import styled from 'styled-components'

export default function CommentSection(props){
    const { comment } = props

    const StyledP = styled.p`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: justify;
    margin: 5vh 26vw;
    background-color: lightblue;
    border-radius: 20px;
    padding:1vh 1vw;
`

    return (
        <div>
            <StyledP>{comment}</StyledP>
        </div>
    )
}
