import React from 'react';
import PropTypes from 'prop-types';

const Speaker = ({ color, classnames, ...attr }) => (
  <svg
    className={classnames}
    viewBox="0 0 54 43"
    width="21"
    height="17"
    fill="none"
    preserveAspectRatio="none"
    xmlns="http://www.w3.org/2000/svg"
    {...attr}
  >
    <path
      d="M24.4639 0.121872C24.1692 0.190647 23.7664 0.308544 23.5797 0.396969C23.393 0.475567 20.2098 2.39141 16.5254 4.64131L9.80522 8.72845H5.4921C1.35583 8.72845 1.15933 8.73828 0.78599 8.92495C0.530543 9.05268 0.324221 9.259 0.196497 9.51444C0 9.89761 0 10.0646 0 21.206C0 32.1116 0.00982487 32.5243 0.186673 32.878C0.294746 33.0941 0.530543 33.3299 0.76634 33.4675C1.14951 33.6836 1.17898 33.6836 5.48228 33.6836H9.80522L16.5254 37.7708C20.2098 40.0207 23.4225 41.9463 23.6583 42.0446C26.1243 43.1057 29.1013 41.5632 29.6613 38.9105C29.8185 38.1736 29.8185 4.23849 29.6613 3.50163C29.2978 1.80192 27.8437 0.406792 26.0949 0.0923958C25.3875 -0.0353279 25.1615 -0.0353279 24.4639 0.121872ZM26.1243 3.2167C26.2619 3.30513 26.4584 3.51145 26.5664 3.65882L26.7728 3.9241V21.206V38.488L26.5664 38.7533C26.2128 39.2347 25.8787 39.4213 25.3678 39.4213C24.9257 39.4213 24.5622 39.215 18.2939 35.3932L11.6916 31.3748V21.206V11.0373L18.1367 7.10735C21.6737 4.94588 24.7194 3.11845 24.8864 3.05951C25.2696 2.91213 25.8001 2.98091 26.1243 3.2167ZM8.74413 21.206V30.7362H5.8458H2.94746V21.206V11.6759H5.8458H8.74413V21.206Z"
      fill={color}
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
