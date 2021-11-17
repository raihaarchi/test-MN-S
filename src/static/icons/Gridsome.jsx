import React from 'react';
import PropTypes from 'prop-types';

const Gridsome = ({ classnames, width, height, ...attr }) => (
  <svg
    width={width || 30}
    height={height || 30}
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={classnames}
    {...attr}
  >
    <path
      opacity="0.5"
      d="M15.1656 29.9957C7.57302 30.1834 0.0103885 24.2739 0.0103885 15.0671C-0.291597 7.47715 6.02125 0.147352 14.9012 0C18.3561 0.00547662 18.6045 4.92169 15.1188 5.24995C8.88849 5.50984 5.08157 10.3254 5.26641 14.9832C5.26641 21.0393 10.1734 24.863 15.0289 24.7429C19.8033 24.6099 23.2112 21.2795 24.2866 17.7873H23.2949C21.8029 17.7873 20.5932 16.583 20.5932 15.0976C20.5932 13.612 21.8029 12.4079 23.2951 12.4079H27.2324C28.6626 12.4079 29.8702 13.514 29.9679 14.9138C30.5077 21.9121 24.1752 29.7449 15.1656 29.9957ZM17.6978 15.1014C17.6978 13.0229 15.455 11.7167 13.6704 12.756C11.8858 13.7953 11.8858 16.4075 13.6704 17.4468C15.455 18.486 17.6978 17.1799 17.6978 15.1014Z"
      fill="black"
    />
  </svg>
);

Gridsome.propTypes = {
  classnames: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};

Gridsome.defaultProps = {
  classnames: '',
  width: 30,
  height: 30,
};

export default Gridsome;
