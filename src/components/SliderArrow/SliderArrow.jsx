import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

// eslint-disable-next-line import/no-unresolved
import Arrow from '@/static/icons/arrow';

const SliderArrowStyled = styled.button`
  border: 0;
  background: none;
  opacity: 0.7;
  transition: opacity 0.2s ease-out;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
  &:focus {
    outline: none;
  }
`;
const ContainerStyled = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  .slick-arrow__icon {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    & > path {
      fill: ${({ isLight }) => (isLight ? '#5b5b5b' : '#ffffff')};
    }
  }
`;

const SliderArrow = ({ onClick, className, isLight }) => (
  <SliderArrowStyled
    type="button"
    aria-label="slider-arrow"
    className={className}
    isLight={isLight}
    onClick={onClick}
  >
    <ContainerStyled className="slick-arrow__container" isLight={isLight}>
      <Arrow className="slick-arrow__icon" />
    </ContainerStyled>
  </SliderArrowStyled>
);

SliderArrow.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
  isLight: PropTypes.bool.isRequired,
};

SliderArrow.defaultProps = {
  onClick: () => {},
  className: '',
};

export default SliderArrow;
