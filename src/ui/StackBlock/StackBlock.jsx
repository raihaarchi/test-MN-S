/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import useTheme from '@/hooks/useTheme';
import styled from '@emotion/styled';

const StackBlockStyled = styled.div`
  position: relative;
  height: 100%;
  width: min-content;
  font-size: 14px;
  line-height: 16px;
  ${({ isThemeDesctop, isLight }) =>
    isThemeDesctop ? `border-left: 1px solid ${isLight ? '#ececec' : '#49495B'}` : ''};

  @media (max-width: 1024px) {
    width: auto;
  }

  &::before {
    ${({ isThemeDesctop, title }) => (isThemeDesctop ? `content: '${title}'` : '')};
    display: ${({ isThemeDesctop }) => (isThemeDesctop ? 'block' : 'none')};
    background-color: ${({ isLight }) => (isLight ? 'white' : '#03031C')};
    color: ${({ isLight }) => (isLight ? '#ececec' : '#49495b')};
    ${({ isThemeDesctop }) => (isThemeDesctop ? 'position: absolute' : '')};
    ${({ isThemeDesctop }) => isThemeDesctop && 'transform: rotate(-90deg)'};
    padding: 0 12px;
    transform-origin: left;
    top: 68%;
  }
  .stack-block {
    &__title {
      margin-top: 20px;
      width: 100%;
      font-size: 14px;
      line-height: 16px;
      text-align: center;
      color: ${({ isLight }) => (isLight ? '#ececec' : '#49495b')};
      overflow: hidden;
      &::after,
      ::before {
        content: '';
        display: inline-block;
        vertical-align: middle;
        box-sizing: border-box;
        width: 100%;
        height: 1px;
        background: ${({ isLight }) => (isLight ? '#ececec' : '#49495B')};
        border-width: 0 10px;
      }
      &::before {
        margin-left: -100%;
        margin-right: 11px;
      }
      &::after {
        margin-right: -100%;
        margin-left: 11px;
      }

      @media (max-width: 1024px) {
        margin-top: -8px;
        font-size: 14px;
        line-height: 16px;
        background-color: ${({ isLight }) => (isLight ? '#ffffff' : '#03031C')};
      }
      @media (max-width: 540px) {
        font-size: 12px;
        line-height: 14px;
      }
    }
    &__content {
      margin-top: ${({ isThemeDesctop }) => (isThemeDesctop ? '0' : '0')};
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 14px;
      line-height: 16px;
      ${({ className }) => className}

      @media (max-width: 1024px) {
        margin-top: 0;
      }
    }
  }
`;

const StackBlock = ({ children, title, className, isThemeDesctop }) => {
  const { isLight } = useTheme();
  const themeDesctop = {
    title,
    isThemeDesctop,
  };

  return (
    <StackBlockStyled
      isLight={isLight}
      className={className}
      themeDesctop={themeDesctop}
      title={title}
      isThemeDesctop={isThemeDesctop}
    >
      {!isThemeDesctop && <p className="stack-block__title">{title} </p>}
      <span className="stack-block__content">{children}</span>
    </StackBlockStyled>
  );
};
StackBlock.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
  isThemeDesctop: PropTypes.bool,
};

StackBlock.defaultProps = {
  className: '',
  isThemeDesctop: false,
};

export default StackBlock;
