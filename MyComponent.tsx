import React from 'react';
import styled from 'styled-components';

interface Nametag{
    firstname:string;
    lastname:string;
}

const Namedesign = styled.button`
    width : 500px;
    height : 250px;
    border:none;
    border-radius:10%;
    align-items:center;
    font-size:50px;
    box-shadow:2px 2px 2px 2px lightgray;
    padding:20px;
    margin:20px;
`


function MyComponent({firstname,lastname}:Nametag){
    
    return <Namedesign>{firstname} {lastname}</Namedesign>
}

export default MyComponent;