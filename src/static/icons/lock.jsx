import React from 'react';
import PropTypes from 'prop-types';

const Lock = ({ width, height, color, className, ...attr }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 31"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...attr}
  >
    <path
      d="M21 11.625H20V7.75C20 3.47587 16.412 0 12 0C7.588 0 4 3.47587 4 7.75V11.625H3C1.34667 11.625 0 12.9283 0 14.5312V28.0938C0 29.6967 1.34667 31 3 31H21C22.6533 31 24 29.6967 24 28.0938V14.5312C24 12.9283 22.6533 11.625 21 11.625ZM6.66667 7.75C6.66667 4.90058 9.05867 2.58333 12 2.58333C14.9413 2.58333 17.3333 4.90058 17.3333 7.75V11.625H6.66667V7.75ZM13.3333 21.5992V24.5417C13.3333 25.2547 12.7373 25.8333 12 25.8333C11.2627 25.8333 10.6667 25.2547 10.6667 24.5417V21.5992C9.87333 21.151 9.33333 20.327 9.33333 19.375C9.33333 17.9503 10.5293 16.7917 12 16.7917C13.4707 16.7917 14.6667 17.9503 14.6667 19.375C14.6667 20.327 14.1267 21.151 13.3333 21.5992Z"
      fill={color}
    />
  </svg>
);

Lock.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  color: PropTypes.string,
  className: PropTypes.string,
};

Lock.defaultProps = {
  color: '',
  className: '',
};

export default Lock;
