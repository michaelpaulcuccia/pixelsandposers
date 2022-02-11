import React from 'react';import styled from 'styled-components';
import { between } from 'polished';
import * as layout from '../constants/layout';
import * as palette from '../constants/palette';

const Wrapper = styled.div`
    height: ${between('50px', '100px', layout.MIN_SCREEN, layout.MAX_SCREEN)};
    width: ${between('200px', '280px', layout.MIN_SCREEN, layout.MAX_SCREEN)};
    background: linear-gradient(to top, ${palette.LIGHT_GREEN}, ${palette.LIGHT_GRAY}); 
    position: absolute;
    bottom: -7%;
    left: 10%;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    
    p {
      font-size: ${between('18px', '32px', layout.MIN_SCREEN, layout.MAX_SCREEN)};
      color: ${palette.DARK_GREEN};
        
      &:hover {
        color: ${palette.LIGHT_BLACK};
        font-weight: 300;
      }
    }    
`;

export default function Primarybutton(props) {
  return (
    <Wrapper>
        <p>{props.content}</p>
    </Wrapper>
  )
}
