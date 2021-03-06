import React from 'react';
import styled from 'styled-components';
import { between } from 'polished';
import * as layout from '../constants/layout';
import * as palette from '../constants/palette';

/*
between: (fromSize: (string | number), toSize: (string | number), minScreen: string, maxScreen: string)
*/

const Wrapper = styled.div`
  width: 100%;
  background: ${palette.LIGHT_GREEN};
`;

const Hamburger = styled.div`
  height: 100px;
  width: 100px;
  margin-left: 10%;
  padding-top: 5%;
    
  &:hover {
    .top, .bottom {
      border-bottom: 6px solid ${palette.LIGHT_BLACK};
    }
  }

  .top {
    width: 70%;
    border-bottom: 6px solid ${palette.BLACK};
    margin-bottom: 10%;

    @media (max-width: 650px) {
      width: 60%;
      border-bottom: 4px solid ${palette.BLACK};
    }
  }

  .bottom {
    width: 50%;
    border-bottom: 6px solid ${palette.BLACK};

    @media (max-width: 650px) {
      width: 40%;
      border-bottom: 4px solid ${palette.BLACK};
    }
  }

`;

const TextContainer = styled.div`
  font-size: ${between('32px', '56px', layout.MIN_SCREEN, layout.MAX_SCREEN)};
  font-weight: 500;
  color: ${palette.DARK_GREEN};
  padding: 15% 0% 15% 10%;
  .light-text {
    color: ${palette.WHITE}
  }
`;

export default function Bigblock(props) {
  return (
    <Wrapper>
        <Hamburger>
          <div className='top'></div>
          <div className='bottom'></div>
        </Hamburger>
        <TextContainer>
            <p>{props.topline}</p>
            <p>{props.middleline}</p>
            <p>{props.bottomline} <span className='light-text'>{props.lighttext}</span></p>
        </TextContainer>
    </Wrapper>
  )
}
