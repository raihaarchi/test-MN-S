import cookies from 'next-cookies';
import PropTypes from 'prop-types';
import React, { useState, useEffect, useCallback } from 'react';
import { isMobileOnly } from 'react-device-detect';
import Hammer from 'react-hammerjs';
import { useRouter } from 'next/router';

import ContextLayout from '@/ui/ContextLayout';
import getTheme from '@/utils/getTheme';
import useTheme from '@/hooks/useTheme';

import messagesRu from '../translations/ru.json';
import messagesEn from '../translations/en.json';

import 'swiper/swiper-bundle.css';
import '../global.css';
// import 'swiper/swiper.scss';

import wrapper from '../store';

const CustomApp = ({ Component, pageProps, cookie: { theme, language, isCookieAccept } }) => {
  const [isMobile, setIsMobile] = useState(null);

  useEffect(() => {
    setIsMobile(isMobileOnly);
  }, []);

  const initialTheme = getTheme(theme || 'light');
  const [song, setSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false); // make it true if render-play needed
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isCookieBannerOpen, setIsCookieBannerOpen] = useState(!isCookieAccept);
  const togglePlay = () => setIsPlaying((playing) => !playing);

  /* language toggling */
  const messages = {
    ru: messagesRu,
    en: messagesEn,
  };
  const [lngg, setLngg] = useState(language || 'ru');
  const toggleLanguage = () => (lngg === 'ru' ? setLngg('en') : setLngg('ru'));

  /* song toggling */
  useEffect(() => {
    setSong(new Audio('./FS.mp3'));
  }, []);

  const toggleSongPlaying = useCallback(() => {
    if (!isPlaying) {
      return song && song.pause();
    }
    return song && song.play();
  }, [isPlaying, song]);

  useEffect(() => {
    toggleSongPlaying();
  }, [toggleSongPlaying]);

  /* theme changing */
  const {
    context: { cookieTheme },
  } = useTheme();
  const [themeContext, setThemeContext] = useState({ ...cookieTheme, ...initialTheme });
  const changeTheme = (themeName) => {
    const themeForChange = getTheme(themeName);
    const themeCtx = { ...themeContext, ...themeForChange };
    setThemeContext(themeCtx);
  };
  const contextData = { theme: themeContext, setTheme: changeTheme };
  const routesArr = [
    '/',
    '/stack',
    '/competencies',
    '/settings',
    '/school',
    '/partners',
    '/career',
    '/contacts',
  ];

  const router = useRouter();
  const pageIndex = routesArr.findIndex((elem) => elem === router.pathname);
  const getPrevPage = () =>
    isMobile && pageIndex < routesArr.length - 1 ? router.push(routesArr[pageIndex + 1]) : null;
  const getNextPage = () => (isMobile && pageIndex > 0 ? router.push(routesArr[pageIndex - 1]) : null);

  const options = {
    touchAction: 'auto',
  };

  return (
    <>
      <Hammer
        options={options}
        direction="DIRECTION_VERTICAL"
        onSwipeUp={getPrevPage}
        onSwipeDown={getNextPage}
      >
        <div>
          <ContextLayout
            withSidebar
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
            language={lngg}
            messages={messages}
            contextData={contextData}
            themeContext={themeContext}
            isCookieBannerOpen={isCookieBannerOpen}
            setIsCookieBannerOpen={setIsCookieBannerOpen}
          >
            <Component
              // eslint-disable-next-line react/jsx-props-no-spreading
              {...pageProps}
              language={lngg}
              isPlaying={isPlaying}
              toggleLanguage={toggleLanguage}
              togglePlay={togglePlay}
              setIsSidebarOpen={setIsSidebarOpen}
              isMobile={isMobile}
              isSidebarOpen={isSidebarOpen}
            />
          </ContextLayout>
        </div>
      </Hammer>
    </>
  );
};

CustomApp.propTypes = {
  cookie: PropTypes.objectOf(PropTypes.string).isRequired,
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.objectOf(PropTypes.any),
  isMobile: PropTypes.bool,
};

CustomApp.defaultProps = {
  pageProps: {},
  isMobile: false,
};

CustomApp.getInitialProps = async ({ ctx }) => ({ cookie: cookies(ctx) });

export default wrapper.withRedux(CustomApp);
