import React from 'react';import styled from 'styled-components';
import { between } from 'polished';
import * as layout from '../constants/layout';
import * as palette from '../constants/palette';

const Wrapper = styled.div`
    height: 125px; //TODO - adjust with 'between'
    width: 305px; //TODO - adjust with 'between'
    background: linear-gradient(to top, ${palette.LIGHT_GREEN}, ${palette.LIGHT_GRAY}); 
    position: absolute;
    bottom: -10%;
    left: 10%;
`;

export default function Primarybutton() {
  return (
    <Wrapper>
        Start Survey
    </Wrapper>
  )
}
