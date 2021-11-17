/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';

import SvgGenerator from '@/ui/SvgGenerator';
import useTheme from '@/hooks/useTheme';
import useScreen from '@/hooks/useScreen';
import styled from '@emotion/styled';
import ShowNext from '@/ui/ShowNext';
import ModuleBlockInfo from '@/ui/ModuleBlockInfo';

const InfoFacultyStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-right: 1px solid ${({ isLight }) => (isLight ? '#ececec' : '#49495B')};
  color: ${({ isLight }) => (isLight ? '#5b5b5b' : '#434057')};
  @media (max-width: 1024px) {
    padding: 0 41px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media (max-width: 540px) {
    width: 100%;
    padding: 0 15px;
    border: none;
    &::after {
      content: '';
      display: inline-block;
      vertical-align: middle;
      box-sizing: border-box;
      width: 100%;
      height: 1px;
      background: ${({ isLight }) => (isLight ? '#ececec' : '#49495B')};
      border-width: 0 10px;
    }
  }

  .info-faculty {
    &__technology {
      display: flex;
      justify-content: space-between;
      width: 294px;
      padding: 0 35px;
      @media (max-width: 540px) {
        width: 224px;
        padding: 0;
        &:last-of-type {
          padding-bottom: 35px;
        }
      }
    }
    &__icon {
      text-align: center;
      & > *:not(:first-of-type) {
        margin-top: 5px;
      }

      &--info {
        margin: 15px 0;
        min-width: 46px;
        font-size: 10px;
        line-height: 12px;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        & > svg {
          width: 100%;
          margin-bottom: 5px;
        }
      }
      & > svg {
        & > path {
          fill: ${({ isLight }) => (isLight ? '#808080' : '#7d7b8a')};
          opacity: 1;
        }
      }
    }
    &__show-more {
      margin-top: 24px;
      @media (max-width: 540px) {
        position: ${({ isScroll }) => (isScroll ? 'absolute' : 'fixed')};
        background-color: ${({ isLight }) => (isLight ? '#ffffff' : '#03031C')};
        bottom: ${({ isScroll }) => (isScroll ? '100px' : '0')};
        width: 100%;
        height: ${({ isScroll }) => (isScroll ? 'auto' : 'calc(100vh / 7)')};
      }
    }
  }
`;

const InfoFaculty = ({ faculty, setHeaderPage, setScroll, isScroll }) => {
  const { isLight } = useTheme();
  const { isMobile, isTablet } = useScreen();
  const [isOpenTechnology, setIsOpenTechnology] = useState(true);

  useEffect(() => {
    if (isMobile) {
      setIsOpenTechnology(true);
    } else if (isTablet) {
      setIsOpenTechnology(false);
    }
  }, [isMobile, isTablet]);

  const { title: nameTechnology, content: contentTechnology } = faculty[2];
  const { title: nameInfo, content: contentInfo } = faculty[3];
  const handleShowMoreClick = () => {
    if (isMobile) {
      setScroll();
      return;
    }
    setIsOpenTechnology(!isOpenTechnology);
  };
  return (
    <InfoFacultyStyled isLight={isLight} isScroll={isScroll}>
      {setHeaderPage()}
      {faculty.map(
        ({ title, content }, index) =>
          content.length === 1 && (
            <ModuleBlockInfo key={index} title={title}>
              {content.map((name) => ReactHtmlParser(name))}
            </ModuleBlockInfo>
          ),
      )}
      <ModuleBlockInfo title={nameTechnology} className="info-faculty__technology">
        {contentTechnology.map((name, index) => (
          <div className="info-faculty__icon" key={index}>
            <SvgGenerator iconId={name} width={40} height={40} />
            <p>{name}</p>
          </div>
        ))}
      </ModuleBlockInfo>
      {(isOpenTechnology || !isTablet) && (
        <ModuleBlockInfo title={nameInfo} className="info-faculty__technology">
          {contentInfo.map(({ title, name }, index) => (
            <div className="info-faculty__icon info-faculty__icon--info" key={index}>
              <SvgGenerator iconId={name} width={25} height={25} />
              <p>{title}</p>
            </div>
          ))}
        </ModuleBlockInfo>
      )}
      {isTablet && (
        <ShowNext
          className="info-faculty__show-more"
          onClick={handleShowMoreClick}
          isAppowUp={isMobile ? isScroll : isOpenTechnology}
        />
      )}
    </InfoFacultyStyled>
  );
};

InfoFaculty.propTypes = {
  faculty: PropTypes.arrayOf(PropTypes.any),
  setHeaderPage: PropTypes.func,
  setScroll: PropTypes.func.isRequired,
  isScroll: PropTypes.bool.isRequired,
};

InfoFaculty.defaultProps = {
  setHeaderPage: () => {},
  faculty: [],
};

export default InfoFaculty;
