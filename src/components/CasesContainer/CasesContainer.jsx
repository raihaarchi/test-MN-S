import React from 'react';
import cn from 'classnames/bind';
import PropTypes from 'prop-types';
import useScreen from '@/hooks/useScreen';

import Link from 'next/link';
import styles from './styles.module.scss';
import Card from '../../ui/Card';
import SvgGenerator from '../../ui/SvgGenerator';
import useTheme from '../../hooks/useTheme';

const cx = cn.bind(styles);

const CasesContainer = ({ data, setContent }) => {
  const { isLight } = useTheme();
  const { isTablet } = useScreen();

  return (
    <div className={cx('cases-container')}>
      {data.map(({ name, slug }) => (
        <Link href="/competencies/[id]" as={`/competencies/${slug}`} key={slug}>
          <a href="/competencies/[id]">
            <Card
              className={cx('card__case')}
              darkClassName={cx('card-case_dark')}
              isDark={!isLight}
              key={slug}
              onHover={() => setContent({ iconId: slug, title: name })}
            >
              <SvgGenerator iconId={slug} width={isTablet ? 55 : 60} height={isTablet ? 55 : 60} />
              <span className={cx('card-case__name')}>{name}</span>
            </Card>
          </a>
        </Link>
      ))}
    </div>
  );
};

CasesContainer.propTypes = {
  setContent: PropTypes.func,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

CasesContainer.defaultProps = {
  setContent: () => {},
};

export default CasesContainer;
