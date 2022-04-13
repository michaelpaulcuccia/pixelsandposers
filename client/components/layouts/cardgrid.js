import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;

    @media (max-width: 975px) {
      flex-direction: column;
      align-items: center;
    }
`;

export default function Cardgrid(children) {
  return (
    <Wrapper>
        {children.children}
    </Wrapper>
  )
}
