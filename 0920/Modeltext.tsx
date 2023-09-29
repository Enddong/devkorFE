import React from 'react';
import styled from 'styled-components';

interface Modeltext{
    model : string;
}

const Modeltextstyle=styled.div`
    font-size:15px;
    font-weight:bolder;
    border:large;
    text-align:left;
    padding:10px;
    margin:10px;
    white-space:normal;
    color:gray;
`
function Modeltext({model}:Modeltext){

    return <Modeltextstyle>{model}</Modeltextstyle>
}

export default Modeltext;