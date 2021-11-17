import React from 'react';
import cn from 'classnames/bind';

import PropTypes from 'prop-types';
import Section from '../../ui/Section';
import HowWeWorkContainer from '../HowWeWorkContainer';
import Title from '../../ui/Title';

import styles from './styles.module.scss';
import useTheme from '../../hooks/useTheme';

const cx = cn.bind(styles);

const HowWeWork = ({ data }) => {
  const { isLight } = useTheme();
  return (
    <Section
      title={
        <Title className={cx('how__title', { dark: !isLight })} Tag="h2">
          Как мы работаем
        </Title>
      }
      sectionContent={<HowWeWorkContainer data={data} />}
      classNameForContent={cx('how-section__content')}
      classNameForSection={cx('how-section')}
    />
  );
};

HowWeWork.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      text: PropTypes.string,
      subtext: PropTypes.string,
    }),
  ).isRequired,
};

export default HowWeWork;
