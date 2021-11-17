import React from 'react';
import PropTypes from 'prop-types';

const En = ({ width, height, color, classnames, ...attr }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 19 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={classnames}
    {...attr}
  >
    <path
      d="M6.75 6.74219H1.82031V10.7734H7.54688V12H0.320312V0.625H7.46875V1.85938H1.82031V5.51562H6.75V6.74219ZM18.1562 12H16.6484L10.9219 3.23438V12H9.41406V0.625H10.9219L16.6641 9.42969V0.625H18.1562V12Z"
      fill={color}
    />
  </svg>
);

En.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
  classnames: PropTypes.string,
};

En.defaultProps = {
  width: 21,
  height: 19,
  color: '',
  classnames: '',
};

export default En;
