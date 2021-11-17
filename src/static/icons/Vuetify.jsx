import React from 'react';
import PropTypes from 'prop-types';

const Vuetify = ({ classnames, width, height, ...attr }) => (
  <svg
    width={width || 28}
    height={height || 30}
    viewBox="0 0 28 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={classnames}
    {...attr}
  >
    <path
      opacity="0.5"
      d="M14 14.4962L7.45705 0L20.543 0L14 14.4962ZM14 30L0 4.37594H7.32875L14 18.7519L20.6712 4.37594H28L14 30Z"
      fill="black"
    />
  </svg>
);

Vuetify.propTypes = {
  classnames: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};

Vuetify.defaultProps = {
  classnames: '',
  width: 28,
  height: 30,
};

export default Vuetify;
