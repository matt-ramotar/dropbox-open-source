import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import Footer from 'components/Footer';
import { GlobalStyle } from 'components/GlobalStyles';
import Navbar from 'components/Navbar';
import NavigationDrawer from 'components/NavigationDrawer';
import WaveCta from 'components/WaveCta';
import { AppProps } from 'next/dist/shared/lib/router/router';
import Head from 'next/head';
import Script from 'next/script';
import { ColorModeScript } from 'nextjs-color-mode';
import React, { createContext, PropsWithChildren, useMemo, useState } from 'react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import { NavItems } from 'types';
config.autoAddCss = false


export const ThemeContext = createContext({
  theme: '',
  setTheme: (_: string) => { },
});

const navItems: NavItems = [
  { title: 'Projects', href: '/projects', isInternal: true },
  { title: 'Blog', href: 'https://dropbox.tech', isInternal: false },
  { title: 'Twitter', href: 'https://twitter.com/dropboxoss', isInternal: false },
  { title: 'GitHub', href: 'https://github.com/dropbox', isInternal: false },
];


function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState('');
  const context = useMemo(() => ({ theme, setTheme }), [theme]);

  return (
    <>
      <Script src="https://kit.fontawesome.com/148aebd870.js"></Script>

      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5" />

        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <ColorModeScript />
      <GlobalStyle />
      <Providers>

        <ThemeContext.Provider value={context}>
          <Navbar items={navItems} />
          <Component {...pageProps} />
          <WaveCta />
          <Footer />
        </ThemeContext.Provider>
      </Providers>
    </>
  );
}


function Providers<T>({ children }: PropsWithChildren<T>) {
  return (
    <NavigationDrawer items={navItems}>{children}</NavigationDrawer>
  );
}

export default MyApp;
