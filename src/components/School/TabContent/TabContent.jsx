import React from 'react';
import PropTypes from 'prop-types';

import ModuleContent from '@/ui/InternalSidebar/ModuleInternalSidebar/ModuleContent';

const TabContent = ({ isOpenTab, title, onClick }) => (
  <ModuleContent
    isNotHundleTab
    title={title}
    showContentPage={onClick}
    description="факультет"
    isActive={isOpenTab}
  />
);
TabContent.propTypes = {
  onClick: PropTypes.func,
  title: PropTypes.string,
  isOpenTab: PropTypes.bool,
};

TabContent.defaultProps = {
  title: '',
  isOpenTab: false,
  onClick: () => {},
};

export default TabContent;
