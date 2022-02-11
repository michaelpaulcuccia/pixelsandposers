import React from 'react';
import styled from 'styled-components';
import * as layout from '../constants/layout';
import * as palette from '../constants/palette';

const Wrapper = styled.div`
  min-height: 150px;
  width: 100vw;
  margin: 30px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${palette.LIGHT_GRAY};
`;

const Interior = styled.div`
    height: 100%;
    width: ${layout.MAX_SCREEN};
`;

export default function Fullwidth() {
  return (
    <Wrapper>
        <Interior>

        </Interior>
    </Wrapper>
  )
}
