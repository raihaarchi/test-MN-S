import React from 'react';
import PropTypes from 'prop-types';

const ComeBack = ({ width, height, classnames, ...attr }) => (
  <svg
    width={width}
    height={height}
    className={classnames}
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...attr}
  >
    <path
      d="M0 15C0 23.2709 6.7285 30 15 30C23.2715 30 30 23.2709 30 15C30 6.72914 23.2715 0 15 0C6.7285 0 0 6.72914 0 15ZM28.75 15C28.75 22.5818 22.5818 28.75 15 28.75C7.4182 28.75 1.24998 22.5818 1.24998 15C1.24998 7.4182 7.4182 1.24998 15 1.24998C22.5818 1.24998 28.75 7.4182 28.75 15Z"
      fill="#5B5B5B"
    />
    <path
      d="M8.64645 14.6464C8.45118 14.8417 8.45118 15.1583 8.64645 15.3536L11.8284 18.5355C12.0237 18.7308 12.3403 18.7308 12.5355 18.5355C12.7308 18.3403 12.7308 18.0237 12.5355 17.8284L9.70711 15L12.5355 12.1716C12.7308 11.9763 12.7308 11.6597 12.5355 11.4645C12.3403 11.2692 12.0237 11.2692 11.8284 11.4645L8.64645 14.6464ZM21 14.5L9 14.5V15.5L21 15.5V14.5Z"
      fill="#5B5B5B"
    />
  </svg>
);

ComeBack.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  classnames: PropTypes.string,
};

ComeBack.defaultProps = {
  width: 30,
  height: 30,
  classnames: '',
};

export default ComeBack;
