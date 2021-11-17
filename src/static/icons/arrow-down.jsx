import React from 'react';
import PropTypes from 'prop-types';

const ArrowDown = ({ width, height, classnames, ...attr }) => (
  <svg
    width={width}
    height={height}
    className={classnames}
    viewBox="0 0 19 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...attr}
  >
    <path
      d="M17.6486 0.225295L9.5 8.13998L1.35139 0.225295C1.04212 -0.0750984 0.541146 -0.0750984 0.231952 0.225295C-0.0773172 0.525689 -0.0773172 1.01229 0.231952 1.31261L8.94024 9.77099C9.09484 9.92115 9.29746 9.99626 9.5 9.99626C9.70254 9.99626 9.90508 9.92115 10.0598 9.77099L18.768 1.31261C19.0773 1.01221 19.0773 0.525616 18.768 0.225295C18.4588 -0.0750984 17.9578 -0.0750984 17.6486 0.225295Z"
      fill="#ECECEC"
    />
  </svg>
);

ArrowDown.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
  classnames: PropTypes.string,
};

ArrowDown.defaultProps = {
  classnames: '',
  height: 10,
  width: 19,
};

export default ArrowDown;
