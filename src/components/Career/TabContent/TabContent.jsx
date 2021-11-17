import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ModuleContent from '@/ui/InternalSidebar/ModuleInternalSidebar/ModuleContent';

const TabContent = ({ title, subtitle, description, openVacancy, vacancy, id, isActiveTab }) => {
  const [isActive, setIsActive] = useState(isActiveTab);

  useEffect(() => {
    if (id === vacancy.key) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [vacancy, id]);

  return (
    <ModuleContent
      title={title}
      subtitle={subtitle}
      description={description}
      showContentPage={openVacancy}
      isActive={isActive}
    />
  );
};

TabContent.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  openVacancy: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  isActiveTab: PropTypes.bool.isRequired,
  vacancy: PropTypes.shape({
    key: PropTypes.number,
    header: PropTypes.string,
    subtitle: PropTypes.string,
    close: PropTypes.bool,
    content: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        sum: PropTypes.string,
        subtitle: PropTypes.string,
      }),
    ),
  }).isRequired,
};

TabContent.defaultProps = {};

export default TabContent;
