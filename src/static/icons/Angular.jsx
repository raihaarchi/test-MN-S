import React from 'react';
import PropTypes from 'prop-types';

const Angular = ({ width, height, classnames, ...attr }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 28 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={classnames}
    {...attr}
  >
    <path
      d="M11.4401 15.8063H16.5553L13.9977 9.66916L11.4401 15.8063ZM13.9977 0L0 4.97858L2.13242 23.4379L13.9977 30L25.8676 23.4482L28 4.97858L13.9977 0.00469058V0ZM22.7344 22.8863H19.4703L17.7102 18.5081H10.2833L8.52319 22.8863H5.25911L13.9958 3.31249L22.7344 22.8863Z"
      fill="black"
    />
  </svg>
);

Angular.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  classnames: PropTypes.string,
};

Angular.defaultProps = {
  width: 47,
  height: 50,
  classnames: '',
};

export default Angular;
