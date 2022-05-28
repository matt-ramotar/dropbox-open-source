import Script from 'next/script';
import React, { useContext } from 'react';
import styled from 'styled-components';
import { media } from 'utils/media';
import { ThemeContext } from '../pages/_app';
import AutofitGrid from './AutofitGrid';
import Container from './Container';
import SectionTitle from './SectionTitle';


export default function TwitterTimeline() {
    const context = useContext(ThemeContext)

    return (
        <Container>

            <CustomAutofitGrid>
                <div>
                    <TwitterTimelineDark display={context.theme == 'dark'} />
                    <TwitterTimelineLight display={context.theme == 'light'} />
                </div>

                <SectionTitle>Follow us <span className='twitter-link'><a href="https://twitter.com/DropboxOSS" target="_blank" rel="noopener noreferrer">@DropboxOSS</a></span></SectionTitle>
            </CustomAutofitGrid>
        </Container>
    )
}

function TwitterTimelineDark(props: { display: boolean }) {
    return (
        <div style={{ display: props.display ? 'flex' : 'none' }}>
            <a className="twitter-timeline" data-width="500" data-height="500" data-theme='dark' href="https://twitter.com/DropboxOSS?ref_src=twsrc%5Etfw">Tweets by DropboxOSS</a>
            <Script src="https://platform.twitter.com/widgets.js"></Script>
        </div>
    )
}


function TwitterTimelineLight(props: { display: boolean }) {
    return (
        <div style={{ display: props.display ? 'flex' : 'none' }}>
            <a className="twitter-timeline" data-width="500" data-theme='light' href="https://twitter.com/DropboxOSS?ref_src=twsrc%5Etfw">Tweets by DropboxOSS</a>
            <Script src="https://platform.twitter.com/widgets.js"></Script>
        </div>
    )
}


const CustomAutofitGrid = styled(AutofitGrid)`
  --autofit-grid-item-size: 40rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  
  ${media('<desktop')} {
    flex-direction: column-reverse;
    justify-content: space-around;
    align-items: center;
  }

  ${media('<=tablet')} {
      --autofit-grid-item-size: 30rem;
  }

  ${media('<=phone')} {
    --autofit-grid-item-size: 100%;
  }

  div {
      margin: 1rem;

      span {
          a {
              color: rgb(var(--primary));
              text-decoration: none;
          }
      }
      }
  }
`;
