import Container from 'components/Container';
import SectionTitle from 'components/SectionTitle';
import NextImage from 'next/image';
import React from 'react';
import styled from 'styled-components';
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

const LOGOS = [
  'square.svg',
  'meta.svg',
  'microsoft.svg',
  'google.svg',
  'twitter.svg',
  'apple.svg'
];

export default function GloballyTrusted() {
  return (
    <GloballyTrustedWrapper>
      <SectionTitle>Globally trusted</SectionTitle>
      <Swiper
        modules={[Autoplay]}
        slidesPerView={4}
        spaceBetween={30}
        loop={true}
        autoplay={{ delay: 0, disableOnInteraction: false, pauseOnMouseEnter: false, waitForTransition: false, stopOnLastSlide: false }}
        speed={3000}
        breakpoints={{
          320: { slidesPerView: 2 },
          768: { slidesPerView: 4 },
          1025: { slidesPerView: 6 },
        }}
        className="swiper-wrapper"
        style={{
          marginTop: '4rem'
        }}
      >
        {LOGOS.map((logo) => (
          <SwiperSlide key={logo}>
            <NextImage src={'/' + logo} alt={normalizePartnerLogoName(logo)} width={128} height={60} />
          </SwiperSlide>
        ))}
      </Swiper>
    </GloballyTrustedWrapper>
  );
}

function normalizePartnerLogoName(logo: string) {
  return logo.replace('.svg', '');
}

const GloballyTrustedWrapper = styled(Container)`
  .swiper-wrapper {
    will-change: transform;
    transition-timing-function: linear;
    margin-top: 0.5rem;
    user-select: none;
  }

  .swiper-slide {
    opacity: 0.8;
    transition: opacity 0.2s;

    &:hover {
      opacity: 1;
    }
  }
`;
