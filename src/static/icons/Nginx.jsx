import React from 'react';
import PropTypes from 'prop-types';

const Nginx = ({ classnames, width, height, ...attr }) => (
  <svg
    width={width || 26}
    height={height || 30}
    viewBox="0 0 26 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={classnames}
    {...attr}
  >
    <path
      opacity="0.5"
      d="M13 0L0 7.5V22.5L13 30L26 22.5V7.5L13 0ZM20.5036 20.7375C20.5036 21.6216 19.697 22.3491 18.5939 22.3491C17.8023 22.3491 16.9028 22.0312 16.3419 21.3375L8.83831 12.4125V20.7375C8.83831 21.6366 8.12547 22.3491 7.24098 22.3491H7.14719C6.24394 22.3491 5.53485 21.5963 5.53485 20.7375V9.2625C5.53485 8.37844 6.32179 7.65094 7.41075 7.65094C8.21739 7.65094 9.13564 7.96875 9.69654 8.6625L17.1617 17.5875V9.2625C17.1617 8.35969 17.9149 7.65094 18.7787 7.65094H18.8716C19.7711 7.65094 20.4839 8.39812 20.4839 9.2625V20.7375H20.5036Z"
      fill="black"
    />
  </svg>
);

Nginx.propTypes = {
  classnames: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};

Nginx.defaultProps = {
  classnames: '',
  width: 26,
  height: 30,
};

export default Nginx;
