import React from 'react';
import PropTypes from 'prop-types';

const ArrowLeft = ({ classnames, width, height, ...attr }) => (
  <svg
    className={classnames}
    width={width || 29}
    height={height || 20}
    viewBox="0 0 29 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...attr}
  >
    <path d="M21.5314 4.26826C21.5307 4.26826 2.43351 4.2682 2.43351 4.2682L6.29764 1.41162C6.63109 1.16514 6.71146 0.680891 6.4772 0.330068C6.24293 -0.0206953 5.78261 -0.105317 5.44922 0.141159L0.68048 3.66643C0.25443 3.98138 0 4.49662 0 5.04464C0 5.59259 0.25443 6.10783 0.680594 6.42284L5.44922 9.94812C5.57831 10.0435 5.72625 10.0894 5.87278 10.0894C6.10501 10.0894 6.33361 9.9744 6.4772 9.75927C6.71146 9.40844 6.63114 8.92419 6.29764 8.67772L2.43351 5.82107H21.5238C24.8325 5.82107 27.5242 8.6531 27.5242 12.1342C27.5242 15.6152 24.8324 18.4472 21.5238 18.4472H18.8369C18.4294 18.4472 18.0989 18.7949 18.0989 19.2236C18.0989 19.6524 18.4294 20 18.8369 20H21.5238C25.6462 20 29 16.4714 29 12.1342C29 7.79944 25.6503 4.27261 21.5314 4.26826Z" />
  </svg>
);

ArrowLeft.propTypes = {
  classnames: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};

ArrowLeft.defaultProps = {
  classnames: '',
  width: 29,
  height: 20,
};

export default ArrowLeft;
