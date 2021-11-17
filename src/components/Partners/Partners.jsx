import React from 'react';
import cn from 'classnames/bind';
import PropTypes from 'prop-types';

import Section from '../../ui/Section';
import Title from '../../ui/Title';
import PartnersContainer from '../PartnersContainer';

import styles from './styles.module.scss';
import useTheme from '../../hooks/useTheme';

const Partners = ({ data }) => {
  const cx = cn.bind(styles);

  const { isLight } = useTheme();

  const titleClassName = cx('section__partners-title', {
    'section__partners-title_dark': !isLight,
  });

  return (
    <Section
      title={
        <Title Tag="h2" className={titleClassName}>
          Наши партнёры
        </Title>
      }
      sectionContent={<PartnersContainer data={data} />}
      classNameForSection={cx('section_partners')}
      classNameForContent={cx('partners-section__content')}
    />
  );
};

Partners.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string).isRequired,
};

Partners.defaultProps = {};

export default Partners;
