import React from 'react';
import PropTypes from 'prop-types';

const LaravelPassport = ({ classnames, width, height, ...attr }) => (
  <svg
    width={width || 39}
    height={height || 30}
    viewBox="0 0 39 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={classnames}
    {...attr}
  >
    <path
      d="M1.97379 0.000732422C0.883531 0.000732422 0 0.887512 0 1.98141L4.76162e-05 27.537C5.01017e-05 28.871 1.07788 29.9524 2.40745 29.9524L8.66669 29.9524L12.3741 22.4645L16.1297 14.9766L12.3741 7.48866L8.66669 0.000732422H5.5852C4.24269 0.000732422 3.00931 0.000732422 1.97379 0.000732422Z"
      fill="black"
      opacity="0.5"
    />
    <path
      d="M10.4003 0C10.4004 0.241732 12.1335 4.05797 14.0594 7.9227L17.5742 14.9758L14.0594 21.9807C12.1816 25.8454 10.3521 30 10.3521 30H12.5187H14.4446L18.152 22.5121L21.9076 14.9758L18.152 7.48792L14.4446 0H12.8076C11.8927 0 10.4003 0 10.4003 0Z"
      fill="black"
      opacity="0.5"
    />
    <path
      d="M16.1296 0.000488281C16.1296 0.000488281 17.9111 4.05846 19.837 7.92319L23.3518 14.9763L19.837 22.0295C17.9111 25.8942 16.1296 29.9522 16.1296 29.9522H18.5852H20.2222L23.9296 22.4643L27.6852 14.9763L23.9296 7.48841L20.2222 0.000488281H18.5852C17.6703 0.000488281 16.1296 0.000488281 16.1296 0.000488281Z"
      fill="black"
      opacity="0.5"
    />
    <path
      d="M22.1482 0.000488281L25.5186 7.87489L28.8408 14.928L25.4704 21.9812L21.9075 29.9522H29.6593H36.6408C37.9173 29.9522 38.952 28.914 38.952 27.6333L39.0001 15.0246V2.41595C39.0001 1.08193 37.9223 0.000488281 36.5927 0.000488281H29.6593H22.1482Z"
      fill="black"
      opacity="0.5"
    />
  </svg>
);

LaravelPassport.propTypes = {
  classnames: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};

LaravelPassport.defaultProps = {
  classnames: '',
  width: 39,
  height: 30,
};

export default LaravelPassport;
