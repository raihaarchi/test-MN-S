import React, { useState } from 'react';
import PropTypes from 'prop-types';

const SvgGenerator = ({ iconId, width, height, classnames, ...attr }) => {
  const [Icon, setIcon] = useState(null);
  import(`../../static/icons/${iconId}`)
    .then((module) => setIcon(() => module.default))
    .catch((err) => console.log(err));

  if (Icon) {
    return <Icon width={width} height={height} classnames={classnames} {...attr} />;
  }

  return null;
};

SvgGenerator.propTypes = {
  iconId: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  classnames: PropTypes.string,
};

SvgGenerator.defaultProps = {
  width: null,
  height: null,
  classnames: null,
};

export default SvgGenerator;
