import PropTypes from 'prop-types';
import React from 'react';

import cn from 'classnames/bind';
import styles from './styles.module.scss';

const cx = cn.bind(styles);

const LineWithText = ({ text }) => <div className={cx('line')}>{text}</div>;

LineWithText.propTypes = {
  text: PropTypes.string,
};

LineWithText.defaultProps = {
  text: '',
};

export default LineWithText;
