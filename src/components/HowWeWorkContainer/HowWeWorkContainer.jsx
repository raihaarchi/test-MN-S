import React, { useState } from 'react';
import cn from 'classnames/bind';
import htmlParser from 'react-html-parser';
import PropTypes from 'prop-types';

import Title from '../../ui/Title';

import styles from './styles.module.scss';
import useTheme from '../../hooks/useTheme';

const cx = cn.bind(styles);

const HowWeWorkContainer = ({ data }) => {
  const { isLight } = useTheme();

  const [content, setContent] = useState(data[0]);

  return (
    <div className={styles.how}>
      <div className={styles['how-info']}>
        <Title className={cx('how-info__title', { dark: !isLight })} Tag="h3">
          {content.title}
        </Title>
        <p className={cx('how-info__text', { dark: !isLight })}>{htmlParser(content.text)}</p>
        <button type="button" className={cx('how__btn', { dark: !isLight })}>
          Обсудить
        </button>
      </div>
      <div className={styles['how-we-work']}>
        {data.map((el) => (
          <div className={styles['how-we-work__item']} onClick={() => setContent(el)} key={el.id}>
            <div className={cx('how-we-work__time', { active: content.id === el.id, dark: !isLight })} />
            <Title className={cx('how-we-work-item__title', { dark: !isLight })} Tag="h5">
              {el.title}
            </Title>
            <hr className={cx('how-we-work-item__line', { dark: !isLight })} />
            <p className={cx('how-we-work-item__text', { dark: !isLight })}>{htmlParser(el.text)}</p>
            <p className={styles['how-we-work-item__subtext']}>{el.subtext}</p>
            <button type="button" className={cx('how__btn', 'how-we-work__btn', { dark: !isLight })}>
              Обсудить
            </button>
          </div>
        ))}
        <button type="button" className={cx('how__btn', 'how__btn_mobile', { dark: !isLight })}>
          Обсудить
        </button>
      </div>
    </div>
  );
};

HowWeWorkContainer.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      text: PropTypes.string,
      subtext: PropTypes.string,
    }),
  ).isRequired,
};

export default HowWeWorkContainer;
