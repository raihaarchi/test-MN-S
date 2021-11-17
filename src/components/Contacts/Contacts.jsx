import React from 'react';
import cn from 'classnames/bind';

import ContactsSocials from '../ContactsSocials';
import ContactsForm from '../ContactsForm';
import Section from '../../ui/Section';

import styles from './styles.module.scss';

const cx = cn.bind(styles);

const Contacts = () => (
  <Section
    classNameForSection={cx('section_contacts')}
    classNameForContent={cx('section-content_contacts')}
    sectionLeft={<ContactsSocials />}
    sectionRight={<ContactsForm />}
  />
);

export default Contacts;
