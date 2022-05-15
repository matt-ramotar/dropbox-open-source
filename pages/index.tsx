import TwitterTimeline from 'components/TwitterTimeline';
import { EnvVars } from 'env';
import Head from 'next/head';
import React from 'react';
import styled from 'styled-components';
import Features from 'views/HomePage/Featured';
import Partners from 'views/HomePage/GloballyTrusted';
import Hero from 'views/HomePage/Hero';
import Values from 'views/HomePage/Values';


export default function Homepage() {
  return (
    <>
      <Head>
        <title>{EnvVars.SITE_NAME}</title>
        <meta
          name="Dropbox Open Source"
          content="Our mission is to design a more enlightened way of working"
        />
      </Head>
      <HomepageWrapper>
        <WhiteBackgroundContainer>
          <Hero />
          <Values />
        </WhiteBackgroundContainer>

        <DarkestBackgroundContainer>
          <Partners />
        </DarkestBackgroundContainer>

        <DarkerBackgroundContainer>
          <Features />
          <TwitterTimeline />
        </DarkerBackgroundContainer>
      </HomepageWrapper>
    </>
  );
}





const HomepageWrapper = styled.div`
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

const DarkestBackgroundContainer = styled.div`
  width: 100%;
  background: rgb(var(--primary));
  padding: 12.5rem 0;
`

const WhiteBackgroundContainer = styled.div`
  background: rgb(var(--secondBackground));
  padding: 12.5rem 0;


  & > *:not(:first-child) {
    margin-top: 12.5rem;
  }
`;


