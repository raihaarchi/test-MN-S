import React from 'react';
import PropTypes from 'prop-types';

const Title = ({ Tag, className, children }) => <Tag className={className}>{children}</Tag>;

Title.propTypes = {
  Tag: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Title.defaultProps = {
  className: '',
};

export default Title;
