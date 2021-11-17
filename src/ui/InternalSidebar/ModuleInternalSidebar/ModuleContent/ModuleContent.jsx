import React from 'react';
import PropTypes from 'prop-types';
import SvgGenerator from '@/ui/SvgGenerator';
import useTheme from '@/hooks/useTheme';
import styled from '@emotion/styled';

const ModuleContentStyled = styled.button`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
  ${({ isActive, isLight }) =>
    isActive
      ? `background-color: ${isLight ? '#F4F4F4' : '#1B1B31'}`
      : `background-color: ${isLight ? '#fafafa' : '#0E0E1E'}`};
  border: none;
  min-height: 55px;
  color: #5b5b5b;
  outline: none;
  cursor: pointer;

  &:hover,
  :hover .icon > g > path,
  :hover .icon > g {
    opacity: 1;
    background-color: ${({ isLight }) => (isLight ? '#F4F4F4' : '#1B1B31')};
    fill: ${({ isLight }) => (!isLight ? '#B1AFAF' : '#5B5B5B')};
  }
  &:hover .tab-content__title {
    color: ${({ isLight }) => (isLight ? '#5B5B5B' : '#B1AFAF')};
  }

  @media (max-width: 540px) {
    padding: 0 27px;
  }
  .tab-content {
    display: flex;
    flex-direction: column;
    &__subtitle {
      font-size: 9px;
      line-height: 10.55px;
    }
    &__title {
      font-size: 18px;
      line-height: 21px;
      font-weight: 700;
      ${({ isActive, isLight }) =>
        isLight
          ? `color: ${isActive ? '#5B5B5B' : '#B1AFAF'}`
          : `color: ${isActive ? '#929292' : '#5B5B5B'}`};
    }
  }
  .description {
    font-size: 14px;
    line-height: 16px;
    ${({ isActive, isLight }) =>
      isLight ? `color: ${isActive ? '#5B5B5B' : '#B1AFAF'}` : `color: ${isActive ? '#929292' : '#5B5B5B'}`};
  }
  .icon > g > path {
    ${({ isLight, isActive }) =>
      isLight ? `${isActive ? '' : 'fill: #929292'}` : `${isActive ? 'fill: #B1AFAF' : 'fill: #5b5b5b'}`};
  }
`;

const ModuleContent = ({ title, subtitle, description, showContentPage, isActive }) => {
  const { isLight } = useTheme();
  return (
    <ModuleContentStyled type="button" isActive={isActive} isLight={isLight} onClick={showContentPage}>
      <span className="tab-content">
        <span className="tab-content__title">{title.toUpperCase()}</span>
        {title.includes('intern') && <span className="tab-content__subtitle">{subtitle.toUpperCase()}</span>}
      </span>
      <span className="description">{description}</span>
      <SvgGenerator iconId="arrow-right" width={30} height={30} classnames="icon" />
    </ModuleContentStyled>
  );
};

ModuleContent.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  description: PropTypes.string.isRequired,
  showContentPage: PropTypes.func,
  isActive: PropTypes.bool,
};

ModuleContent.defaultProps = {
  subtitle: '',
  showContentPage: () => {},
  isActive: false,
};

export default ModuleContent;
