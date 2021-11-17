import React from 'react';
import PropTypes from 'prop-types';

const VirtualBox = ({ classnames, width, height, ...attr }) => (
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
      d="M1.15086 19.2335L5.80414 22.8208C5.20051 24.1022 6.06273 29.8258 13.0429 29.9965C20.0234 30.1672 20.9714 24.0168 20.4538 22.6498L24.8494 19.2331L25.9972 6.14802C26.0296 5.78025 25.7784 5.35995 25.4375 5.21203L13.6621 0.110437C13.3208 -0.0374799 12.7661 -0.0368059 12.4241 0.112438L0.562599 5.29602C0.217563 5.44661 -0.0295571 5.86559 0.00285511 6.23436L1.15086 19.2335ZM1.84023 8.38459L11.3191 14.3644L11.233 24.1878L2.35693 17.8668L1.84023 8.38459ZM14.7668 14.4494L24.16 8.72643L23.6425 17.7811L14.6803 24.1878L14.7668 14.4494ZM2.43692 6.1728L8.65335 3.4759L9.88047 4.31304L6.42079 8.11982L6.56977 8.16905L13.2132 5.54865L10.9433 8.35985L15.3399 6.67313L13.2121 9.48488L15.5787 10.9827L13.1378 12.3679L2.43692 6.1728ZM14.0355 6.1728L16.1633 3.57361L9.78063 5.96079L11.7661 3.8517L10.044 2.73658L13.0422 1.38357L23.6475 6.17059L17.0177 10.0782L14.8861 8.91406L18.1471 4.55601L14.035 6.17114L14.0355 6.1728Z"
      fill="black"
    />
  </svg>
);

VirtualBox.propTypes = {
  classnames: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};

VirtualBox.defaultProps = {
  classnames: '',
  width: 26,
  height: 30,
};

export default VirtualBox;
