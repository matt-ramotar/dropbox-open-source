import { EnvVars } from 'env';
import Head from 'next/head';
import React from 'react';
import styled from 'styled-components';


export default function Projects() {
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
        </DarkerBackgroundContainer>
      </ProjectsWrapper>
    </>
  );
}





const ProjectsWrapper = styled.div`
  & > :last-child {
    margin-bottom: 4rem;
  }
`;

const DarkerBackgroundContainer = styled.div`
  background: rgb(var(--background));
  padding: 12.5rem 0;

  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`;
