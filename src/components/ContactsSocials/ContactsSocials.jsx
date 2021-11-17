import React from 'react';
import cn from 'classnames/bind';
import { FormattedMessage } from 'react-intl';
import Email from '../../static/icons/email';
import Pin from '../../static/icons/pin';
import Facebook from '../../static/icons/contacts_facebook';
import Telegram from '../../static/icons/contacts_telegram';
import Vk from '../../static/icons/contacts_vk';
import useTheme from '../../hooks/useTheme';

import styles from './styles.module.scss';
import Title from '../../ui/Title';

const ContactsSocials = () => {
  const cx = cn.bind(styles);

  const { isLight, context } = useTheme();
  const { theme } = context;
  const titleClassName = cx('socials__title', {
    'socials__title-dark': !isLight,
  });
  const socialBlockClassName = cx('socials__block', {
    'socials__block-dark': !isLight,
  });

  return (
    <div className={cx('socials')}>
      <Title Tag="h2" className={titleClassName}>
        <FormattedMessage id="contacts.titleContacts" />
      </Title>
      <div className={socialBlockClassName}>
        <Title Tag="h3">
          <FormattedMessage id="contacts.subtitleOffice" />
        </Title>
        <div className={cx('socials__block_bottom')}>
          <Pin color={theme.contactIcons} />
          <h3>
            <FormattedMessage id="contacts.address" />
          </h3>
        </div>
      </div>
      <div className={socialBlockClassName}>
        <Title Tag="h3">
          <FormattedMessage id="contacts.subtitleQuestions" />
        </Title>
        <div className={cx('socials__block_bottom')}>
          <Email color={theme.contactIcons} />
          <h3>sergeyrogin@gmail.com</h3>
        </div>
      </div>
      <div className={socialBlockClassName}>
        <Title Tag="h3">
          <FormattedMessage id="contacts.subtitleSocials" />
        </Title>
        <div className={cx('socials__block_bottom')}>
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <Facebook />
          </a>
          <a href="https://web.telegram.org/" target="_blank" rel="noopener noreferrer">
            <Telegram />
          </a>
          <a href="https://vk.com/" target="_blank" rel="noopener noreferrer">
            <Vk />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactsSocials;
