import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { FormattedMessage } from 'react-intl';
import cn from 'classnames/bind';
import useTheme from '../../hooks/useTheme';
import styles from './styles.module.scss';

const NavLink = ({ link, Logo, title, handleClick, isActive }) => {
  const cx = cn.bind(styles);
  const { isLight, context } = useTheme();
  const { theme } = context;
  const linkClassNames = cx('nav__link', {
    'nav__link-light': isLight,
    'nav__link-dark': !isLight,
    'active-light': isActive && isLight,
    'active-dark': isActive && !isLight,
  });
  return (
    <li className={styles.nav__link}>
      <Link href={link}>
        <a href={link} className={linkClassNames} onClick={handleClick}>
          {link === '/' ? (
            <Logo
              classnames={styles.icon}
              width={64}
              height={64}
              color={theme.sidebarText}
              borderColor={theme.sidebarIcon}
            />
          ) : (
            <>
              <Logo classnames={styles.icon} color={theme.sidebarIcon} />
              <p>
                <FormattedMessage id={title} />
              </p>
            </>
          )}
        </a>
      </Link>
    </li>
  );
};

NavLink.propTypes = {
  link: PropTypes.string.isRequired,
  Logo: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
  isActive: PropTypes.bool,
};

NavLink.defaultProps = {
  isActive: false,
  handleClick: () => {},
};

export default NavLink;
