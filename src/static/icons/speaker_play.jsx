import React from 'react';
import PropTypes from 'prop-types';

const Speaker = ({ color, classnames, ...attr }) => (
  <svg
    width="19"
    height="17"
    viewBox="0 0 19 17"
    className={classnames}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...attr}
  >
    <rect
      x="12.5"
      y="5.84854"
      width="1.2"
      height="7"
      rx="0.6"
      transform="rotate(-45 12.5 5.84854)"
      fill={color}
    />
    <rect x="17.4498" y="5" width="1.2" height="7" rx="0.6" transform="rotate(45 17.4498 5)" fill={color} />
  </svg>
);

Speaker.propTypes = {
  color: PropTypes.string,
  classnames: PropTypes.string,
};

Speaker.defaultProps = {
  color: '',
  classnames: '',
};

export default Speaker;
