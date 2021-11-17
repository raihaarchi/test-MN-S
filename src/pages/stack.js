import React from 'react';
import PropTypes from 'prop-types';
import StackPage from '../components/StackPage';
import Layout from '../ui/Layout';

const Stack = ({
  toggleLanguage,
  togglePlay,
  setIsSidebarOpen,
  language,
  isPlaying,
  isSidebarOpen,
  isMobile,
}) => (
  <>
    <Layout
      toggleLanguage={toggleLanguage}
      togglePlay={togglePlay}
      setIsSidebarOpen={setIsSidebarOpen}
      language={language}
      isPlaying={isPlaying}
      isSidebarOpen={isSidebarOpen}
      isHeaderMobile
      withSidebar
      withWidget
    >
      <StackPage isMobile={isMobile} />
    </Layout>
  </>
);

Stack.propTypes = {
  toggleLanguage: PropTypes.func,
  togglePlay: PropTypes.func,
  setIsSidebarOpen: PropTypes.func,
  language: PropTypes.string.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  isSidebarOpen: PropTypes.bool,
};

Stack.defaultProps = {
  toggleLanguage: () => {},
  togglePlay: () => {},
  setIsSidebarOpen: () => {},
  isSidebarOpen: false,
};

export default Stack;
