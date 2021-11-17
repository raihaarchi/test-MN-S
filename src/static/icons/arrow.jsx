import React from 'react';
import PropTypes from 'prop-types';

const Arrow = ({ width, height, className, ...attr }) => (
  <svg
    width={width}
    height={height}
    className={className}
    viewBox="0 0 50 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...attr}
  >
    <path
      d="M25 0C11.2152 0 0 11.2142 0 25C0 38.7858 11.2152 50 25 50C38.7848 50 50 38.7858 50 25C50 11.2142 38.7848 0 25 0ZM25 47.9167C12.3637 47.9167 2.0833 37.6363 2.0833 25C2.0833 12.3637 12.3637 2.0833 25 2.0833C37.6363 2.0833 47.9167 12.3637 47.9167 25C47.9167 37.6363 37.6363 47.9167 25 47.9167Z"
      fill="black"
    />
    <path
      d="M35.7219 20.0969L25 30.8187L14.2781 20.0969C13.8712 19.69 13.212 19.69 12.8052 20.0969C12.3983 20.5038 12.3983 21.163 12.8052 21.5698L24.2635 33.0281C24.4669 33.2316 24.7335 33.3333 25 33.3333C25.2665 33.3333 25.533 33.2316 25.7365 33.0281L37.1948 21.5698C37.6018 21.1629 37.6018 20.5037 37.1948 20.0969C36.7879 19.69 36.1287 19.69 35.7219 20.0969Z"
      fill="black"
    />
  </svg>
);

Arrow.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
  className: PropTypes.string,
};

Arrow.defaultProps = {
  height: 50,
  width: 50,
  className: '',
};

export default Arrow;
