import React from 'react';
import styled from 'styled-components';

interface imgURL{
    url:string;
}

const Cardimgstyle=styled.img`
    width:100%;
    height:100%;
    border-radius:5px;
    &:hover{
        scale:1.1;
        transition:ease 0.5s;
    }
    z-index:2;
    box-shadow: 2px 2px 2px lightgray;
`

function Cardimg({url}:imgURL){
    return <Cardimgstyle src={url}/>
}

export default Cardimg;