import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames/bind';
import styles from './styles.module.scss';

const Tabs = ({ children, className, isLight }) => {
  const cx = cn.bind(styles);
  return <div className={cx('tabs', className, { tabs_dark: !isLight })}>{children}</div>;
};

Tabs.propTypes = {
  children: PropTypes.arrayOf(PropTypes.any).isRequired,
  className: PropTypes.string,
  isLight: PropTypes.bool.isRequired,
};

Tabs.defaultProps = {
  className: '',
};

export default Tabs;
