import React from 'react';
import PropTypes from 'prop-types';
import PageSchool from '@/components/School';
import Layout from '@/ui/Layout';

const School = ({ toggleLanguage, togglePlay, setIsSidebarOpen, language, isPlaying, isSidebarOpen }) => (
  <>
    <Layout
      withSidebar
      toggleLanguage={toggleLanguage}
      togglePlay={togglePlay}
      setIsSidebarOpen={setIsSidebarOpen}
      language={language}
      isHeaderMobile
      isPlaying={isPlaying}
      isSidebarOpen={isSidebarOpen}
      withWidget
    >
      <PageSchool />
    </Layout>
  </>
);

School.propTypes = {
  toggleLanguage: PropTypes.func,
  togglePlay: PropTypes.func,
  setIsSidebarOpen: PropTypes.func,
  language: PropTypes.string.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  isSidebarOpen: PropTypes.bool,
};

School.defaultProps = {
  toggleLanguage: () => {},
  togglePlay: () => {},
  setIsSidebarOpen: () => {},
  isSidebarOpen: false,
};

export default School;
