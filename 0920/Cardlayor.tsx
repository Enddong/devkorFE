import React from 'react';
import styled from 'styled-components';
import ASSIGNMENT_INFO from 'Assignment';
import Card from 'Card';

const Divstyle=styled.div`
  white-space:nowrap;
  overflow:auto;
  margin:10px;
`

function Cardlayor(){

  return( 
    <Divstyle>
      {ASSIGNMENT_INFO.map((elem)=>(<Card infos={elem} key={elem.main}/>))}
    </Divstyle>
  );
  

}

export default Cardlayor;