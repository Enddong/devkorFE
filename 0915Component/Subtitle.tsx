import React from 'react';
import styled from 'styled-components';

interface sub{
    category : string;
    author : string;
}

const Substyle=styled.div`
    font-size:8px;
    color : gray;
    text-align:start;
    line-height: 2;
    padding-top:10px;
`
function Subtitle({category, author}:sub){

    return <Substyle>{category} | {author}</Substyle>
}

export default Subtitle;