import React from 'react';
import PropTypes from 'prop-types';

const Speaker = ({ color, classnames, ...attr }) => (
  <svg
    className={classnames}
    width="20"
    height="17"
    viewBox="0 0 26 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...attr}
  >
    <path
      d="M21.8098 4.16571C21.557 4.29954 21.4133 4.53251 21.4133 4.81505C21.4133 5.06289 21.4529 5.13229 21.9139 5.65771C23.5744 7.53634 24.2139 9.9156 23.6934 12.2899C23.4158 13.5787 22.8359 14.689 21.8891 15.7745C21.4381 16.2901 21.3835 16.3892 21.4281 16.6965C21.4628 16.9691 21.6264 17.1724 21.8842 17.2665C22.3204 17.4351 22.6277 17.2467 23.3117 16.3991C26.1966 12.8252 26.0281 7.85357 22.9003 4.53251C22.4393 4.04179 22.2113 3.96248 21.8098 4.16571Z"
      fill={color}
      fillOpacity="1"
    />
    <path
      d="M19.7529 6.33691C19.3811 6.41622 19.1829 6.66902 19.1829 7.06556C19.1829 7.33323 19.2076 7.37288 19.7281 7.99744C20.0354 8.35929 20.3874 9.0582 20.5262 9.58362C20.6848 10.1537 20.6848 11.2441 20.5262 11.8142C20.3874 12.3396 20.0354 13.0385 19.7281 13.4004C19.2076 14.0249 19.1829 14.0646 19.1829 14.3273C19.1829 14.7684 19.4753 15.0708 19.8966 15.0708C20.204 15.0708 20.3725 14.9618 20.7195 14.5503C21.4828 13.6482 21.9438 12.6073 22.1024 11.4275C22.3205 9.8265 21.81 8.13623 20.7195 6.84746C20.3328 6.38648 20.0999 6.26256 19.7529 6.33691Z"
      fill={color}
      fillOpacity="1"
    />
    <path
      d="M17.2992 8.65657C17.1852 8.71605 17.086 8.83006 17.0117 8.97876C16.8531 9.28608 16.8927 9.52897 17.1554 9.84124C17.3686 10.099 17.4974 10.4261 17.4974 10.6988C17.4974 10.9714 17.3686 11.2985 17.1554 11.5563C16.9175 11.8438 16.863 12.0867 16.9819 12.3742C17.0811 12.6319 17.2893 12.7856 17.5767 12.8203C17.8642 12.85 18.0526 12.7658 18.3054 12.4832C18.5879 12.166 18.7713 11.819 18.8853 11.363C19.0093 10.8772 19.0093 10.5203 18.8853 10.0346C18.7317 9.42487 18.3401 8.82014 17.9882 8.6417C17.7998 8.54256 17.5074 8.54752 17.2992 8.65657Z"
      fill={color}
      fillOpacity="1"
    />
  </svg>
);

Speaker.propTypes = {
  color: PropTypes.string,
  classnames: PropTypes.string,
};

Speaker.defaultProps = {
  color: '',
  classnames: '',
};

export default Speaker;
