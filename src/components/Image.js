
import React,{useState, useEffect} from "react";

import styled from 'styled-components'

// export default function Image(props){
//     const { photoUrl, title }= props

//     const imageDiv = styled.div`
//         width: 10%;
//         display: flex;
//         justify-content:space-between;
        
//     `;
   
//     return (
//         <imageDiv>
//             <img
//             alt= {title}
//             src= {photoUrl}
//             >
//             </img>
//         </imageDiv>
//     )
// }

import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';

const Image = (props) => {
    const { photoUrl, title, comment }= props
    return (
        <Card>
            <CardImg 
                top width="50%" 
                src={photoUrl} 
                alt="nasa photo of the day" 
            />

            <CardBody>

                <CardTitle 
                    tag="h5">{title}
                </CardTitle>
                
                <CardSubtitle 
                    tag="h6" 
                    className="mb-2 text-muted"
                >Card subtitle</CardSubtitle>
                
                <CardText>
                    {comment}
                </CardText>

            </CardBody>
        </Card>
  );
};

export default Image;