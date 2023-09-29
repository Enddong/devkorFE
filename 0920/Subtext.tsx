import React from 'react';
import styled from 'styled-components';

interface Subtext{
    sub : string;
}

const Subtextstyle=styled.div`
    font-size:18px;
    font-weight:bolder;
    text-align:left;
    padding:10px;
    margin:10px;
    white-space:normal;
    color:gray;
`
function Subtext({sub}:Subtext){

    return <Subtextstyle>{sub}</Subtextstyle>
}

export default Subtext;