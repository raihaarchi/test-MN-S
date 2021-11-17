import React from 'react';
import PropTypes from 'prop-types';

import Layout from '@/ui/Layout';
import request from '@/utils/api';
import OpenCase from '@/components/OpenCase';
import wrapper from '../../store';
import { loadCompetencies } from '../../store/competencies/actions';
import { useCompetenciesSelector } from '../../store/competencies/selectors';

const OpenCasePage = ({
  setIsSidebarOpen,
  toggleLanguage,
  togglePlay,
  language,
  isPlaying,
  isSidebarOpen,
  data,
}) => {
  const contentForCase = useCompetenciesSelector();

  return (
    <>
      <Layout
        setIsSidebarOpen={setIsSidebarOpen}
        isSidebarOpen={isSidebarOpen}
        isOpenCase
        togglePlay={togglePlay}
        toggleLanguage={toggleLanguage}
        language={language}
        isPlaying={isPlaying}
        isHeaderMobile
        withSidebar
        withWidget
      >
        <OpenCase pageContent={data} contentForCase={contentForCase} />
      </Layout>
    </>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(async ({ store, query: { id } }) => {
  store.getState().competencies.data.length === 0 && store.dispatch(loadCompetencies());
  const response = await request.get(`categories/${id}`).catch((err) => console.log(err));

  return {
    props: {
      data: response.data.data,
    },
  };
});

OpenCasePage.propTypes = {
  setIsSidebarOpen: PropTypes.func,
  toggleLanguage: PropTypes.func,
  togglePlay: PropTypes.func,
  language: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      content: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string,
          text: PropTypes.string,
          technologies: PropTypes.arrayOf(PropTypes.string),
        }),
      ),
    }),
  ).isRequired,
  isMobile: PropTypes.bool,
  isPlaying: PropTypes.bool,
  isSidebarOpen: PropTypes.bool,
};

OpenCasePage.defaultProps = {
  setIsSidebarOpen: () => {},
  toggleLanguage: () => {},
  togglePlay: () => {},
  isMobile: false,
  isPlaying: false,
  isSidebarOpen: false,
};

export default OpenCasePage;
