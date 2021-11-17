import React from 'react';
import PropTypes from 'prop-types';

const SidebarLogo = ({ classnames, width, height, color, borderColor, ...attr }) => (
  <svg
    width={width}
    height={height}
    className={classnames}
    viewBox="0 0 83 83"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...attr}
  >
    <path
      d="M41.5 82C63.8675 82 82 63.8675 82 41.5C82 19.1325 63.8675 1 41.5 1C19.1325 1 1 19.1325 1 41.5C1 63.8675 19.1325 82 41.5 82Z"
      stroke={borderColor}
      strokeWidth="2"
    />
    <path
      d="M41.7793 77.531C61.5244 77.531 77.531 61.5244 77.531 41.7793C77.531 22.0342 61.5244 6.02759 41.7793 6.02759C22.0342 6.02759 6.02759 22.0342 6.02759 41.7793C6.02759 61.5244 22.0342 77.531 41.7793 77.531Z"
      stroke={borderColor}
    />
    <path
      d="M19.7422 35.0811V40.9404H26.9492V43.6504H19.7422V52H16.4902V32.3711H28.2236V35.0811H19.7422ZM35.7236 48.7773H35.8555C36.207 46.9121 36.6367 44.8125 37.1445 42.4785L39.6348 32.3711H42.4766L44.9668 42.4785C45.4648 44.832 45.8506 46.668 46.124 47.9863L46.2852 48.7773H46.417C46.5049 48.1719 46.6465 47.2637 46.8418 46.0527L47.3838 42.4785L49.2002 32.3711H52.3057L48.4531 52H44.4688L41.8906 41.2773C41.4902 39.3828 41.2021 37.8887 41.0264 36.7949H40.8945C40.5234 38.6699 40.2207 40.1641 39.9863 41.2773L37.4521 52H33.541L29.5859 32.3711H32.8965L34.6982 42.4785L35.7236 48.7773ZM68.3018 32.3711V35.0811H62.5596V52H59.3369V35.0811H53.5801V32.3711H68.3018Z"
      fill={color}
    />
  </svg>
);

SidebarLogo.propTypes = {
  classnames: PropTypes.string,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  color: PropTypes.string,
  borderColor: PropTypes.string,
};

SidebarLogo.defaultProps = {
  classnames: '',
  color: '',
  borderColor: '',
};

export default SidebarLogo;
