import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Repository } from 'types';

interface TagToColor {
  [tag: string]: string
}

interface ProjectCardProps {
  repository: Repository;
  tagToColor: TagToColor
}

interface Languages {
  [language: string]: number
}

export default function ProjectCard({ tagToColor, repository: { name, description, topics, languages_url, stargazers_count, forks_count, watchers_count } }: ProjectCardProps) {
  const [languages, setLanguages] = useState<Languages>()

  useEffect(() => {
    async function fetchLanguages() {

      if (languages_url) {

        const response = await axios.get(languages_url)
        console.log(response)
        setLanguages(response.data)
        console.log(response)
      }
    }

    fetchLanguages()
  }, [])

  return (
    <Card>
      <p>{JSON.stringify(languages)}</p>
      <Title>{name}</Title>
      <Description>{description}</Description>

      {topics ? (
        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
          {topics.map(topic => (
            <ColoredTag key={topic} tag={topic} color={tagToColor[topic]} />
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
