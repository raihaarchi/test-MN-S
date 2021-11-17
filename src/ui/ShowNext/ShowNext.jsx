import React from 'react';
import cn from 'classnames/bind';
import PropTypes from 'prop-types';
import SvgGenerator from '../SvgGenerator';

import styles from './style.module.scss';

const cx = cn.bind(styles);

const ShowNext = ({ className, onClick, isAppowUp }) => (
  <button type="button" className={cx('show-more', className)} onClick={onClick}>
    <SvgGenerator
      iconId={isAppowUp ? 'arrow-up' : 'arrow-down'}
      width={15}
      height={8}
      classnames={cx('show-more__arrow')}
    />
    ПОКАЗАТЬ ЕЩЕ
  </button>
);

ShowNext.propTypes = {
  isAppowUp: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

ShowNext.defaultProps = {
  isAppowUp: false,
  className: '',
  onClick: () => {},
};

export default ShowNext;
