/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import useTheme from '@/hooks/useTheme';
import styled from '@emotion/styled';

const SubtitleStyled = styled.p`
  margin-top: 20px;
  width: 100%;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  color: ${({ isLight }) => (isLight ? '#ececec' : '#FFFFFF')};
  overflow: hidden;
  ${({ styleTitle }) => styleTitle}

  @media (max-width: 1024px) {
    margin-top: 15px;
  }
  @media (max-width: 540px) {
    font-size: 12px;
    line-height: 14px;
  }
  &:first-of-type {
    margin-top: 0;
  }
  &::after,
  &::before {
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
`;

const TitleStyled = styled.span`
  margin-top: 20px;
  width: 100%;
  display: flex;
  flex-flow: wrap;
  justify-content: center;
  font-size: 14px;
  line-height: 16px;
  ${({ className }) => className}

  @media (max-width: 1024px) {
    margin-top: 15px;
  }
`;
// ui-компонент используется для верстки c наименованием контента и стилевыми линиями
const ModuleBlockInfo = ({ children, title, className, styleTitle }) => {
  const { isLight } = useTheme();

  return (
    <>
      <SubtitleStyled isLight={isLight} styleTitle={styleTitle || null}>
        {title}
      </SubtitleStyled>
      <TitleStyled isLight={isLight} className={className}>
        {children}
      </TitleStyled>
    </>
  );
};
ModuleBlockInfo.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
  styleTitle: PropTypes.shape(PropTypes.any),
};

ModuleBlockInfo.defaultProps = {
  children: null,
  className: '',
  styleTitle: {},
};

export default ModuleBlockInfo;
