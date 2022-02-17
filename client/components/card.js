import React from 'react';
import styled from 'styled-components';
//import * as layout from '../constants/layout';
import * as palette from '../constants/palette';

const Wrapper = styled.div`
    height: 300px; //update to be fluid
    min-width: 45%; //two in a container
    margin: 5px;
    border: 1px solid ${palette.LIGHT_BLACK};
    padding: 15px;
    box-shadow: 3px 3px 5px 1px rgba(102,102,102,0.7);
`;

export default function Card() {
  return (
    <Wrapper>
        Hello, I'm a Card!
    </Wrapper>
  )
}
