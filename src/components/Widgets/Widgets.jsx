import cn from 'classnames';
import React from 'react';
import styles from './styles.module.scss';

const Widgets = () => (
  <a
    href="https://telegram.im/@srogin"
    className={cn(styles.telegramim_button, 'telegramim_shadow', 'telegramim_pulse')}
    title=""
  >
    <i className="ftelegramim ftelegramim-telegram-logo" />
  </a>
);

export default Widgets;
