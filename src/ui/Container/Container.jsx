import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames/bind';

import styles from './styles.module.scss';

const Container = ({ children, bg, isSidebarOpen }) => {
  const cx = cn.bind(styles);

  const className = cx('container', {
    container_hidden: isSidebarOpen,
  });
  return (
    <div style={{ background: bg, minHeight: '100vh' }} className={className}>
      {children}
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
  bg: PropTypes.string.isRequired,
  isSidebarOpen: PropTypes.bool.isRequired,
};

export default Container;
