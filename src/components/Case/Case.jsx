import React from 'react';
import Link from 'next/link';
import cn from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';
import SvgGenerator from '../../ui/SvgGenerator';
import useTheme from '../../hooks/useTheme';

const cx = cn.bind(styles);

const Case = ({ title, isCaseInSlider, isActive, setContent, id, className }) => {
  const { isLight } = useTheme();

  const caseClassName = cx('case', className, {
    slider__case: isCaseInSlider,
    case_active: isActive,
    case_dark: !isLight,
  });

  const handleMouseOver = () => {
    if (!isCaseInSlider) {
      return setContent({ iconId: id, title });
    }
    return null;
  };

  return (
    <Link href="/competencies/[id]" as={`/competencies/${id}`}>
      <a href="/competencies/[id]" className={caseClassName} onMouseEnter={handleMouseOver}>
        <SvgGenerator iconId={id} width={68} height={68} />
        <span className={cx('case__name')}>{title}</span>
      </a>
    </Link>
  );
};

Case.propTypes = {
  title: PropTypes.string.isRequired,
  isCaseInSlider: PropTypes.bool,
  isActive: PropTypes.bool,
  setContent: PropTypes.func,
  id: PropTypes.string.isRequired,
  className: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
};

Case.defaultProps = {
  isCaseInSlider: false,
  isActive: false,
  setContent: () => {},
  className: '',
};

export default Case;
