import React from 'react';
import PropTypes from 'prop-types';

const Docker = ({ classnames, width, height, ...attr }) => (
  <svg
    width={width || 42}
    height={height || 30}
    viewBox="0 0 42 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={classnames}
    {...attr}
  >
    <path
      d="M18.8821 7.24719H23.673M24.5856 12.4943H29.3764H24.5856ZM18.8821 12.4943H23.673H18.8821ZM13.2928 12.4943H18.0837H13.2928ZM7.70342 12.4943H12.3802H7.70342ZM2 12.4943H6.79088H2ZM7.70342 7.24719H12.3802H7.70342ZM13.2928 7.24719H18.0837H13.2928Z"
      stroke="#7F7F7F"
      strokeWidth="4"
    />
    <path
      d="M42 12.8009C42 12.8009 40.1355 11.0708 36.3029 11.6814C35.8886 8.73009 32.6775 7 32.6775 7C32.6775 7 29.6736 10.5619 31.8488 14.531C31.2273 14.8363 30.1915 15.2434 28.6378 15.2434H0.152395C-0.365521 17.177 -0.36552 30 13.929 30C24.1837 30 31.8488 25.3186 35.4743 16.7699C40.8606 17.177 42 12.8009 42 12.8009Z"
      fill="#7F7F7F"
    />
    <path d="M23.65 0H18.9V4H23.65V0Z" fill="#7F7F7F" />
  </svg>
);

Docker.propTypes = {
  classnames: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};

Docker.defaultProps = {
  classnames: '',
  width: 42,
  height: 30,
};

export default Docker;
