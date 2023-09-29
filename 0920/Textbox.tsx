import React from 'react';
import styled from 'styled-components';
import Maintext from 'Maintext';
import Subtext from 'Subtext';
import Modeltext from 'Modeltext';

interface Text{
    main : string;
    sub:string;
    model:string;
}

const TextBoxstyle=styled.div`
    z-index:1;
    border:none;
    position: absolute;

`
function Textbox({main,sub,model}:Text){

    return(
        <TextBoxstyle>
            <Modeltext model={model}/>
            <Maintext main={main}/>
            <Subtext sub={sub}/>
        </TextBoxstyle>
    );
    
    
}

export default Textbox;