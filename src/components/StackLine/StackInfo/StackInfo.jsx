/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from 'react';
import ReactHtmlParser from 'react-html-parser';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import useScreen from '@/hooks/useScreen';
import useTheme from '@/hooks/useTheme';
import cn from 'classnames';

const StackLineStyled = styled.div`
  width: max-content;
  padding: 30px 0;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  font-size: 14px;
  color: ${({ isLight }) => (isLight ? '#808080' : '#7f7e8c')};

  @media (max-width: 1024px) {
    width: 100%;
    padding: 23px 0;
    flex-direction: row;
    order: 1;
  }

  @media (max-width: 540px) {
    width: 100%;
    padding: 0;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    font-size: 13px;
    margin: 22px 0;
  }

  .info {
    p {
      @media (max-width: 1024px) {
        &:nth-of-type(2) {
          order: 3;
        }

        &:nth-of-type(3) {
          order: 2;
        }

        &:nth-of-type(4) {
          order: 1;
        }
      }

      @media (max-width: 540px) {
        width: 50%;
        height: 50%;
        display: flex;
        align-items: center;
        justify-content: center;

        &:nth-of-type(3) {
          order: 1;
        }

        &:nth-of-type(4) {
          order: 2;
        }
      }
    }

    &-text {
      margin-bottom: 25px;
      width: fit-content;
      font-size: 14px;

      & > * {
        font-size: 20px;
        @media (max-width: 540px) {
          font-size: 16px;
        }
      }
      &:last-of-type {
        margin-bottom: 0;
      }
      @media (max-width: 1024px) {
        margin-bottom: 0;
      }
      @media (max-width: 540px) {
        font-size: 13px;
        width: 50%;
        &:nth-of-type(2),
        :nth-of-type(4) {
          padding-left: 30px;
        }
        &:nth-of-type(2),
        :nth-of-type(1) {
          padding-bottom: 20px;
        }
      }
    }

    &-text--position {
      padding-left: 22px;
      @media (max-width: 540px) {
        padding-left: 0;
      }
    }

    &--position {
      width: fit-content;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;

      @media (max-width: 1024px) {
        flex-direction: row;
        width: 100%;
      }

      @media (max-width: 540px) {
        flex-direction: column;
        flex-wrap: wrap;
      }
    }

    strong {
      font-size: 20px;
    }
  }
`;

const StackLine = ({ info }) => {
  const [stateInfo, setStateInfo] = useState(info);
  const { isLight } = useTheme();
  const { isTablet, isMobile } = useScreen();
  useEffect(() => {
    if (isMobile) {
      setStateInfo([info[0], info[2], info[3], info[1]]);
    } else if (isTablet) {
      setStateInfo([info[0], info[3], info[2], info[1]]);
    }
  }, [info, isTablet, isMobile]);
  return (
    <StackLineStyled isLight={isLight}>
      {stateInfo.map((el, index) => (
        <p key={index} className={cn('info-text', { 'info-text--position': !el.includes('от ') })}>
          {ReactHtmlParser(el)}
        </p>
      ))}
    </StackLineStyled>
  );
};

StackLine.propTypes = {
  info: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default StackLine;
