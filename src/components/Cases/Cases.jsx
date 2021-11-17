import React, { useState } from 'react';
import cn from 'classnames/bind';
import PropTypes from 'prop-types';
import Section from '../../ui/Section';
import CasesContainer from '../CasesContainer';
import useTheme from '../../hooks/useTheme';

import styles from './styles.module.scss';
import SvgGenerator from '../../ui/SvgGenerator';
import Title from '../../ui/Title';
import Lock from '../../static/icons/lock';

const Cases = ({ data }) => {
  const cx = cn.bind(styles);

  const { isLight } = useTheme();
  const lockColor = isLight ? '#5B5B5B' : '#ffffff';
  const titleClassName = cx('cases-section__title', {
    'cases-section__title_dark': !isLight,
  });
  const leftContentClassName = cx('cases-section__left-content', {
    'cases-section__left-content_dark': !isLight,
  });
  const [content, setContent] = useState({ iconId: 'crm', title: 'CRM' });
  return (
    <Section
      title={
        <Title Tag="h2" className={titleClassName}>
          Сделали более 50 проектов <br /> под NDA <Lock width={24} height={31} color={lockColor} />
        </Title>
      }
      sectionLeft={
        <div className={leftContentClassName}>
          <SvgGenerator iconId={content.iconId} width={213} height={213} />
          <span className={cx('cases-section__left-content-title')}>{content.title}</span>
        </div>
      }
      sectionRight={
        <div className={cx('cases-section__right-content')}>
          <CasesContainer setContent={setContent} data={data} />
        </div>
      }
      classNameForContent={cx('cases-section__content')}
    />
  );
};

Cases.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Cases;
