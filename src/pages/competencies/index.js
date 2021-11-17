import React from 'react';
import PropTypes from 'prop-types';

import Cases from '../../components/Cases';
import Layout from '../../ui/Layout';
import { loadCompetencies } from '../../store/competencies/actions';
import wrapper from '../../store';
import { useCompetenciesSelector } from '../../store/competencies/selectors';

const Competencies = ({
  setIsSidebarOpen,
  toggleLanguage,
  togglePlay,
  language,
  isPlaying,
  isSidebarOpen,
}) => {
  const data = useCompetenciesSelector();

  return (
    <>
      <Layout
        setIsSidebarOpen={setIsSidebarOpen}
        togglePlay={togglePlay}
        toggleLanguage={toggleLanguage}
        language={language}
        isPlaying={isPlaying}
        isHeaderMobile
        withSidebar
        isSidebarOpen={isSidebarOpen}
        withWidget
      >
        <Cases data={data} />
      </Layout>
    </>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  ({ store }) => store.getState().competencies.data.length === 0 && store.dispatch(loadCompetencies()),
);

Competencies.propTypes = {
  setIsSidebarOpen: PropTypes.func,
  toggleLanguage: PropTypes.func,
  togglePlay: PropTypes.func,
  language: PropTypes.string.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  isSidebarOpen: PropTypes.bool.isRequired,
};

Competencies.defaultProps = {
  setIsSidebarOpen: () => {},
  toggleLanguage: () => {},
  togglePlay: () => {},
};

export default Competencies;
