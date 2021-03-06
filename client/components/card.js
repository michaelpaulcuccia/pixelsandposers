import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import * as palette from '../constants/palette';

const CardWrapper = styled.div`
    min-height: 300px; 
    max-width: 300px;
    margin: 5px;
    border: 1px solid ${palette.LIGHT_BLACK};
    padding: 5px;
    box-shadow: 3px 3px 5px 1px rgba(102,102,102,0.7);
`;

const IconContainer = styled.div`
  width: 20%; //a bit of a hack to get the Image aligned to left
  display: flex;
`;

const DivideBar = styled.div`
  width: 100%;
  margin: 10px 0;
  border-bottom: 2px solid #ccc;
`;

const TextArea = styled.div`
  color: 000;
  width: 60%;
  padding-left: 10px;
  font-size: 22px;
`;

export default function Card({image, text}) {
  return (
    <CardWrapper>
        <IconContainer>
          <Image src={image} height={100} width={100}/>
        </IconContainer>
        <DivideBar />
        <TextArea>
          {text}
        </TextArea>
    </CardWrapper>
  )
}
