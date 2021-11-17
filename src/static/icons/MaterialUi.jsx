import React from 'react';
import PropTypes from 'prop-types';

const MaterialUi = ({ classnames, width, height, ...attr }) => (
  <svg
    width={width || 34}
    height={height || 30}
    viewBox="0 0 72 63"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={classnames}
    {...attr}
  >
    <path d="M0 0L9.26956 6.27059V37.6236L0 31.353L0 0Z" fill="#7F7F7F" />
    <path d="M71.0665 23.5147L61.7969 29.7853V50.1647L71.0665 43.8941V23.5147Z" fill="#7F7F7F" />
    <path d="M71.0665 1.56769L61.7969 7.83828V18.8118L71.0665 12.5412V1.56769Z" fill="#7F7F7F" />
    <path d="M52.5276 0L43.258 6.27059V37.6236L52.5276 31.353V0Z" fill="#7F7F7F" />
    <path d="M0 10.9735L26.2637 28.2177V17.2441L0 0L0 10.9735Z" fill="#7F7F7F" />
    <path d="M52.5275 10.9735L26.2638 28.2177V17.2441L52.5275 0V10.9735Z" fill="#7F7F7F" />
    <path d="M52.5274 32.9205L26.2637 50.1646V39.1911L52.5274 21.947V32.9205Z" fill="#7F7F7F" />
    <path d="M71.0667 45.4618L44.803 62.7059V51.7323L71.0667 34.4882V45.4618Z" fill="#7F7F7F" />
    <path d="M44.8028 51.3641L26.2637 39.1913V50.1648L44.8028 62.3376V51.3641Z" fill="#7F7F7F" />
  </svg>
);

MaterialUi.propTypes = {
  classnames: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};

MaterialUi.defaultProps = {
  classnames: '',
  width: 34,
  height: 30,
};

export default MaterialUi;
