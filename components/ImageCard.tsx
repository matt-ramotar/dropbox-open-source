import NextImage from 'next/image';
import styled from 'styled-components';

interface ImageCardProps {
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  tagToColor: TagToColor
}

interface TagToColor {
  [tag: string]: string
}

export default function ImageCard({ title, description, imageUrl, tags, tagToColor }: ImageCardProps) {
  return (
    <Card>
      <NextImage src={imageUrl} width={108} height={108} alt={title} />
      <Title>{title}</Title>
      <Description>{description}</Description>

      {tags ? (
        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
          {tags.map(tag => (
            <ColoredTag key={tag} tag={tag} color={tagToColor[tag]} />
          ))}
        </div>
      ) : <span></span>}
    </Card>
  );
}

const Card = styled.div`
  display: flex;
  padding: 2.5rem;
  background: rgb(var(--cardBackground));
  box-shadow: var(--shadow-md);
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
  font-weight: bold;
`;

const ColoredTag = (props: { tag: string, color: string }) => (
  <div style={{
    backgroundColor: props.color,
    borderRadius: 8,
    padding: '4px',
    margin: '4px',
  }}>
    <span style={{
      fontWeight: 'bold'
    }}>
      {props.tag}
    </span>
  </div>
)
