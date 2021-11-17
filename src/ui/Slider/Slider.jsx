import styled from '@emotion/styled';
import React, { forwardRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';

import useTheme from '@/hooks/useTheme';
import PropTypes from 'prop-types';

const SliderContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 600px;
  ${({ stylesSlider: { main } }) => main};
  ${({ className }) => className}
  @media (max-width: 540px) {
    display: block;
    max-width: auto;
  }
  .swiper-container {
    display: flex;
    width: 300px;
    margin-left: auto;
    margin-right: auto;
    position: unset;
  }
  .swiper-wrapper {
  }
  .swiper-container {
    height: 390px;
    ${({ stylesSlider: { container } }) => container};
  }
  .swiper-slide {
    height: min-content;
    height: 100px;
    margin: 7px !important;
    ${({ stylesSlider: { item } }) => item};
  }
  .swiper-pagination {
    bottom: 75px;
  }
  .swiper-pagination-bullet {
    width: 15px;
    height: 15px;
    opacity: 1;
    background-color: ${({ isLight }) => (isLight ? '#c4c4c4' : '#484848')};
    &:last-of-type {
      ${({ hideLastPoint }) => (hideLastPoint ? 'display: none' : '')};
    }
    &-active {
      background-color: ${({ isLight }) => (isLight ? '#484848' : '#c4c4c4')} !important;
    }
  }

  .swiper-pagination-bullet-active {
    color: #fff;
    background: #007aff;
  }
`;

SwiperCore.use([Navigation, Pagination]);

const SliderContainer = forwardRef(
  ({ items, stylesSlider, className, isShow, hideLastPoint, arrowNext, arrowPrev, ...params }, ref) => {
    const { isLight } = useTheme();

    const returnItems = () =>
      items.map((el, index) => (
        <SwiperSlide tag="li" key={`slide-${index}`} style={{ listStyle: 'none' }}>
          {el}
        </SwiperSlide>
      ));

    return (
      <SliderContainerStyled
        className={className}
        isLight={isLight}
        stylesSlider={stylesSlider}
        hideLastPoint={hideLastPoint}
      >
        {isShow ? (
          <>
            {arrowPrev && arrowPrev()}
            <Swiper {...params} ref={ref} wrapperTag="ul" watchOverflow>
              {returnItems()}
            </Swiper>
            {arrowNext && arrowNext()}
          </>
        ) : (
          returnItems()
        )}
      </SliderContainerStyled>
    );
  },
);

SliderContainer.displayName = 'SliderContainer';

SliderContainer.propTypes = {
  stylesSlider: PropTypes.shape({ item: PropTypes.string }),
  items: PropTypes.arrayOf(PropTypes.node),
  className: PropTypes.string,
  isShow: PropTypes.bool,
  hideLastPoint: PropTypes.bool,
  arrowNext: PropTypes.func,
  arrowPrev: PropTypes.func,
};

SliderContainer.defaultProps = {
  stylesSlider: { item: '' },
  className: '',
  items: [],
  isShow: true,
  hideLastPoint: false,
  arrowNext: () => {},
  arrowPrev: () => {},
};

export default SliderContainer;
