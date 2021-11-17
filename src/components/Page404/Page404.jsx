import React from 'react';
import cn from 'classnames/bind';
import { useRouter } from 'next/router';
import { FormattedMessage } from 'react-intl';
import Link from 'next/link';
import Section from '../../ui/Section';
import styles from './styles.module.scss';
import useTheme from '../../hooks/useTheme';
import Icon404 from '../../static/icons/404';
import ArrowLeft from '../../static/icons/arrow-left';

const Page404 = () => {
  const { isLight } = useTheme();
  const cx = cn.bind(styles);
  const pageClassName = cx('error-page', {
    'error-page-dark': !isLight,
  });
  const iconClassName = cx('error-page__logo-icon', {
    'error-page__logo-icon-dark': !isLight,
  });
  const hrClassName = cx('hr', {
    'hr-dark': !isLight,
  });
  const arrowClassName = cx('link-back', {
    'link-back-dark': !isLight,
  });
  const router = useRouter();
  return (
    <Section
      sectionContent={
        <div className={cx('container')}>
          <Link href="/">
            <button type="button" className={arrowClassName} onClick={() => router.back()}>
              <ArrowLeft classnames={cx('link-back-arrow')} />
              <p>
                <FormattedMessage id="404.linkBack" />
              </p>
            </button>
          </Link>

          <hr className={hrClassName} />
          <div className={pageClassName}>
            <div className={cx('error-page__logo')}>
              <span className={cx('error-page__logo-number-left')}>4</span>
              <Icon404 classnames={iconClassName} />
              <span className={cx('error-page__logo-number-right')}>4</span>
            </div>
            <h1 className={cx('error-page__title')}>
              <FormattedMessage id="404.title" />
            </h1>
            <h1 className={cx('error-page__subtitle')}>
              <FormattedMessage id="404.subtitle" />
            </h1>
          </div>
        </div>
      }
      classNameForContent={cx('error-page__content')}
    />
  );
};

export default Page404;
