import React from 'react';
import PropTypes from 'prop-types';

const Email = ({ color, ...attr }) => (
  <svg width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg" {...attr}>
    <path d="M9.94312 5.58204L14.9999 8.99201V2.02808L9.94312 5.58204Z" fill={color} />
    <path d="M0 2.02808V8.99201L5.0568 5.58204L0 2.02808Z" fill={color} />
    <path
      d="M14.0622 0H0.937376C0.469571 0 0.0983265 0.371996 0.0280151 0.850992L7.49977 6.10194L14.9715 0.850992C14.9012 0.371996 14.53 0 14.0622 0Z"
      fill={color}
    />
    <path
      d="M9.08426 6.18581L7.75772 7.1178C7.67897 7.1728 7.58991 7.1998 7.49991 7.1998C7.40991 7.1998 7.32085 7.1728 7.2421 7.1178L5.91556 6.18481L0.0300293 10.1558C0.102216 10.6308 0.471585 10.9998 0.937515 10.9998H14.0623C14.5282 10.9998 14.8976 10.6308 14.9698 10.1558L9.08426 6.18581Z"
      fill={color}
    />
  </svg>
);

Email.propTypes = {
  color: PropTypes.string,
};

Email.defaultProps = {
  color: '',
};

export default Email;
