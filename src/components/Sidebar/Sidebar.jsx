import React from 'react';
import PropTypes from 'prop-types';
import OnOutsideClick from 'react-outclick';
import cn from 'classnames/bind';
import useTheme from '../../hooks/useTheme';

import Nav from '../Nav';
import styles from './styles.module.scss';

const cx = cn.bind(styles);

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const { isLight } = useTheme();
  const sidebarClassName = cx('sidebar', {
    sidebar_light: isLight,
    sidebar_dark: !isLight,
    sidebar_visible: isSidebarOpen,
  });
  const onOutsideClick = () => isSidebarOpen && setIsSidebarOpen(false);

  return (
    <OnOutsideClick onOutsideClick={onOutsideClick}>
      <div className={sidebarClassName}>
        <Nav setIsSidebarOpen={setIsSidebarOpen} />
      </div>
    </OnOutsideClick>
  );
};

Sidebar.propTypes = {
  isSidebarOpen: PropTypes.bool,
  setIsSidebarOpen: PropTypes.func,
};

Sidebar.defaultProps = {
  isSidebarOpen: false,
  setIsSidebarOpen: () => {},
};

export default Sidebar;
