import styled from '@emotion/styled';

const CareerContentStyled = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  padding-left: 76px;
  color: ${({ isLight }) => (isLight ? '#5B5B5B' : '#FFFFFF')};
  @media (max-width: 1024px) {
    padding-left: 27px;
  }
  @media (max-width: 540px) {
    padding-bottom: 65px;
    padding-left: 0;
  }

  .open-case {
    &__close {
      position: absolute;
      left: 0;
      height: 100%;
      border-right: 1px solid ${({ isLight }) => (isLight ? '#ECECEC' : '#1B1B31')};
      @media (max-width: 540px) {
        display: none;
      }
    }
    &__close-button {
      margin: 37px 21px 0 30px;

      @media (max-width: 1024px) {
        margin: 33px 15px 0 30px;
      }

      &--icon {
        width: 25px;
        height: 25px;
        @media (max-width: 1024px) {
          width: 33px;
          height: 33px;
        }
      }
    }
    &__slider-info {
      max-width: 750px;
    }
    &__content {
      padding-left: 131px;
      max-width: 880px;
      height: 100vh;
      position: relative;
      display: flex;
      flex-direction: column;
      margin: 0 auto;

      &:before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: 1px;
        background-color: ${({ isLight }) => (isLight ? 'transparent' : '#1b1b31')};

        @media (max-width: 767px) {
          display: none;
        }
      }
    }
    &__slider {
      position: relative;
      width: 150px;
      height: min-content;
      @media (max-width: 1024px) {
        width: 136px;
      }
      .swiper-slide {
        margin: 0 !important;
      }
      .swiper-button-next {
        background-image: url('../static/img/arrow-down.svg');
      }
      .swiper-container {
        height: 345px;
      }
      .slider__button--prev {
        margin-bottom: 40px;
      }
      .slider__button--next {
        margin-top: 40px;
      }
      &-button {
        width: 35px;
        height: 35px;

        &-next {
          margin-top: 40px;
        }
        &-prev {
          transform: rotate(180deg);
          margin-bottom: 40px;
        }
        &-disabled {
          opacity: 0.3 !important;
        }
      }
    }
    &__card {
      height: 100px;
      width: 150px;
      border-radius: 5px;
      border: 1px solid #dadada;
      & > svg > g > path,
      > svg > rect,
      > svg > path {
        fill: ${({ isLight }) => (isLight ? '#808080' : '#7d7b8a')};
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
  }
`;

export default CareerContentStyled;
