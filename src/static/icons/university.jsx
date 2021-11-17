import React from 'react';
import PropTypes from 'prop-types';

const University = ({ color, classnames, ...attr }) => (
  <svg
    className={classnames}
    width="37"
    height="29"
    viewBox="0 0 37 29"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...attr}
  >
    <path
      d="M0.548789 11.6692L6.07088 14.473V19.1405C6.07088 19.533 6.28419 19.8909 6.61967 20.0613L17.1839 25.4251C17.3151 25.4917 17.4589 25.5263 17.6047 25.5263H19.3799C19.5256 25.5263 19.6694 25.4917 19.8008 25.4251L30.3357 20.076C30.54 19.9721 30.7032 19.7964 30.7973 19.579C30.8105 19.5483 30.8232 19.5173 30.8358 19.4862C30.8872 19.3594 30.9138 19.2227 30.9138 19.0848V14.473L32.42 13.7082V20.0374C32.0941 20.2664 31.8429 20.6095 31.7212 21.0274L30.8641 23.971C30.7585 24.334 30.7614 24.7169 30.8726 25.0781L31.6673 27.66C31.894 28.3964 32.5396 28.9071 33.2737 28.9309C33.2785 28.9311 33.2834 28.9312 33.2882 28.9313L33.3124 28.9317C33.3175 28.9318 33.3225 28.9318 33.3277 28.9318C34.0493 28.9318 34.6866 28.4744 34.9512 27.7664L35.8702 25.3077C36.0119 24.9286 36.0299 24.5045 35.9206 24.1136L35.0638 21.0474C34.9444 20.6199 34.691 20.2689 34.3592 20.0362V12.7237L36.4512 11.6615C36.7867 11.4911 37 11.1333 37 10.7407V9.92677C37 9.53424 36.7867 9.17637 36.4512 9.00598L18.913 0.10124C18.647 -0.0337465 18.3373 -0.0337465 18.0714 0.10124L0.548789 8.99822C0.21331 9.16852 0 9.52639 0 9.919V10.7485C0 11.1411 0.21331 11.4988 0.548789 11.6692ZM33.3451 26.4876L32.736 24.5089L33.3857 22.2772L34.0416 24.6241L33.3451 26.4876ZM28.9745 18.4984L19.1585 23.4824H17.826L8.01007 18.4984V15.4578L18.0715 20.5664C18.2044 20.6339 18.3483 20.6676 18.4923 20.6676C18.6362 20.6676 18.7801 20.6339 18.9131 20.5664L28.9746 15.4578L28.9745 18.4984ZM18.4922 2.15636L34.5977 10.3338L29.6517 12.845C29.6081 12.8596 29.5652 12.8767 29.5233 12.8978L18.4922 18.4989L7.4612 12.8978C7.41939 12.8767 7.37642 12.8596 7.3329 12.845L2.3869 10.3337L18.4922 2.15636Z"
      fill={color}
      fillOpacity="1"
    />
  </svg>
);

University.propTypes = {
  color: PropTypes.string,
  classnames: PropTypes.string,
};

University.defaultProps = {
  color: '',
  classnames: '',
};

export default University;