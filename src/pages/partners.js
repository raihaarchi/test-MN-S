import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../ui/Layout';
import Partners from '../components/Partners/Partners';

const PartnersPage = ({
  toggleLanguage,
  togglePlay,
  setIsSidebarOpen,
  language,
  isPlaying,
  data,
  isMobile,
  isSidebarOpen,
}) => (
  <>
    <Layout
      toggleLanguage={toggleLanguage}
      togglePlay={togglePlay}
      setIsSidebarOpen={setIsSidebarOpen}
      isSidebarOpen={isSidebarOpen}
      language={language}
      isPlaying={isPlaying}
      withSidebar
      isHeaderMobile
      withWidget
    >
      <Partners data={data} isMobile={isMobile} />
    </Layout>
  </>
);

const data = [
  'reactive-media',
  'globus',
  'imagespark',
  'agima',
  'affect',
  'extyl',
  'meteor',
  'redkeds',
  'atvinta',
  'burda',
  'qsoft',
  'chulakov',
  'gobza',
  'family',
  'mst',
  'skolkovo',
];

export async function getServerSideProps() {
  return {
    props: {
      data,
    },
  };
}

PartnersPage.propTypes = {
  toggleLanguage: PropTypes.func,
  togglePlay: PropTypes.func,
  setIsSidebarOpen: PropTypes.func,
  language: PropTypes.string.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  data: PropTypes.arrayOf(PropTypes.string).isRequired,
  isMobile: PropTypes.bool,
  isSidebarOpen: PropTypes.bool,
};

PartnersPage.defaultProps = {
  toggleLanguage: () => {},
  togglePlay: () => {},
  setIsSidebarOpen: () => {},
  isMobile: false,
  isSidebarOpen: false,
};

export default PartnersPage;
