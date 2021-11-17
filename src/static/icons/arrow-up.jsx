import React from 'react';
import PropTypes from 'prop-types';

const ArrowUp = ({ width, height, classnames, ...attr }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 15 8"
    className={classnames}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...attr}
  >
    <path
      d="M1.06689 7.8197L7.5 1.48558L13.9331 7.8197C14.1773 8.0601 14.5728 8.0601 14.8169 7.8197C15.061 7.57929 15.061 7.18987 14.8169 6.94952L7.94191 0.180289C7.81986 0.0601158 7.6599 0 7.5 0C7.3401 0 7.1802 0.0601158 7.05809 0.180289L0.18312 6.94952C-0.0610399 7.18993 -0.0610399 7.57935 0.18312 7.8197C0.427279 8.0601 0.822786 8.0601 1.06689 7.8197Z"
      fill="#ECECEC"
    />
  </svg>
);

ArrowUp.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
  classnames: PropTypes.string,
};

ArrowUp.defaultProps = {
  classnames: '',
  height: 8,
  width: 15,
};

export default ArrowUp;
