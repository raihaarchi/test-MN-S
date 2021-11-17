import React from 'react';
import PropTypes from 'prop-types';

const Retrofit = ({ width, height, classnames, ...attr }) => (
  <svg
    width={width || 50}
    height={height || 50}
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={classnames}
    {...attr}
  >
    <path
      d="M24.9996 0H5.00044C2.25095 0 0 2.2502 0 5.00073V25.001C0 27.7502 2.25095 30 5.00044 30H24.9996C27.7491 30 30 27.7502 30 25.001V5.00073C30 2.2502 27.7491 0 24.9996 0ZM24.5451 22.957C24.5451 23.8308 23.8294 24.5443 22.9547 24.5443H7.04395C6.16973 24.5443 5.45406 23.8308 5.45406 22.957V7.04569C5.45406 6.17142 6.16973 5.45571 7.04395 5.45571H22.9547C23.8294 5.45571 24.5451 6.17142 24.5451 7.04569V22.957ZM19.0919 18.1817C19.0919 18.6834 18.6827 19.0912 18.1837 19.0912H11.8207C11.3204 19.0912 10.9125 18.6834 10.9125 18.1817V11.8187C10.9125 11.3188 11.3204 10.9101 11.8207 10.9101H18.1837C18.6827 10.9101 19.0919 11.3188 19.0919 11.8187V18.1817Z"
      fill="black"
    />
  </svg>
);

Retrofit.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  classnames: PropTypes.string,
};

Retrofit.defaultProps = {
  width: 50,
  height: 50,
  classnames: '',
};

export default Retrofit;
