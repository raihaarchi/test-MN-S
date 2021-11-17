import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../ui/Layout';
import HowWeWork from '../components/HowWeWork';

const How = ({ toggleLanguage, togglePlay, setIsSidebarOpen, language, isPlaying, isSidebarOpen, data }) => (
  <>
    <Layout
      toggleLanguage={toggleLanguage}
      togglePlay={togglePlay}
      setIsSidebarOpen={setIsSidebarOpen}
      language={language}
      isPlaying={isPlaying}
      withSidebar
      isSidebarOpen={isSidebarOpen}
      withWidget
      isHeaderMobile
    >
      <HowWeWork data={data} />
    </Layout>
  </>
);

export const getServerSideProps = () => {
  const data = [
    {
      id: 1,
      title: 'Time and materials',
      text: 'Выполняем любые задачи ограниченные временем <br /> и бюджетом',
      subtext: '400-1800 руб/ч',
    },
    {
      id: 2,
      title: 'Outstaffing',
      text: 'Если вы хотите временно усилить свою команду <br /> квалифицированным разработчиком',
      subtext: 'по договоренности',
    },
    {
      id: 3,
      title: 'Fixed price',
      text: 'Работаем по фиксированной ставке для <br /> уверенности и комфорта',
      subtext: '1500 руб/ч',
    },
  ];

  return {
    props: {
      data,
    },
  };
};

How.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      text: PropTypes.string,
      subtext: PropTypes.string,
    }),
  ).isRequired,
  toggleLanguage: PropTypes.func,
  togglePlay: PropTypes.func,
  setIsSidebarOpen: PropTypes.func,
  language: PropTypes.string.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  isSidebarOpen: PropTypes.bool,
};

How.defaultProps = {
  toggleLanguage: () => {},
  togglePlay: () => {},
  setIsSidebarOpen: () => {},
  isSidebarOpen: false,
};

export default How;
