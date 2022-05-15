import AutofitGrid from 'components/AutofitGrid';
import Container from 'components/Container';
import ImageCard from 'components/ImageCard';
import SectionTitle from 'components/SectionTitle';
import React from 'react';
import styled from 'styled-components';
import { media } from 'utils/media';

const FEATURED_PROJECTS = [

  {
    imageUrl: '/person_in_lotus_position.svg',
    title: 'Focus',
    description: 'A Gradle plugin that helps you speed up builds by excluding unnecessary modules',
    tags: [
      'Android',
      'Build',
      'Gradle',
      'Gradle Plugin',
      'Build Tool',
      'Build Performance'
    ]
  },

  {
    imageUrl: '/shield.svg',
    "title": "Dependency Guard",
    "description": "A Gradle plugin that guards against unintentional dependency changes",
    "tags": [
      "Android",
      "Kotlin",
      "Build",
      "Gradle",
      "Gradle Plugin",
      "Build Tool",
      "Dependencies",
      "Kotlin DSL",
      "Dependency Guard"
    ]
  },

  {
    imageUrl: '/toolbox.svg',
    "title": "Component Box",
    "description": "A Kotlin Multiplatform library for building dynamic server-driven UI",
    "tags": [
      "Kotlin Multiplatform",
      "Server-Driven UI",
      "Jetpack Compose",
      "Swift UI",
      "Zipline"
    ]
  },


];

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

function buildTagToColor() {
  const tagToColor: { [tag: string]: string } = {}

  for (const project of FEATURED_PROJECTS) {
    for (const tag of project.tags) {
      if (!tagToColor[tag]) {
        const randomNumber = Math.floor(Math.random() * COLORS.length)
        const randomColor = COLORS[randomNumber]
        tagToColor[tag] = randomColor
      }
    }
  }

  return tagToColor
}


export default function Featured() {
  const tagToColor = buildTagToColor()

  return (
    <Container>
      <SectionTitle>Featured</SectionTitle>

      <CustomAutofitGrid>
        {FEATURED_PROJECTS.map((project) => (
          <ImageCard key={project.title} tagToColor={tagToColor} {...project} />
        ))}
      </CustomAutofitGrid>

      <div style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%'
      }}>
        <Button href="/projects">View all projects</Button>
      </div>
    </Container>
  );
}

const CustomAutofitGrid = styled(AutofitGrid)`
  --autofit-grid-item-size: 40rem;
  margin-top: 4rem;

  ${media('<=tablet')} {
    --autofit-grid-item-size: 30rem;
  }

  ${media('<=phone')} {
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

