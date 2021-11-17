import React from 'react';
import PropTypes from 'prop-types';

const ArrowRight = ({ width, height, classnames, ...attr }) => (
  <svg
    width={width}
    height={height}
    className={classnames}
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...attr}
  >
    <g opacity="0.7">
      <path
        d="M0 15C0 23.2709 6.7285 30 15 30C23.2715 30 30 23.2709 30 15C30 6.72914 23.2715 0 15 0C6.7285 0 0 6.72914 0 15ZM28.75 15C28.75 22.5818 22.5818 28.75 15 28.75C7.4182 28.75 1.24998 22.5818 1.24998 15C1.24998 7.4182 7.4182 1.24998 15 1.24998C22.5818 1.24998 28.75 7.4182 28.75 15Z"
        fill="black"
      />
      <path
        d="M12.0571 8.56686L18.4902 15L12.0571 21.4331C11.813 21.6773 11.813 22.0728 12.0571 22.3169C12.3013 22.561 12.6968 22.561 12.9409 22.3169L19.8159 15.4419C19.9379 15.3198 19.999 15.1599 19.999 15C19.999 14.8401 19.9379 14.6802 19.8159 14.5581L12.9409 7.68309C12.6968 7.43893 12.3012 7.43893 12.0571 7.68309C11.813 7.92725 11.813 8.32276 12.0571 8.56686Z"
        fill="black"
      />
    </g>
  </svg>
);

ArrowRight.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
  classnames: PropTypes.string,
};

ArrowRight.defaultProps = {
  classnames: '',
  height: 30,
  width: 30,
};

export default ArrowRight;
