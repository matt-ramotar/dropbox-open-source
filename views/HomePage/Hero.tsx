import Container from 'components/Container';
import OverTitle from 'components/OverTitle';
import styled from 'styled-components';
import { media } from 'utils/media';

export default function Hero() {
  return (
    <HeroWrapper>
      <Contents>
        <CustomOverTitle>Our mission is to design a more enlightened way of working</CustomOverTitle>
        <Heading text="Dropbox Loves Open Source 💙" />
        <Description>
          We participate in the open source community by using open source software internally and open sourcing our own projects
        </Description>
      </Contents>
    </HeroWrapper>
  );
}


const HeroWrapper = styled(Container)`
  display: flex;

  ${media('<=desktop')} {
    flex-direction: column;
    align-items: center;
  }
`;

const Contents = styled.div`
  flex: 1;
  max-width: 100%

  ${media('<=desktop')} {
    max-width: 100%;
  }
`;

const Description = styled.p`
  font-size: 1.8rem;
  opacity: 0.8;
  line-height: 1.6;

  ${media('<=desktop')} {
    font-size: 1.5rem;
  }
`;

const CustomOverTitle = styled(OverTitle)`
  margin-bottom: 2rem;
`;

interface HeadingProps {
  text: string
}

const Heading = (props: HeadingProps) => <H1><span style={{
  backgroundImage: 'url(spectrum.svg)',
  backgroundRepeat: 'repeat-x',
  backgroundSize: '40vw 0.15em',
  backgroundPosition: 'left bottom 5px'
}}>Dropbox Loves Open Source 💙</span></H1>

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