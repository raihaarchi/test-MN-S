import React from 'react';
import PropTypes from 'prop-types';

const Vue = ({ width, height, classnames, ...attr }) => (
  <svg
    width={width || 56}
    height={height || 50}
    viewBox="0 0 34 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={classnames}
    {...attr}
  >
    <path
      d="M34 0L17 30L0 0H2.76258L17 25.1249L31.2374 0H34ZM17 6.82219L13.0699 0H7.10892L17 17.4548L26.8911 0H20.9301L17 6.82219Z"
      fill="black"
    />
  </svg>
);

Vue.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  classnames: PropTypes.string,
};

Vue.defaultProps = {
  width: 50,
  height: 50,
  classnames: '',
};

export default Vue;
