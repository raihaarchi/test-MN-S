import React from 'react';
import cn from 'classnames/bind';
import PropTypes from 'prop-types';
import { setCookie } from 'nookies';
import Link from 'next/link';
import SpeakerPlay from '@/static/icons/speaker_play';
import SpeakerStop from '@/static/icons/speaker_stop';
import IconBurgerMenu from '@/static/icons/burger-menu';
import styles from './styles.module.scss';
import useTheme from '../../hooks/useTheme';
import Cross from '../../static/icons/cross';
import En from '../../static/icons/EN';
import Ru from '../../static/icons/RU';
import Speaker from '../../static/icons/speaker';
import ThemeIcon from '../../static/icons/theme-icon';
import Sun from '../../static/icons/sun';

const cx = cn.bind(styles);

const Header = ({
  setIsSidebarOpen,
  isHeaderMobile,
  togglePlay,
  isOpenCase,
  toggleLanguage,
  language,
  isPlaying,
}) => {
  const { ThemeContextConsumer, context, isLight } = useTheme();
  const { theme } = context;

  const headerClassName = cx('header', {
    'header-light': isLight,
    'header-dark': !isLight,
    'header-mobile': isHeaderMobile,
    'open-case__mobile-header': isOpenCase,
  });
  const themeName = isLight ? 'dark' : 'light';

  return (
    <header className={headerClassName}>
      <button
        type="button"
        className={cx('header__btn')}
        onClick={() => {
          const cookieLanguage = language === 'ru' ? 'en' : 'ru';
          setCookie(null, 'language', cookieLanguage, {
            maxAge: 30 * 24 * 60 * 60,
          });
          toggleLanguage();
        }}
      >
        {language === 'ru' ? (
          <En width={18} height={16} color={theme.sidebarIcon} />
        ) : (
          <Ru width={18} height={16} color={theme.sidebarIcon} />
        )}
      </button>
      <button type="button" className={cx('header__btn', 'header__btn-icons')} onClick={togglePlay}>
        <Speaker color={theme.sidebarIcon} classnames={cx('header__btn-icon')} />
        {isPlaying ? <SpeakerPlay color={theme.sidebarIcon} /> : <SpeakerStop color={theme.sidebarIcon} />}
      </button>
      <ThemeContextConsumer>
        {({ setTheme }) => (
          <button
            type="button"
            onClick={() => {
              setTheme(themeName);
              setCookie(null, 'theme', themeName, {
                maxAge: 30 * 24 * 60 * 60,
              });
            }}
            className={cx('header__btn')}
          >
            {theme.themeName === 'light' ? (
              <ThemeIcon color={theme.sidebarIcon} />
            ) : (
              <Sun color={theme.sidebarIcon} />
            )}
          </button>
        )}
      </ThemeContextConsumer>
      {!isOpenCase ? (
        <button
          onClick={() => setIsSidebarOpen(true)}
          type="button"
          className={cx('header__btn', 'burger-menu')}
        >
          <IconBurgerMenu width={20} height={16} classnames={cx('burger-menu__item')} />
        </button>
      ) : (
        <Link href="/competencies">
          <button type="button" className={cx('header__btn', 'open-case__close-btn')}>
            <Cross color={isLight ? '#5B5B5B' : '#b3b3ba'} />
          </button>
        </Link>
      )}
    </header>
  );
};

Header.propTypes = {
  setIsSidebarOpen: PropTypes.func,
  isHeaderMobile: PropTypes.bool,
  togglePlay: PropTypes.func,
  isOpenCase: PropTypes.bool,
  toggleLanguage: PropTypes.func,
  language: PropTypes.string.isRequired,
  isPlaying: PropTypes.bool.isRequired,
};

Header.defaultProps = {
  setIsSidebarOpen: () => {},
  isHeaderMobile: false,
  togglePlay: () => {},
  isOpenCase: false,
  toggleLanguage: () => {},
};

export default Header;
