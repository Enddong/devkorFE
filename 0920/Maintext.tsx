import React from 'react';
import styled from 'styled-components';

interface Maintext{
    main : string;
}

const Maintextstyle=styled.div`
    font-size:25px;
    font-weight:bolder;
    border:large;
    text-align:left;
    padding:10px;
    margin:10px;
    white-space:normal;
    color:gray;
`
function Maintext({main}:Maintext){

    return <Maintextstyle>{main}</Maintextstyle>
}

export default Maintext;