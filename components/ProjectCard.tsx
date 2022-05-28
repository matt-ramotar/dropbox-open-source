import { faCodeFork, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { Repository } from 'types';
import idToContributors from '../idToContributors';
import idToLanguages from '../idToLanguages';

interface TagToColor {
  [tag: string]: string
}

interface LanguageToColor {
  [language: string]: string
}

interface ProjectCardProps {
  repository: Repository;
  tagToColor: TagToColor
}

interface Languages {
  [language: string]: number
}

interface Contributor {
  login: string,
  avatar_url: string,
  html_url: string
}

interface IdToLanguages {
  [id: string]: Languages
}

interface IdToContributors {
  [id: string]: Contributor[]
}

export default function ProjectCard({ tagToColor, repository: { id, name, description, topics, html_url, languages_url, stargazers_count, forks_count, watchers_count } }: ProjectCardProps) {
  const idString = id.toString()
  const languages: Languages = (idToLanguages as IdToLanguages)[idString]
  const contributors: Contributor[] = (idToContributors as IdToContributors)[idString]
  return (
    <Card>
      <TitleWithLink href={html_url} target="_blank" rel="noreferrer">
        <Title>{name}</Title>
      </TitleWithLink>
      <Description>{description}</Description>

      <div style={{ display: 'flex', flexDirection: 'row' }}>

        <TitleWithLink href={`${html_url}/stargazers`} target="_blank" rel="noreferrer">
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginRight: "1rem" }}>
            <h5 style={{ marginRight: "0.5rem" }}>{stargazers_count}</h5>
            <FontAwesomeIcon icon={faStar} />
          </div>
        </TitleWithLink>

        <TitleWithLink href={`${html_url}/network/members`} target="_blank" rel="noreferrer">
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: "1rem" }}>
            <h5 style={{ marginRight: "0.5rem" }}>{forks_count}</h5>
            <FontAwesomeIcon icon={faCodeFork} />
          </div>
        </TitleWithLink>

      </div>

      {topics ? (
        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
          {Object.keys(languages).map(language => (
            <LanguageTag key={language}>
              {language}
            </LanguageTag>
          ))}
        </div>
      ) : <span></span>}

      {topics ? (
        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
          {topics.filter(topic => !languages[topic]).map(topic => (
            <ColoredTag key={topic} tag={topic} color={tagToColor[topic]} />
          ))}
        </div>
      ) : <span></span>}

      <div style={{
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        flexWrap: 'wrap',
        justifyContent: 'center'
      }}>
        {contributors && contributors.length > 0 ? (
          contributors.map(contributor => (
            <a href={contributor.html_url} key={contributor.login}>
              <img src={contributor.avatar_url} width={40} height={40} style={{ borderRadius: "50%", margin: '0.25rem' }} />
            </a>
          )
          )
        ) : null}
      </div>
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
      fontWeight: 'bold',
      fontSize: '1.25rem',
    }}>
      {props.tag}
    </span>
  </div>
)

const LanguageTag = styled.div`
  background: rgb(var(--background));
  color: rgb(var(--secondaryText));
  border-radius: 8px;
  padding: 4px;
  margin: 4px;
  font-weight: bold;
  font-size: 1.25rem;
`

const TitleWithLink = styled.a`
    color: rgb(var(--primaryText));
    text-decoration: none;
`