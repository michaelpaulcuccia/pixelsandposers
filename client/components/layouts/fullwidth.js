import React from 'react';
import styled from 'styled-components';
import * as layout from '../../constants/layout';
import * as palette from '../../constants/palette';

const Wrapper = styled.div`
  min-height: 150px;
  width: 100vw;
  margin: 30px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${bgColor => {
      if (bgColor.bgColor === 'blend') {
        return `radial-gradient(circle at 23% 0px, ${palette.LIGHT_GRAY}, ${palette.LIGHT_BLACK} 86%)`;
      } else if (bgColor.bgColor === 'lightgray') {
        return palette.LIGHT_GRAY;
      } else {
        return palette.WHITE;
      }
    }
  };
`;

const Interior = styled.div`
    height: 100%;
    width: ${layout.MAX_SCREEN};
    display: flex;
    flex-flow: row wrap; //none
    justify-content: space-between;
    align-items: stretch;   
`;

export default function Fullwidth({ children, bgColor }) {
  return (
    <Wrapper bgColor={bgColor}>
        <Interior>
          {children}
        </Interior>
    </Wrapper>
  )
}
