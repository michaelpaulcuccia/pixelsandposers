import React from 'react';
import styled from 'styled-components';
import * as palette from '../constants/palette';

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
`;

const ContentWrapper = styled.div`
    height: 100%;
    width: 100%;
    padding: 15px 0px 5px 15px;
    line-height: 45px;
    color: ${palette.DARK_GREEN};

    .main-text {
        font-size: 32px;
        font-weight: 500;

        span {
            color: ${palette.LIGHT_GREEN}
        }
    }

    .short-text {
        font-size: 26px;
        font-weight: 500;
        padding: 15px 0;

        span {
            color: ${palette.LIGHT_GREEN}
        }
    }
`;

export default function Textblock({maintext, shorttext}) {
  return (
    <Wrapper>
        <ContentWrapper>
            <h2 className='main-text'>{maintext}</h2>
            <p className='short-text'>{shorttext}</p>
        </ContentWrapper>
    </Wrapper>
  )
}

