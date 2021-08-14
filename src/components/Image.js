
import React from "react";

import styled from 'styled-components'

export default function Image(props){
    const { photoUrl, title }= props

    const ImageDiv = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: whitesmoke;
    `;

    const StyledImage = styled.img`
        border-radius:200px;
        justify-content: center;
        align-items: center;
    `

   
    return (
        <ImageDiv>
            <StyledImage
            alt= {title}
            src= {photoUrl}
            >
            </StyledImage>
        </ImageDiv>
    )
}
