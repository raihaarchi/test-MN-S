import React from 'react';
import PropTypes from 'prop-types';
import PageCareer from '../components/Career';
import Layout from '../ui/Layout';

const Career = ({ toggleLanguage, togglePlay, setIsSidebarOpen, language, isPlaying, isSidebarOpen }) => (
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
      <PageCareer />
    </Layout>
  </>
);

Career.propTypes = {
  toggleLanguage: PropTypes.func,
  togglePlay: PropTypes.func,
  setIsSidebarOpen: PropTypes.func,
  language: PropTypes.string.isRequired,
  isPlaying: PropTypes.bool.isRequired,
};

Career.defaultProps = {
  toggleLanguage: () => {},
  togglePlay: () => {},
  setIsSidebarOpen: () => {},
};

export default Career;
