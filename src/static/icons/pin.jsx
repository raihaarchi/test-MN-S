import React from 'react';
import PropTypes from 'prop-types';

const Pin = ({ color, ...attr }) => (
  <svg width="15" height="15" viewBox="0 0 10 15" fill="none" xmlns="http://www.w3.org/2000/svg" {...attr}>
    <path
      d="M5 0C7.75695 0 10 2.24306 10 5.00001C10 5.82765 9.79308 6.64825 9.39971 7.3761L5.27343 14.8389C5.21849 14.9384 5.11382 15 5 15C4.88618 15 4.7815 14.9384 4.72657 14.8389L0.598768 7.37364C0.206923 6.64825 0 5.82762 0 4.99998C0 2.24306 2.24305 0 5 0ZM5 7.5C6.37847 7.5 7.49998 6.37849 7.49998 5.00001C7.49998 3.62153 6.37847 2.50002 5 2.50002C3.62153 2.50002 2.50001 3.62153 2.50001 5.00001C2.50001 6.37849 3.62153 7.5 5 7.5Z"
      fill={color}
    />
  </svg>
);

Pin.propTypes = {
  color: PropTypes.string,
};

Pin.defaultProps = {
  color: '',
};

export default Pin;
