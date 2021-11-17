import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames/bind';
import styles from './styles.module.scss';
import ScrollDown from '../../components/ScrollDown';

const cx = cn.bind(styles);

const Section = ({
  title,
  classNameForSection,
  sectionLeft,
  sectionRight,
  sectionContent,
  sectionFooter,
  withScrollDown,
  classNameForContent,
}) => {
  const sectionClassName = cx('section', classNameForSection);
  const contentClassName = cx('section__content', classNameForContent);
  return (
    <section className={sectionClassName}>
      {title}
      <div className={cn(contentClassName)}>
        {sectionRight.props && sectionLeft.props ? (
          <>
            {sectionLeft}
            {sectionRight}
          </>
        ) : (
          sectionContent
        )}
      </div>
      {sectionFooter.props && <div className={cx('section__footer')}>{sectionFooter}</div>}
      {withScrollDown && <ScrollDown />}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.element,
  sectionLeft: PropTypes.objectOf(PropTypes.any),
  sectionRight: PropTypes.objectOf(PropTypes.any),
  sectionContent: PropTypes.objectOf(PropTypes.any),
  sectionFooter: PropTypes.objectOf(PropTypes.any),
  withScrollDown: PropTypes.bool,
  classNameForContent: PropTypes.string,
  classNameForSection: PropTypes.string,
};

Section.defaultProps = {
  title: null,
  sectionLeft: {},
  sectionRight: {},
  sectionContent: {},
  sectionFooter: {},
  withScrollDown: false,
  classNameForContent: '',
  classNameForSection: '',
};

export default Section;
