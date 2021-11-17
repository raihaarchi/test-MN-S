import React from 'react';
import PropTypes from 'prop-types';
import ContactsPage from '../components/Contacts';
import Layout from '../ui/Layout';

const Contacts = ({ toggleLanguage, togglePlay, setIsSidebarOpen, language, isPlaying, isSidebarOpen }) => (
  <>
    <Layout
      toggleLanguage={toggleLanguage}
      togglePlay={togglePlay}
      setIsSidebarOpen={setIsSidebarOpen}
      language={language}
      isPlaying={isPlaying}
      isHeaderMobile
      withSidebar
      isSidebarOpen={isSidebarOpen}
      withWidget
    >
      <ContactsPage />
    </Layout>
  </>
);

Contacts.propTypes = {
  toggleLanguage: PropTypes.func,
  togglePlay: PropTypes.func,
  isSidebarOpen: PropTypes.bool,
  setIsSidebarOpen: PropTypes.func,
  language: PropTypes.string.isRequired,
  isPlaying: PropTypes.bool.isRequired,
};

Contacts.defaultProps = {
  toggleLanguage: () => {},
  togglePlay: () => {},
  setIsSidebarOpen: () => {},
  isSidebarOpen: false,
};

export default Contacts;
