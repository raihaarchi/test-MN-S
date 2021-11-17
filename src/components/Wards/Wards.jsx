import React from 'react';
import cn from 'classnames/bind';
import { useIntl } from 'react-intl';
import Tagline from '../../static/icons/Tagline';
import Ruward from '../../static/icons/Ruward';
import useTheme from '../../hooks/useTheme';
import styles from './styles.module.scss';

const Wards = () => {
  const intl = useIntl();
  const cx = cn.bind(styles);
  const { isLight, context } = useTheme();
  const { theme } = context;
  const rewardClassName = cx('reward__wrapper', {
    reward__wrapper_light: isLight,
    reward__wrapper_dark: !isLight,
  });
  return (
    <div className={styles.rewards}>
      <div className={rewardClassName}>
        <Ruward
          ruwardMiddleStar={theme.ruwardMiddleStar}
          ruwardLabel={theme.ruwardLabel}
          ruwardPlacement={theme.ruwardPlacement}
          fontFamily={cx('iconFontFamily')}
          text={intl.formatMessage({ id: 'ruwardIcon.text' })}
        />
      </div>
      <div className={rewardClassName}>
        <Tagline />
      </div>
    </div>
  );
};

export default Wards;
