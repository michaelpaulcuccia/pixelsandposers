import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 100%;
    display: grid;
    align-items: center;
    grid-template-columns: repeat(3, 1fr);
`;

export default function Cardgrid(children) {
  return (
    <Wrapper>
        {children.children}
    </Wrapper>
  )
}
