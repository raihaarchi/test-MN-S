import React from 'react';
import PropTypes from 'prop-types';

const GitlabCi = ({ classnames, width, height, ...attr }) => (
  <svg
    width={width || 32}
    height={height || 30}
    viewBox="0 0 32 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={classnames}
    {...attr}
  >
    <path
      opacity="0.5"
      d="M31.9052 16.8011L30.2251 11.5791C30.2251 11.5305 30.2091 11.4818 30.1931 11.4332L26.8168 0.924385C26.6408 0.405432 26.1288 0 25.5367 0C24.9607 0 24.4487 0.405432 24.2726 0.940602L21.0724 10.9467H10.9436L7.72735 0.940602C7.55134 0.405432 7.0393 0 6.46326 0C5.87121 0 5.35917 0.405432 5.18316 0.940602L1.80689 11.4656V11.4818L0.0947589 16.8011C-0.161261 17.612 0.11076 18.4877 0.798814 18.9742L15.552 29.856C15.824 30.0506 16.176 30.0506 16.448 29.8398L31.2012 18.9742C31.8892 18.4877 32.1613 17.612 31.9052 16.8011ZM9.83952 12.4873L13.9518 25.3152L4.07907 12.4873H9.83952ZM18.0482 25.3314L22.0005 13.0225L22.1605 12.4873H27.9369L18.9922 24.0989L18.0482 25.3314ZM25.5527 1.92986L28.449 10.9467H22.6565L25.5527 1.92986ZM20.5764 12.4873L17.7121 21.423L16 26.7423L11.4236 12.4873H20.5764ZM6.44725 1.92986L9.34348 10.9467H3.56703L6.44725 1.92986ZM1.67888 17.7417C1.53487 17.6282 1.47087 17.4336 1.53487 17.2714L2.79897 13.3306L12.1117 25.4125L1.67888 17.7417ZM30.3211 17.7417L19.9043 25.4125L19.9363 25.3638L29.201 13.3306L30.4651 17.2714C30.5291 17.4336 30.4651 17.6282 30.3211 17.7417Z"
      fill="black"
    />
  </svg>
);

GitlabCi.propTypes = {
  classnames: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};

GitlabCi.defaultProps = {
  classnames: '',
  width: 32,
  height: 30,
};

export default GitlabCi;
