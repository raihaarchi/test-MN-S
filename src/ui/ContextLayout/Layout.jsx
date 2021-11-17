import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import { IntlProvider } from 'react-intl';
import Container from '../Container';
import ThemeContext from '../../utils/ThemeContext';
import CookieBanner from '../../components/CookieBanner';

const Layout = ({
  children,
  isSidebarOpen,
  messages,
  language,
  themeContext,
  contextData,
  isCookieBannerOpen,
  setIsCookieBannerOpen,
}) => (
  <>
    <Head>
      <title>FrameWork Team</title>
    </Head>
    <IntlProvider locale={language} messages={messages[language]}>
      <ThemeContext.Provider value={contextData}>
        <Container withSidebar bg={themeContext.pageBg} isSidebarOpen={isSidebarOpen}>
          {children}
          {isCookieBannerOpen && <CookieBanner setIsCookieBannerOpen={setIsCookieBannerOpen} />}
        </Container>
      </ThemeContext.Provider>
    </IntlProvider>
  </>
);

Layout.propTypes = {
  children: PropTypes.element.isRequired,
  isSidebarOpen: PropTypes.bool,
  language: PropTypes.string.isRequired,
  messages: PropTypes.objectOf(PropTypes.object).isRequired,
  themeContext: PropTypes.objectOf(PropTypes.string).isRequired,
  contextData: PropTypes.shape({
    setTheme: PropTypes.func.isRequired,
    theme: PropTypes.objectOf(PropTypes.string).isRequired,
  }).isRequired,
  isCookieBannerOpen: PropTypes.bool,
  setIsCookieBannerOpen: PropTypes.func,
};

Layout.defaultProps = {
  isSidebarOpen: false,
  isCookieBannerOpen: false,
  setIsCookieBannerOpen: () => {},
};

export default Layout;
