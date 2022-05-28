import styled from 'styled-components';
import { media } from 'utils/media';

interface HeadingProps {
    text: string,
    backgroundImage?: string
}

export const Heading = (props: HeadingProps) => <H1><span style={{
    backgroundImage: `url(${props.backgroundImage})` ?? "",
    backgroundRepeat: 'repeat-x',
    backgroundSize: '40vw 0.15em',
    backgroundPosition: 'left bottom 5px'
}}>{props.text}</span></H1>

const H1 = styled.h1`
    font-size: 7.2rem;
    font-weight: bold;
    line-height: 1.1;
    margin-bottom: 4rem;
    letter-spacing: -0.03em;
  
    ${media('<=tablet')} {
      font-size: 4.6rem;
      margin-bottom: 2rem;
    }
  `;