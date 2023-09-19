import React from 'react';
import styled from 'styled-components';

function Wrapper({children}:any){

    const Wstyle=styled.button`
        padding:15px;
        margin:15px;
        background:black;
        width:300px;
        height:350px;
    `

    return(
        <Wstyle>
            {children}
        </Wstyle>
    )
}

export default Wrapper;