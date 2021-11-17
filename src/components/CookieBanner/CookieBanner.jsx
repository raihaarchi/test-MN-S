import React from 'react';
import cn from 'classnames/bind';
import PropTypes from 'prop-types';

import { setCookie } from 'nookies';
import { FormattedMessage } from 'react-intl';
import styles from './styles.module.scss';

const CookieBanner = ({ setIsCookieBannerOpen }) => {
  const cx = cn.bind(styles);
  return (
    <div className={cx('cookie-banner')}>
      <p className={cx('cookie-banner__text')}>
        <FormattedMessage id="cookieBanner.text" />
      </p>
      <button
        type="button"
        onClick={() => {
          setCookie(null, 'isCookieAccept', true, {
            maxAge: 30 * 24 * 60 * 60,
          });
          setIsCookieBannerOpen(false);
        }}
        className={cx('cookie-banner__btn')}
      >
        <FormattedMessage id="cookieBanner.btn" />
      </button>
    </div>
  );
};

CookieBanner.propTypes = {
  setIsCookieBannerOpen: PropTypes.func,
};

CookieBanner.defaultProps = {
  setIsCookieBannerOpen: () => {},
};

export default CookieBanner;
