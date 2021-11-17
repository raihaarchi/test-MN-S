import React from 'react';
import PropTypes from 'prop-types';
import useScreen from '@/hooks/useScreen';
import useTheme from '@/hooks/useTheme';
import styled from '@emotion/styled';

import SvgGenerator from '../../../../ui/SvgGenerator';
import OpenCaseSwiper from '../../OpenCaseSwiper';

const CareerContentStyled = styled.div`
  margin-top: 100px;
  @media (max-width: 1024px) {
    margin-top: 80px;
  }
  .open-case {
    &__header {
      height: 20%;
      display: flex;
      align-items: flex-end;
    }
    &__icon {
      & > path {
        fill: ${({ isLight }) => (isLight ? '#5b5b5b' : '#ffffff')};
      }
    }
    &__title {
      font-weight: 500;
      font-size: 18px;
      margin-left: 60px;
      color: ${({ isLight }) => (isLight ? '#666666' : '#ffffff')};
      @media (max-width: 1024px) {
        margin-left: 40px;
      }
    }
  }
`;

const OpenCaseHeader = ({ iconId, pageId, contentForCase }) => {
  const { isMobile } = useScreen();
  const { isLight } = useTheme();

  const title = contentForCase.map(({ slug, name }) => pageId === slug && name).filter(Boolean)[0];

  return (
    <>
      {!isMobile && (
        <CareerContentStyled isLight={isLight}>
          <SvgGenerator iconId={iconId} width={98} height={98} classnames="open-case__icon" />
          <srtong className="open-case__title">{title}</srtong>
        </CareerContentStyled>
      )}
      {isMobile && (
        <OpenCaseSwiper
          contentForCase={contentForCase}
          id="open-case-horizontal"
          slidesPerView={1}
          direction="horizontal"
        />
      )}
    </>
  );
};

OpenCaseHeader.propTypes = {
  iconId: PropTypes.string.isRequired,
  pageId: PropTypes.string.isRequired,
  contentForCase: PropTypes.arrayOf(
    PropTypes.shape({
      slug: PropTypes.string,
      name: PropTypes.string,
    }),
  ).isRequired,
};

export default OpenCaseHeader;
