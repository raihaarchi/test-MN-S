import React from 'react';
import PropTypes from 'prop-types';
import Slider from '@/ui/Slider';
import styled from '@emotion/styled';

import useScreen from '@/hooks/useScreen';
import useTheme from '@/hooks/useTheme';

import OpenCaseHeader from './OpenCaseHeader';
import Module from './Module';

const CareerContentStyled = styled.div`
  flex-grow: 1;
  margin: 0 auto;
  max-width: 750px;
  height: 100%;
  color: ${({ isLight }) => (isLight ? '#5B5B5B' : '#FFFFFF')};

  @media (max-width: 1024px) {
    padding-left: 42px;
    max-width: 600px;
  }

  @media (max-width: 768px) {
    max-width: 364px;
  }

  @media (max-width: 540px) {
    max-width: 265px;
    padding: 0;
  }

  .open-case-content {
    &__slider-info {
      margin-top: 75px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    &__slider {
      position: relative;
      /* max-width: max-content; */
      max-width: 100%;

      .swiper-pagination {
        bottom: auto;
        top: 115px;

        @media (max-width: 1024px) {
          top: 165px;
        }
        @media (max-width: 540px) {
          top: 125px;
        }
      }
      .swiper-slide {
        height: 100% !important;
        margin: 75px 0 0 0 !important;
        display: flex;
        flex-direction: column;
        align-items: center;
        @media (max-width: 540px) {
          margin-top: 50px !important;
        }
      }
      .swiper-container {
        height: auto;
      }
    }
  }
  .module__show-more {
    margin: 15px 0 30px;
  }
`;

const OpenCaseContent = ({ contentForCase, pageContent, iconHeader: { pageId, initialSlide } }) => {
  const { isLight } = useTheme();
  const { isMobile } = useScreen();

  const generateData = () =>
    pageContent.map(({ description, frameworks, name }, index) => (
      <Module
        key={index}
        description={description}
        frameworks={frameworks}
        name={name}
        className="module__show-more"
      />
    ));

  return (
    <CareerContentStyled isLight={isLight}>
      <OpenCaseHeader
        iconId={pageId}
        data={contentForCase}
        isMobile={isMobile}
        initialSlide={initialSlide}
        pageId={pageId}
        isLight={isLight}
        contentForCase={contentForCase}
      />
      <Slider
        items={generateData()}
        id="open-case"
        pagination={{ clickable: true, type: 'bullets' }}
        className="open-case-content__slider"
        stylesSlider={{
          container: { width: 'auto' },
        }}
      />
    </CareerContentStyled>
  );
};

OpenCaseContent.propTypes = {
  pageContent: PropTypes.arrayOf(PropTypes.any),
  contentForCase: PropTypes.arrayOf(PropTypes.any),
  iconHeader: PropTypes.shape({ pageId: PropTypes.string, initialSlide: PropTypes.number }),
};

OpenCaseContent.defaultProps = {
  pageContent: [],
  contentForCase: [],
  iconHeader: {},
};

export default OpenCaseContent;
