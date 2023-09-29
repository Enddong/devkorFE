import React from 'react';
import styled from 'styled-components';

const H2style=styled.h2`
  margin:10px;
  padding:10px;
`
const Spanstyle=styled.span`
  color:gray;
  margin:10px;
`
function Titlebox(){

  return(
    <div>

      <H2style>최신제품.<Spanstyle>따끈따끈한 신제품 이야기.</Spanstyle></H2style>
    
    </div>
    
  );
  

}

export default Titlebox;