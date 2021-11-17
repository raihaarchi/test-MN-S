import styled from '@emotion/styled';
import React from 'react';
import Slider from '@/ui/Slider';
import useScreen from '@/hooks/useScreen';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import useTheme from '@/hooks/useTheme';

import Card from '@/ui/Card';
import SvgGenerator from '@/ui/SvgGenerator';
import Button from '@/ui/Button';

const PartnersContainerStyled = styled.div`
  margin-top: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: baseline;
  max-width: 780px;
  @media (max-width: 540px) {
    margin-top: 15px;
  }

  .card {
    &__partner {
      height: 100px;
      width: 150px;
      border-radius: 5px;
      border: 1px solid #dadada;
      & > svg > g > path,
      > svg > rect,
      > svg > path {
        ${({ isLight }) => (!isLight ? 'fill: #7f7e8c' : '')};
      }
      & > svg {
        width: 115px;
      }
      @media (max-width: 1024px) {
        width: 136px;
      }
      @media (max-width: 540px) {
        height: 100%;
        width: auto;
      }

      &--item {
        box-shadow: 0 0 20px #f5f5f5;
      }
    }
    &__button {
      margin-top: 35px;
      @media (max-width: 540px) {
        position: absolute;
        bottom: 21px;
      }
    }
    &__slider {
      max-width: 700px;
      .swiper-slide {
        width: 150px !important;
        @media (max-width: 1024px) {
          width: 136px !important;
        }
      }
    }
  }
`;

const PartnersContainer = ({ data }) => {
  const { isMobile } = useScreen();
  const { isLight } = useTheme();
  const router = useRouter();

  const generateData = () =>
    data.map((el) => (
      <Card className="card__partner" key={el} isDark={!isLight}>
        <SvgGenerator iconId={el} />
      </Card>
    ));

  return (
    <PartnersContainerStyled isLight={isLight}>
      <Slider
        isShow={isMobile}
        className="card__slider"
        hideLastPoint
        items={generateData()}
        stylesSlider={{ item: isLight ? 'box-shadow: 0 0 10px #eeeeee' : '' }}
        id="main"
        wrapperTag="ul"
        pagination={{ clickable: true, type: 'bullets' }}
        slidesPerColumn={2}
        slidesPerView={2}
        slidesPerGroup={2}
        onSlideChange={(swiper) => {
          const lastSlide = Math.ceil(swiper.slides.length / 6);
          if (swiper.activeIndex === lastSlide + 3) {
            swiper.slideTo(1);
          }
        }}
      />
      <Button className="card__button" onClick={() => router.push('/contacts')}>
        Стать парнёром
      </Button>
    </PartnersContainerStyled>
  );
};

PartnersContainer.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default PartnersContainer;
