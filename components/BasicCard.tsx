import styled from 'styled-components';

interface BasicCardProps {
  title: string;
  description: string;
}

export default function BasicCard({ title, description }: BasicCardProps) {
  return (
    <Card>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Card>
  );
}

const Card = styled.div`
  display: flex;
  padding: 2.5rem;
  background: rgb(var(--cardBackground));
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  border-radius: 0.6rem;
  color: rgb(var(--text));
  font-size: 1.6rem;

  & > *:not(:first-child) {
    margin-top: 1rem;
  }
`;

const Title = styled.h2`
  font-weight: bold;
`;

const Description = styled.div`
  opacity: 0.6;
`;
