import React from 'react';
import styled from 'styled-components';

interface titletype{
    title:string;
}

const Mtitlestyle=styled.div`
    font-size:16px;
    color : white;
    text-align:start;
    line-height: 1.8;
    padding-top:15px;
    
`
function Maintitle({title}:titletype){

    return <Mtitlestyle>{title}</Mtitlestyle>

}

export default Maintitle;