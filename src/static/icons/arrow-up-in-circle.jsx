import React from 'react';
import PropTypes from 'prop-types';

const ArrowUpInCircle = ({ width, height, classnames, ...attr }) => (
  <svg
    width={width}
    height={height}
    className={classnames}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...attr}
  >
    <g opacity="0.7">
      <path
        d="M20 40C31.0278 40 40 31.0287 40 20C40 8.97133 31.0278 0 20 0C8.97219 0 0 8.97133 0 20C0 31.0287 8.97219 40 20 40ZM20 1.66664C30.1091 1.66664 38.3334 9.89094 38.3334 20C38.3334 30.1091 30.1091 38.3334 20 38.3334C9.89094 38.3334 1.66664 30.1091 1.66664 20C1.66664 9.89094 9.89094 1.66664 20 1.66664Z"
        fill="black"
      />
      <path
        d="M11.4225 23.9225L20 15.3451L28.5775 23.9225C28.903 24.2481 29.4304 24.2481 29.7558 23.9225C30.0814 23.597 30.0814 23.0696 29.7558 22.7442L20.5892 13.5775C20.4265 13.4148 20.2132 13.3334 20 13.3334C19.7868 13.3334 19.5736 13.4148 19.4108 13.5775L10.2441 22.7442C9.91858 23.0697 9.91858 23.5971 10.2441 23.9225C10.5697 24.2481 11.097 24.2481 11.4225 23.9225Z"
        fill="black"
      />
    </g>
  </svg>
);

ArrowUpInCircle.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
  classnames: PropTypes.string,
};

ArrowUpInCircle.defaultProps = {
  classnames: '',
  height: 8,
  width: 15,
};

export default ArrowUpInCircle;
