import React from 'react';
import cn from 'classnames/bind';
import PropTypes from 'prop-types';

import OpenCaseContainer from '../OpenCaseContainer';
import Section from '../../ui/Section';

import styles from './styles.module.scss';

const cx = cn.bind(styles);

const OpenCase = ({ pageContent, contentForCase }) => (
  <Section
    sectionContent={
      <>
        <OpenCaseContainer pageContent={pageContent} contentForCase={contentForCase} />
      </>
    }
    classNameForContent={cx('open-case-section__content')}
    classNameForSection={cx('open-case-section')}
  />
);

OpenCase.propTypes = {
  pageContent: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string,
      frameworks: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          name: PropTypes.string,
          type: PropTypes.string,
        }),
      ),
      id: PropTypes.number,
      name: PropTypes.string,
      status: PropTypes.string,
    }),
  ).isRequired,
  contentForCase: PropTypes.arrayOf(
    PropTypes.shape({
      slug: PropTypes.string,
      name: PropTypes.string,
    }),
  ).isRequired,
};

OpenCase.defaultProps = {};

export default OpenCase;
