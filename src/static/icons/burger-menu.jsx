import React from 'react';
import PropTypes from 'prop-types';

const BurgerMenu = ({ width, height, classnames, ...attr }) => (
  <svg
    width={width}
    height={height}
    className={classnames}
    viewBox="0 0 20 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...attr}
  >
    <path
      d="M0.624985 1.4222H19.375C19.72 1.4222 20 1.10359 20 0.7111C20 0.318547 19.72 0 19.375 0H0.624985C0.280023 0 0 0.318547 0 0.7111C0 1.10365 0.280023 1.4222 0.624985 1.4222Z"
      fill="black"
      fillOpacity="0.7"
    />
    <path
      d="M19.375 7.28888H0.624985C0.279971 7.28888 0 7.60749 0 7.99998C0 8.39247 0.280023 8.71108 0.624985 8.71108H19.375C19.72 8.71108 20 8.39247 20 7.99998C20 7.60749 19.72 7.28888 19.375 7.28888Z"
      fill="black"
      fillOpacity="0.7"
    />
    <path
      d="M19.375 14.5778H0.624985C0.279971 14.5778 0 14.8964 0 15.2889C0 15.6814 0.280023 16 0.624985 16H19.375C19.72 16 20 15.6814 20 15.2889C20.0001 14.8963 19.72 14.5778 19.375 14.5778Z"
      fill="black"
      fillOpacity="0.7"
    />
  </svg>
);

BurgerMenu.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  classnames: PropTypes.string,
};

BurgerMenu.defaultProps = {
  width: 20,
  height: 16,
  classnames: '',
};

export default BurgerMenu;
