import React from 'react';
import PropTypes from 'prop-types';
import MessengerCustomerChat from 'react-messenger-customer-chat';
import Sidebar from '../../components/Sidebar';
import styles from './styles.module.scss';
import Header from '../../components/Header';

const Layout = ({
  children,
  withSidebar,
  withHeader,
  isSidebarOpen,
  setIsSidebarOpen,
  isPlaying,
  language,
  toggleLanguage,
  togglePlay,
  isHeaderMobile,
  isOpenCase,
  withWidget,
}) => (
  <>
    {withSidebar && <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />}
    <div className={styles.page__content}>
      {withWidget && (
        <MessengerCustomerChat
          pageId="100276311825862"
          appId="721479128441939"
          themeColor="#0084FF"
          language="ru_RU"
          loggedInGreeting="Здравствуйте! Чем я могу вам помочь?"
        />
      )}
      {(withHeader || isHeaderMobile) && (
        <Header
          isPlaying={isPlaying}
          language={language}
          toggleLanguage={toggleLanguage}
          togglePlay={togglePlay}
          isHeaderMobile={isHeaderMobile}
          setIsSidebarOpen={setIsSidebarOpen}
          isOpenCase={isOpenCase}
        />
      )}
      {children}
    </div>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  withSidebar: PropTypes.bool,
  withHeader: PropTypes.bool,
  isSidebarOpen: PropTypes.bool,
  setIsSidebarOpen: PropTypes.func,
  isPlaying: PropTypes.bool,
  language: PropTypes.string,
  toggleLanguage: PropTypes.func,
  togglePlay: PropTypes.func,
  isHeaderMobile: PropTypes.bool,
  isOpenCase: PropTypes.bool,
  withWidget: PropTypes.bool,
};

Layout.defaultProps = {
  withSidebar: false,
  withHeader: false,
  isSidebarOpen: false,
  setIsSidebarOpen: () => {},
  isPlaying: false,
  language: '',
  toggleLanguage: () => {},
  togglePlay: () => {},
  isHeaderMobile: false,
  isOpenCase: false,
  withWidget: false,
};

export default Layout;
