import React from 'react';
import styled from 'styled-components';

interface imgURL{
    url:string;
}

const Imgstyle=styled.img`
    width:100%;
    height:60%;
    border-radius:5px;
    
`
function Mainimg({url}:imgURL){

    return <Imgstyle src={url}/>
    
}

export default Mainimg;