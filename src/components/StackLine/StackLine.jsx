/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import StackBlock from '@/ui/StackBlock';
import useScreen from '@/hooks/useScreen';
import useTheme from '@/hooks/useTheme';
import StackFrameworks from './StackFrameworks';
import StackTechnologies from './StackTechnologies';
import StackInfo from './StackInfo';

const StackLineStyled = styled.div`
  color: ${({ isLight }) => (isLight ? '#5b5b5b' : 'rgba(0, 0, 0, 0.5)')};
  display: flex;
  height: calc(100vh / 3);
  border-bottom: 1px solid ${({ isLight }) => (isLight ? '#ececec' : '#49495B')};

  @media (max-width: 1024px) {
    height: auto;
    flex-direction: column;
    &:last-of-type {
      margin-bottom: 35px;
    }
  }
  @media (max-width: 540px) {
    border-bottom: none;
  }
  .line--block {
    width: 210px;

    @media (max-width: 1024px) {
      width: auto;
    }
  }
  .line {
    ul {
      list-style: none;
    }

    &:nth-of-type(1),
    &:nth-of-type(2) {
      border-bottom: 1px solid #ececec;
    }

    &__title {
      font-size: 25px;
      line-height: 29px;
      color: #5b5b5b;
      width: 4.65%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;

      @media (max-width: 1024px) {
        border-right: none;
        border-bottom: 1px solid #ececec;
        padding: 20px 0 28px;
        width: 100%;
      }

      @media (max-width: 540px) {
        height: 75px;
      }

      &-text {
        margin-right: 60%;
        height: fit-content;
        transform: rotate(-90deg);
        font-weight: bold;
        ${({ isLight }) => !isLight && 'color: #ffffff'};

        @media (max-width: 1024px) {
          margin-right: 0;
          transform: rotate(0deg);
        }
      }
    }

    &--frameworks {
      order: 1;
    }
    &--info {
      order: 3;
      width: calc(100% / 3);
      margin: auto;

      @media (max-width: 1024px) {
        width: 100%;
        order: 2;
      }
    }
    &--technologies {
      order: 2;
      width: 100%;
      @media (max-width: 1024px) {
        order: 3;
      }
    }

    &-text {
      width: fit-content;
    }

    &-text--position {
      padding-left: 17px;
    }

    &-dark {
      &:nth-of-type(1),
      &:nth-of-type(2) {
        border-color: #1b1b31;
      }

      color: rgba(255, 255, 255, 0.5);

      .line__title {
        color: white;
        border-color: #1b1b31;
      }

      .line__frameworks,
      .line__technologies {
        &-item {
          & > svg > path {
            fill: #81818d;
            opacity: 1;
          }
        }
      }

      .line__title,
      .line__frameworks,
      .line__technologies {
        border-color: #1b1b31;

        &::after {
          background-color: #03031c;
          color: #1b1b31;
        }
      }
    }
  }
`;

const StackLine = ({ label, frameworks, technologies, info }) => {
  const { isLight } = useTheme();
  const { isTablet } = useScreen();
  return (
    <StackLineStyled isLight={isLight}>
      <div className="line__title">
        <p className="line__title-text">{label} </p>
      </div>
      <StackBlock title="ТЕХНОЛОГИИ" isThemeDesctop={!isTablet} className="line--frameworks">
        <StackFrameworks frameworks={frameworks} />
      </StackBlock>
      <StackBlock title="ПОДРОБНЕЕ" isThemeDesctop={!isTablet} className="line--technologies">
        <StackTechnologies technologies={technologies} />
      </StackBlock>
      <StackBlock title="РЕСУРСЫ" isThemeDesctop={!isTablet} className="line--info">
        <StackInfo info={info} />
      </StackBlock>
    </StackLineStyled>
  );
};

StackLine.propTypes = {
  label: PropTypes.string.isRequired,
  frameworks: PropTypes.arrayOf(PropTypes.object).isRequired,
  technologies: PropTypes.arrayOf(PropTypes.object).isRequired,
  info: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default StackLine;
