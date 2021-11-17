import React from 'react';
import cn from 'classnames/bind';
import { FormattedMessage } from 'react-intl';

import Section from '../../ui/Section';
import styles from './styles.module.scss';
import Emblem from '../../static/icons/logo_thin';
import Wards from '../Wards';
import Title from '../../ui/Title';
import useTheme from '../../hooks/useTheme';

const Main = () => {
  const cx = cn.bind(styles);
  const { isLight, context } = useTheme();
  const { theme } = context;
  const titleClassName = cx('main__title', {
    'main__title-light': isLight,
    'main__title-dark': !isLight,
  });
  return (
    <Section
      sectionLeft={
        <div className={cx('main-section__left-content')}>
          <Emblem
            width={362}
            height={345}
            bgColor={theme.pageBg}
            borderColor={theme.logoBorderColor}
            className={cx('main__emblem')}
          />
        </div>
      }
      sectionRight={
        <div className={cx('main-section__right-content')}>
          <Title Tag="h2" className={titleClassName}>
            <FormattedMessage
              id="main.title"
              values={{
                br: <br />,
              }}
            />
          </Title>
          <hr className={cx('main__line')} />
          <span className={cx('main__text')}>
            <FormattedMessage id="main.price" />
          </span>
          <Wards />
        </div>
      }
      withWards
      withScrollDown
      classNameForContent={cx('main-section__content')}
    />
  );
};

export default Main;
