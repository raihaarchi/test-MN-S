import React from 'react';
import cn from 'classnames/bind';
import Link from 'next/link';
import PropTypes from 'prop-types';

import styles from './style.module.scss';

const Card = ({
  children,
  className,
  onHover,
  activeClassName,
  darkClassName,
  isActive,
  isDark,
  to,
  onClick,
}) => {
  const cx = cn.bind(styles);

  const cardClassName = cx('card', className, {
    [activeClassName]: isActive,
    [darkClassName]: isDark,
  });
  return (
    <div className={cardClassName} onMouseEnter={onHover} onClick={onClick}>
      {to ? (
        <Link href={to}>
          <a>{children}</a>
        </Link>
      ) : (
        children
      )}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string.isRequired,
  onHover: PropTypes.func,
  activeClassName: PropTypes.string,
  darkClassName: PropTypes.string,
  isActive: PropTypes.bool,
  isDark: PropTypes.bool,
};

Card.defaultProps = {
  onHover: () => {},
  activeClassName: null,
  darkClassName: null,
  isActive: false,
  isDark: false,
};

export default Card;
