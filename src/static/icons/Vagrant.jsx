import React from 'react';
import PropTypes from 'prop-types';

const Vagrant = ({ classnames, width, height, ...attr }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={classnames}
    {...attr}
  >
    <path
      opacity="0.5"
      d="M29.9763 2.15081L26.2448 0L18.7877 4.30162V6.3235L15.003 16.0988L11.2419 6.42899V4.30748L3.74926 0L0.00591366 2.14495L0 4.33092L9.37907 26.8119L15.003 30L20.615 26.7943L30 4.2899L29.9763 2.15081Z"
      fill="black"
    />
  </svg>
);

Vagrant.propTypes = {
  classnames: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};

Vagrant.defaultProps = {
  classnames: '',
  width: 30,
  height: 30,
};

export default Vagrant;
