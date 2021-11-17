import React, { useRef, useState } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import cn from 'classnames';

import Slider from '@/ui/Slider';
import SvgGenerator from '@/ui/SvgGenerator';
import Link from 'next/link';
import useTheme from '@/hooks/useTheme';
import Card from '@/ui/Card';
import SliderArrow from '../../SliderArrow';
import CareerContentStyled from './styled';

const OpenCaseSwiper = ({ contentForCase, direction, id, slidesPerView }) => {
  const { isLight } = useTheme();
  const router = useRouter();
  const pageId = router.query.id;

  const slideIndex = contentForCase.map(({ slug }, i) => slug === pageId && i).filter(Boolean)[0];
  const initialSlide = slideIndex === undefined ? 0 : slideIndex;

  const [isRightArrowDisabled, setIsRightArrowDisabled] = useState(initialSlide === 11);
  const [isLeftArrowDisabled, setIsLeftArrowDisabled] = useState(initialSlide === 0);

  const generateData = () =>
    contentForCase.map(({ name, slug }, index) => (
      <Card
        className={cn('open-case-swiper__card', [
          { 'open-case-swiper__card--active': slug === pageId && isLight },
          { 'open-case-swiper__card--active-dark': slug === pageId && !isLight },
          { 'open-case-swiper__card--next-card': index === initialSlide + 1 && isLight },
          { 'open-case-swiper__card--next-card-dark': index === initialSlide + 1 && !isLight },
        ])}
        key={index}
        isDark={!isLight}
        to={`/competencies/${slug}`}
        // onClick={() => {
        //   console.log(1111);
        //   if (pageId !== slug) {
        //     router.push(`/competencies/${slug}`);
        //   }
        // }}
      >
        <>
          <SvgGenerator iconId={slug} width={60} height={60} />
          <p>{name}</p>
        </>
      </Card>
    ));

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

  return (
    <CareerContentStyled>
      <Slider
        items={generateData()}
        direction={direction}
        id={id}
        slidesPerView={slidesPerView}
        className="open-case-swiper__slider"
        arrowPrev={() => (
          <SliderArrow
            className={cn('open-case-swiper__slider-button', 'open-case-swiper__slider-button-prev', {
              'open-case-swiper__slider-button-disabled': isLeftArrowDisabled,
            })}
            onClick={goPrev}
            isLight={isLight}
          />
        )}
        arrowNext={() => (
          <SliderArrow
            className={cn('open-case-swiper__slider-button', 'open-case-swiper__slider-button-next', {
              'open-case-swiper__slider-button-disabled': isRightArrowDisabled,
            })}
            onClick={goNext}
            isLight={isLight}
          />
        )}
        ref={swiperRef}
        onReachBeginning={() => setIsLeftArrowDisabled(true)}
        onReachEnd={() => setIsRightArrowDisabled(true)}
        onFromEdge={(swiper) => {
          setIsLeftArrowDisabled(false);
          if (!swiper.isEnd) {
            setIsRightArrowDisabled(false);
          }
        }}
        initialSlide={initialSlide}
      />
    </CareerContentStyled>
  );
};

OpenCaseSwiper.propTypes = {
  contentForCase: PropTypes.arrayOf(
    PropTypes.shape({
      slug: PropTypes.string,
      name: PropTypes.string,
    }),
  ).isRequired,
  direction: PropTypes.string,
  id: PropTypes.string,
  slidesPerView: PropTypes.number,
};

OpenCaseSwiper.defaultProps = {
  direction: '',
  id: '',
  slidesPerView: 0,
};

export default OpenCaseSwiper;
