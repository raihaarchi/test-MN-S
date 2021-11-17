import PropTypes from 'prop-types';
import React from 'react';
import cn from 'classnames/bind';

import styles from './styles.module.scss';

const cx = cn.bind(styles);

const CaseTechnology = ({ text, icon }) => (
  <div className={cx('technology')}>
    {icon}
    <span className={cx('technology__text')}>{text}</span>
  </div>
);

CaseTechnology.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
};

export default CaseTechnology;
