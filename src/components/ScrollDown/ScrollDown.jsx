import React from 'react';
import cn from 'classnames/bind';
import styles from './styles.module.scss';
import useTheme from '../../hooks/useTheme';
import Scroll from '../../static/icons/tap';

const ScrollDown = () => {
  const { context } = useTheme();
  const { theme } = context;
  const cx = cn.bind(styles);

  return (
    <a href="#next" className={cx('scroll')}>
      <Scroll color={theme.sidebarIcon} />
    </a>
  );
};

export default ScrollDown;
