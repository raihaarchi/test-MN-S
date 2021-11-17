import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames/bind';
import styles from './styles.module.scss';

const cx = cn.bind(styles);

const Tab = ({ children, setSelectedTab, selectedTab, value, isLight }) => {
  const className = cx('tab', { selected: selectedTab === value, tab_dark: !isLight });

  return (
    <div className={className} onClick={() => setSelectedTab(value)}>
      {children}
    </div>
  );
};

Tab.propTypes = {
  setSelectedTab: PropTypes.func.isRequired,
  selectedTab: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  children: PropTypes.string.isRequired,
  isLight: PropTypes.bool.isRequired,
};

export default Tab;
