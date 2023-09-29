import React from 'react';
import styled from 'styled-components';
import ASSIGNMENT_INFO from 'Assignment';
import Cardimg from 'Cardimg';
import Textbox from 'Textbox';


const Cardstyle=styled.button`
    width:400px;
    height:600px;
    border:none;
    position: relative;
`

interface info{
    url:string;
    model:string;
    main:string;
    sub:string;
}

interface manyinfo{
    infos:info;
}
function Card({infos}:manyinfo){

    const {url,model,main,sub}=infos;

    return(
        <Cardstyle>

            <Textbox model={model} main={main} sub={sub}/>
            <Cardimg url={url}/>
            
        </Cardstyle>
    );

}

export default Card;