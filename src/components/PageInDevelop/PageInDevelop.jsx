import React from 'react';
import cn from 'classnames/bind';
import Section from '../../ui/Section';
import Title from '../../ui/Title';
import styles from './styles.module.scss';
import Develop from '../../static/icons/develop';
import useTheme from '../../hooks/useTheme';

const PageInDevelop = () => {
  const { isLight, context } = useTheme();
  const { theme } = context;
  const cx = cn.bind(styles);
  const pageClassName = cx('page-in-develop__title', {
    'page-in-develop__title_light': isLight,
    'page-in-develop__title_dark': !isLight,
  });
  const iconClassName = cx('page-in-develop__title-icon');
  return (
    <Section
      sectionContent={
        <Title Tag="h1" className={pageClassName}>
          Страница <br className={cx('br')} /> в разработке
          <Develop color={theme.sidebarIcon} className={iconClassName} />
        </Title>
      }
      withHeader
      withScrollDown
      classNameForContent={cx('page-in-develop__content')}
    />
  );
};

export default PageInDevelop;
