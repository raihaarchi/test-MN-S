import React from 'react';
import PropTypes from 'prop-types';

const ModalOk = ({ classnames, width, height, ...attr }) => (
  <svg
    className={classnames}
    width={width || 51}
    height={height || 51}
    viewBox="0 0 51 51"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...attr}
  >
    <path
      d="M25.5 0C11.4167 0 0 11.4167 0 25.5C0 39.5833 11.4167 51 25.5 51C39.5833 51 51 39.5833 51 25.5C50.9851 11.423 39.5771 0.0150482 25.5 0ZM25.5 47.3572C13.4286 47.3572 3.64283 37.5714 3.64283 25.5C3.64283 13.4286 13.4286 3.64283 25.5 3.64283C37.5714 3.64283 47.3572 13.4286 47.3572 25.5C47.3442 37.5661 37.5661 47.3442 25.5 47.3572Z"
      fill="#1ACD41"
    />
    <path
      d="M39.493 15.1052C38.7871 14.4234 37.6681 14.4234 36.9623 15.1052L20.0357 32.0317L14.0377 26.0336C13.3388 25.31 12.1857 25.2901 11.4622 25.9889C10.7386 26.6878 10.7187 27.8409 11.4175 28.5644C11.4321 28.5796 11.447 28.5945 11.4622 28.6091L18.748 35.8949C19.4592 36.606 20.6122 36.606 21.3234 35.8949L39.5378 17.6805C40.2366 16.957 40.2166 15.804 39.493 15.1052Z"
      fill="#1ACD41"
    />
  </svg>
);

ModalOk.propTypes = {
  classnames: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};

ModalOk.defaultProps = {
  classnames: '',
  width: 51,
  height: 51,
};

export default ModalOk;
