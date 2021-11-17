import React from 'react';
import PropTypes from 'prop-types';

const Yii = ({ width, height, classnames, ...attr }) => (
  <svg
    width={width || 47}
    height={height || 50}
    viewBox="0 0 28 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={classnames}
    {...attr}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M24.2957 0C20.8933 0.127605 16.7577 4.40523 18.1727 8.39467C19.6706 12.353 20.6305 15.1687 20.8312 19.5852C24.4267 15.9637 27.7302 12.0319 27.9969 7.46989C28.0842 3.76768 26.3338 1.03924 24.2957 0ZM15.3244 16.4366C14.8138 17.3502 14.1438 18.3431 13.2701 19.4303C11.4342 21.7466 9.58297 25.546 10.1523 30C17.7364 29.1622 20.1049 23.4637 20.3125 20.3324C18.8834 18.1736 16.2903 16.8445 15.3244 16.4366ZM0.0297757 2.76883C-0.23949 6.25358 1.24959 11.4352 7.28586 13.0845C9.82765 13.8379 11.6087 14.3022 13.5367 15.0029C16.3557 16.0282 18.5683 17.337 20.3214 19.5959C19.996 15.7092 18.3969 11.2557 15.8434 7.78149C12.2004 2.82546 5.89179 0.446616 0.0297757 2.76883Z"
      fill="black"
    />
  </svg>
);

Yii.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
  classnames: PropTypes.string,
};

Yii.defaultProps = {
  classnames: '',
  height: 30,
  width: 30,
};

export default Yii;
