import React from 'react';
import styled from 'styled-components';
import Wrapper from './Wrapper';
import Mainimg from './Mainimg';
import Maintitle from './Maintitle';
import Subtitle from './Subtitle';


function App(){

  return(

    <Wrapper>
      <Mainimg url="https://cdn.class101.net/images/60b28d67-66e5-4e41-84b3-98cf87e28408/1920xauto.webp"/>
      <Maintitle title='"원밀리언 댄스 스튜디오 with 리아킴" 에게 배우는 댄스 입문'/>
      <Subtitle category="라이프스타일" author="1MILLION"/>
    </Wrapper>

  );

}

export default App;