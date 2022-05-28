import Container from 'components/Container';
import { Heading } from 'components/Heading';
import OverTitle from 'components/OverTitle';
import styled from 'styled-components';
import { media } from 'utils/media';

export default function Hero() {
  return (
    <HeroWrapper>
      <Contents>
        <CustomOverTitle>Our mission is to design a more enlightened way of working</CustomOverTitle>
        <Heading text="Dropbox Loves Open Source 💙" backgroundImage='spectrum.svg' />
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