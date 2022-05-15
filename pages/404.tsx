import Container from 'components/Container';
import NotFoundIllustration from 'components/NotFoundIllustration';
import styled from 'styled-components';

export default function NotFoundPage() {
  return (
    <Wrapper>
      <Container>
        <ImageContainer>
          <NotFoundIllustration />
        </ImageContainer>
        <Title>404</Title>
        <Description>Page not found</Description>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background: rgb(var(--background));
  margin: 10rem 0;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 5rem;
`;

const Description = styled.div`
  font-size: 3rem;
  opacity: 0.8;
`;

const ImageContainer = styled.div`
  width: 40rem;
  margin: auto;
  display: flex;
  justify-content: center;
`;
