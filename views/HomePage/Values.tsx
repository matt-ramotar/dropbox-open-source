import AutofitGrid from 'components/AutofitGrid';
import BasicCard from 'components/BasicCard';
import Container from 'components/Container';
import SectionTitle from 'components/SectionTitle';
import React from 'react';
import styled from 'styled-components';
import { media } from 'utils/media';

const VALUES = [
  {
    title: `🛡️ Be Worthy of Trust`,
    description:
      `Millions of teams trust us with their most important information. But this trust can vanish in an instant. That’s why integrity is the foundation of our culture. We do the right thing, even when nobody’s looking. And we’re honest—even when it’s uncomfortable.`,
  },
  {
    title: `👯‍♀️ They Win, We Win`,
    description:
      `Our customers come first. So we put in the work to deeply understand them. We ask, “Who’s the customer?” and “What do they really need?” When they succeed, our business (and everything else) falls into place.`,
  },
  {
    title: `✨ Keep It Simple`,
    description:
      `Simple things work better—and make more sense. So we build products that do a few things really well. And we don’t overcomplicate life at Dropbox, whether it’s a plan or a process. Getting to simple isn’t always easy, but it’s worth the effort.`,
  },
  {
    title: `💪 Own It`,
    description:
      `We take responsibility for our work, from start to finish. When we get stuck, we unblock ourselves. When something goes wrong, we don’t ask, “What did they screw up?” but “What could I do better?” We learn from our mistakes and keep going—until we have real impact.`,
  },
  {
    title: `❤️ Make Work Human`,
    description:
      `Our mission is to design a more enlightened way of working, for Dropboxers and the world. So we make products that prioritize our needs as humans. And we build a compassionate culture where you can do your best work—no matter who you are or where you’re from.`,
  },
];

export default function Values() {
  return (
    <Container>
      <SectionTitle>Our values</SectionTitle>

      <CustomAutofitGrid>
        {VALUES.map((singleFeature) => (
          <BasicCard key={singleFeature.title} {...singleFeature} />
        ))}
      </CustomAutofitGrid>
    </Container>
  );
}


const CustomAutofitGrid = styled(AutofitGrid)`
  --autofit-grid-item-size: 40rem;

  ${media('<=tablet')} {
    --autofit-grid-item-size: 30rem;
  }

  ${media('<=phone')} {
    --autofit-grid-item-size: 100%;
  }
`;
