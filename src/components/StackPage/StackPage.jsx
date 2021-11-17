import React, { useRef, useState } from 'react';
import cn from 'classnames/bind';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
// import PropTypes from 'prop-types';
import useScreen from '@/hooks/useScreen';
import styled from '@emotion/styled';

import { linesArr } from '@/static/data/dataStack';
import Section from '../../ui/Section';
import StackLine from '../StackLine';
import styles from './styles.module.scss';
import SliderArrow from '../SliderArrow';
import useTheme from '../../hooks/useTheme';

SwiperCore.use([Navigation, Pagination]);
const cx = cn.bind(styles);

const StackStyled = styled.div`
  width: 100%;
  height: 100%;

  .stack-section__content {
    height: 100%;
  }

  .slider-desktop {
    &-button {
      width: 30px;
      height: 30px;
      &-next,
      &-prev {
        position: absolute;
        top: 19px;
        z-index: 99;
        width: 30px;
        height: 30px;
      }
      &-next {
        transform: rotate(-90deg);
        position: absolute;
        top: 19px;
        right: 13px;
        ${({ isRightArrowDis }) => isRightArrowDis && 'opacity: 0.3 !important'};
      }
      &-prev {
        transform: rotate(90deg);
        position: absolute;
        top: 19px;
        left: 13px;
        ${({ isLeftArrowDis }) => isLeftArrowDis && 'opacity: 0.3 !important'};
      }
    }
  }
`;

const StackPage = () => {
  const { isLight } = useTheme();
  const { isMobile } = useScreen();

  const swiperRef = useRef(null);
  const goNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };
  const goPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const [isNextArrowDis, setIsNextArrowDis] = useState(false);
  const [isPrevArrowDis, setIsPrevArrowDis] = useState(true);

  return (
    <Section
      sectionContent={
        <StackStyled isPrevArrowDis={isPrevArrowDis} isNextArrowDis={isNextArrowDis}>
          {isMobile ? (
            <>
              <SliderArrow className="slider-desktop-button-prev" onClick={goPrev} isLight={isLight} />
              <SliderArrow className="slider-desktop-button-next" onClick={goNext} isLight={isLight} />
              <Swiper
                className={cx('slider-container')}
                spaceBetween={50}
                slidesPerView={1}
                onReachBeginning={() => setIsPrevArrowDis(true)}
                onReachEnd={() => setIsNextArrowDis(true)}
                onFromEdge={(swiper) => {
                  setIsPrevArrowDis(false);
                  if (!swiper.isEnd) {
                    setIsNextArrowDis(false);
                  }
                }}
                ref={swiperRef}
              >
                {linesArr.map(({ label, frameworks, technologies, info }) => (
                  <SwiperSlide key={label}>
                    <StackLine
                      label={label}
                      frameworks={frameworks}
                      technologies={technologies}
                      info={info}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </>
          ) : (
            <>
              {linesArr.map(({ label, frameworks, technologies, info }) => (
                <StackLine
                  key={label}
                  label={label}
                  frameworks={frameworks}
                  technologies={technologies}
                  info={info}
                />
              ))}
            </>
          )}
        </StackStyled>
      }
    />
  );
};

StackPage.propTypes = {};

StackPage.defaultProps = {};

export default StackPage;
