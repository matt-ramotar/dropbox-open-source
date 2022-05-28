import AutofitGrid from 'components/AutofitGrid';
import { Heading } from 'components/Heading';
import ProjectCard from 'components/ProjectCard';
import { EnvVars } from 'env';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Repository } from 'types.js';
import { media } from 'utils/media';
import projects from '../projects.js';

const COLORS = [
  "#5461c8",
  "#c724b1",
  "#e4002b",
  "#ff6900",
  "#f6be00",
  "#97d700",
  "#00ab84",
  "#00a3e0",
  "#e4002b"
]

interface TagToColor {
  [tag: string]: string
}


function buildTagToColor() {
  const tagToColor: TagToColor = {}

  for (const project of projects) {
    for (const tag of project.topics) {
      if (!tagToColor[tag]) {
        const randomNumber = Math.floor(Math.random() * COLORS.length)
        const randomColor = COLORS[randomNumber]
        tagToColor[tag] = randomColor
      }
    }
  }

  return tagToColor
}

export default function Projects() {
  const [tagToColor, setTagToColor] = useState<TagToColor>()


  useEffect(() => {
    setTagToColor(buildTagToColor())
  }, [])

  const [searchInput, setSearchInput] = useState<string>("")

  if (!tagToColor) {
    return null
  }

  return (
    <>
      <Head>
        <title>{EnvVars.SITE_NAME}</title>
        <meta
          name="Dropbox Open Source"
          content="Our mission is to design a more enlightened way of working"
        />
      </Head>
      <ProjectsWrapper>

        <DarkerBackgroundContainer>
          <Heading text="Projects" />

          <div>
            <SearchInput placeholder='Search...' onChange={e => setSearchInput(e.target.value)} />

          </div>
          <CustomAutofitGrid>
            {projects.filter(project => isMatch(searchInput, project)).map((project: Repository) => {
              return project.visibility !== 'public' ? null : (
                <ProjectCard key={project.name} tagToColor={tagToColor} repository={project} />
              )
            })}
          </CustomAutofitGrid>

        </DarkerBackgroundContainer>
      </ProjectsWrapper>
    </>
  );
}


const isMatch = (input: string, project: Repository) => {
  return (
    project.name.toLowerCase().includes(input.toLowerCase()) ||
    project.description?.toLowerCase().includes(input.toLowerCase()) ||
    project.topics.join(', ').toLowerCase().includes(input.toLowerCase())
  )
}


const ProjectsWrapper = styled.div`
  & > :last-child {
    margin-bottom: 4rem;
  }
`;

const DarkerBackgroundContainer = styled.div`
  background: rgb(var(--background));
  padding: 12.5rem 12.5rem;

  & > *:not(:first-child) {
    margin-top: 5rem;
  }

  ${media('<tablet')} {
    padding: 12.5rem 2.5rem;
  }
`;

const CustomAutofitGrid = styled(AutofitGrid)`
  --autofit-grid-item-size: 40rem;
  margin-top: 2rem;

  ${media('=tablet')} {
    --autofit-grid-item-size: 30rem;
  }

  ${media('<tablet')} {
    --autofit-grid-item-size: 100%;
  }
`;


const Button = styled.a`
  margin-top: 4rem;
  border: none;
  display: inline-block;
  text-decoration: none;
  text-align: center;
  background: rgb(var(--primary));
  padding: 1.75rem 2.25rem;
  font-size: 1.75rem;
  color: rgb(var(--secondary));
  font-family: var(--font);
  font-weight: bold;
  border-radius: 0.4rem;
  border: 2px solid rgb(var(--primary));
  transition: transform 0.3s;
  backface-visibility: hidden;
  will-change: transform;
  cursor: pointer;

  ${media('<=tablet')} {
    width: 100%;
  }

  span {
    margin-left: 2rem;
  }

  &:hover {
    transform: scale(1.025);
  }
`;

const SearchInput = styled.input`
  width: 600px;
  border: none;
  outline: none;
  padding: 1rem;
  border-radius: 1.25rem;
  font-size: 1.5rem;
  font-weight: bold;

  ${media('<=tablet')} {
    width: 100%;
  }

 ::placeholder {
    font-size: 1.5rem;
    font-weight: bold;
}
`