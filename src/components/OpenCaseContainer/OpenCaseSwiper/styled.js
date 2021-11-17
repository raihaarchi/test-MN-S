import styled from '@emotion/styled';

const CareerContentStyled = styled.div`
  @media (max-width: 540px) {
    margin-top: 26px;
    display: flex;
    justify-content: center;
    position: relative;
  }
  .open-case-swiper {
    &__slider {
      position: relative;
      width: 150px;
      height: min-content;
      @media (max-width: 1024px) {
        width: 136px;
      }
      @media (max-width: 540px) {
        position: unset;
      }
      .swiper-slide {
        margin: 0 !important;
        @media (max-width: 540px) {
          height: 100px !important;
        }
      }
      .swiper-container {
        height: 340px;
        @media (max-width: 1024px) {
          height: 580px !important;
        }
        @media (max-width: 540px) {
          height: auto !important;
        }
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
        @media (max-width: 540px) {
          position: absolute;
          top: 15%;
        }

        &-next {
          margin-top: 40px;
          @media (max-width: 540px) {
            transform: rotate(-90deg) translate(50%, 0);
            right: 0;
          }
        }
        &-prev {
          transform: rotate(180deg);
          margin-bottom: 40px;
          @media (max-width: 540px) {
            transform: rotate(90deg) translate(50%, 0);
            left: 0;
          }
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
      color: #7d7b8a;
      cursor: pointer;
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
      &--active {
        background: linear-gradient(
          120.69deg,
          #68e2fc 7.35%,
          rgba(29, 202, 239, 0.85) 26.32%,
          rgba(9, 90, 213, 0.85) 72.84%,
          rgba(2, 58, 255, 0.85) 96.3%
        );
        border-color: #ffffff;
        color: #ffffff;
        & > svg > g > path,
        > svg > rect,
        > svg > path {
          fill: #ffffff;
        }
        @media (max-width: 540px) {
          background: transparent;
          border-color: #1dcaef;
          color: #7d7b8a;
          & > svg > g > path,
          > svg > rect,
          > svg > path {
            fill: #7d7b8a;
          }
        }
        &-dark {
          background: #d3d3d3;
          border-color: #ffffff;
          color: #03031c;
          @media (max-width: 540px) {
            background: transparent;
            color: #ffffff;
          }
          & > svg > g > path,
          > svg > rect,
          > svg > path {
            fill: #03031c;
            @media (max-width: 540px) {
              fill: #ffffff;
            }
          }
        }
      }
      &--next-card {
        border-color: #1dcaef;
        @media (max-width: 540px) {
          border-color: #dadada;
        }
        &-dark {
          border-color: #ffffff;
          & > svg > g > path,
          > svg > rect,
          > svg > path {
            fill: #ffffff;
            @media (max-width: 540px) {
              fill: #7d7b8a;
            }
          }
          @media (max-width: 540px) {
            border-color: #dadada;
          }
        }
      }
    }
  }
`;

export default CareerContentStyled;
