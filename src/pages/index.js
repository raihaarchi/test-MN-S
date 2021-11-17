import React from 'react';
import PropTypes from 'prop-types';
import Main from '../components/Main';
import Layout from '../ui/Layout';

const Home = ({ toggleLanguage, togglePlay, setIsSidebarOpen, language, isPlaying, isSidebarOpen }) => (
  <>
    <Layout
      withHeader
      withSidebar
      toggleLanguage={toggleLanguage}
      togglePlay={togglePlay}
      setIsSidebarOpen={setIsSidebarOpen}
      language={language}
      isPlaying={isPlaying}
      isSidebarOpen={isSidebarOpen}
      withWidget
    >
      <Main />
    </Layout>
  </>
);

Home.propTypes = {
  toggleLanguage: PropTypes.func,
  togglePlay: PropTypes.func,
  setIsSidebarOpen: PropTypes.func,
  language: PropTypes.string.isRequired,
  isPlaying: PropTypes.bool,
  isSidebarOpen: PropTypes.bool,
};

Home.defaultProps = {
  toggleLanguage: () => {},
  togglePlay: () => {},
  setIsSidebarOpen: () => {},
  isPlaying: false,
  isSidebarOpen: false,
};

export default Home;
