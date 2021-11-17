import React from 'react';
import PropTypes from 'prop-types';

const ArrowDownInCircle = ({ width, height, classnames, ...attr }) => (
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
        d="M20 0C8.97219 0 0 8.97133 0 20C0 31.0287 8.97219 40 20 40C31.0278 40 40 31.0287 40 20C40 8.97133 31.0278 0 20 0ZM20 38.3334C9.89094 38.3334 1.66664 30.1091 1.66664 20C1.66664 9.89094 9.89094 1.66664 20 1.66664C30.1091 1.66664 38.3334 9.89094 38.3334 20C38.3334 30.1091 30.1091 38.3334 20 38.3334Z"
        fill="black"
      />
      <path
        d="M28.5775 16.0775L20 24.6549L11.4225 16.0775C11.097 15.7519 10.5696 15.7519 10.2442 16.0775C9.91861 16.403 9.91861 16.9304 10.2442 17.2558L19.4108 26.4225C19.5735 26.5852 19.7868 26.6666 20 26.6666C20.2132 26.6666 20.4264 26.5852 20.5892 26.4225L29.7559 17.2558C30.0814 16.9303 30.0814 16.403 29.7559 16.0775C29.4303 15.7519 28.903 15.7519 28.5775 16.0775Z"
        fill="black"
      />
    </g>
  </svg>
);

ArrowDownInCircle.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
  classnames: PropTypes.string,
};

ArrowDownInCircle.defaultProps = {
  classnames: '',
  height: 10,
  width: 19,
};

export default ArrowDownInCircle;
