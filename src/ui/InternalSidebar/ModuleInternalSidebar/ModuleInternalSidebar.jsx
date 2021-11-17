/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import SvgGenerator from '@/ui/SvgGenerator';
// eslint-disable-next-line import/no-unresolved
import IconLock from '@/static/icons/lock';
import useTheme from '@/hooks/useTheme';
import styled from '@emotion/styled';

const ModuleSidebarStyled = styled.button`
  width: 100%;
  background-color: transparent;
  border: none;
  outline: none;
  box-sizing: border-box;
  cursor: ${({ isTabClose }) => (isTabClose ? 'auto' : 'pointer')};
  margin-bottom: ${({ isOpenTab }) => (isOpenTab ? '12px' : '0')};

  &:hover .tab-header-text {
    color: ${({ isLight }) => (isLight ? '#5b5b5b' : '#FFFFFF')};
    ${({ isOpenTab, isTabClose }) => (isOpenTab && !isTabClose ? 'font-weight: bold' : '')};
    ${({ isLight }) => (isLight ? 'font-weight: bold' : '')};
  }
  &:hover .tab-subtitle {
    color: ${({ isLight }) => (isLight ? '#ececec' : '#a6a5af')};
  }

  ${({ classNameHeader }) => classNameHeader}
  .tab-header {
    position: relative;
    margin-top: 20px;
    width: 100%;

    &-text {
      font-size: 16px;
      line-height: 19px;
      color: ${({ isLight, isOpenTab }) => (isLight || !isOpenTab ? '#5b5b5b' : '#FFFFFF')};
      ${({ isOpenTab }) => (isOpenTab ? 'font-weight: bold' : '')};
    }
    &-icon {
      position: absolute;
      left: 70px;
      bottom: 4px;
      & > path {
        ${({ isLight }) => (isLight ? '' : 'fill: #49495B')};
      }
    }
  }
  .tab-subtitle {
    margin-top: 12px;
    width: 100%;
    font-size: 14px;
    line-height: 16px;
    color: ${({ isLight, isOpenTab }) => (isLight ? '#ececec' : `${isOpenTab ? '#a6a5af' : '#7f7e8c'}`)};
    overflow: hidden;

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
      margin-right: 10px;
    }
    &::after {
      margin-right: -100%;
      margin-left: 10px;
    }
    @media (max-width: 540px) {
      border-left: 13px solid transparent;
      border-right: 13px solid transparent;
    }
  }
  .tab-arrow {
    margin-top: 6px;

    & > path {
      ${({ isLight }) => (isLight ? '' : 'fill: #49495B')};
    }
  }
`;

const ModuleInternalSidebar = ({
  infoVacancy,
  openTab,
  openSidebar,
  index,
  icon,
  isDropDown,
  showInsteadHeader,
  showModuleContent,
  classNameHeader,
}) => {
  const { isLight } = useTheme();

  return (
    <>
      {infoVacancy?.isChange && showInsteadHeader()}
      <ModuleSidebarStyled
        type="button"
        isOpenTab={openTab === index}
        isTabClose={infoVacancy.close}
        isLight={isLight}
        onClick={openSidebar}
        classNameHeader={classNameHeader}
      >
        {infoVacancy.header && (
          <div className="tab-header">
            {icon}
            {infoVacancy.close && (
              <IconLock color="#ECECEC" width={16} height={20} className="tab-header-icon" />
            )}
            <span className="tab-header-text">{infoVacancy.header.toUpperCase()}</span>
          </div>
        )}
        <div className="tab-subtitle">{infoVacancy.subtitle}</div>
        {isDropDown && (
          <div>
            <SvgGenerator
              iconId={openTab === index ? 'arrow-up' : 'arrow-down'}
              width={19}
              height={11}
              classnames="tab-arrow"
            />
          </div>
        )}
      </ModuleSidebarStyled>
      {isDropDown && openTab === index && infoVacancy?.content && showModuleContent(infoVacancy.content)}
    </>
  );
};

ModuleInternalSidebar.propTypes = {
  openTab: PropTypes.number,
  openSidebar: PropTypes.func,
  index: PropTypes.number.isRequired,
  infoVacancy: PropTypes.shape({
    header: PropTypes.string,
    subtitle: PropTypes.string,
    close: PropTypes.bool,
    isChange: PropTypes.bool,
    content: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        sum: PropTypes.string,
        subtitle: PropTypes.string,
      }),
    ),
  }).isRequired,
  icon: PropTypes.node,
  classNameHeader: PropTypes.string,
};

ModuleInternalSidebar.defaultProps = {
  icon: null,
  openTab: 0,
  openSidebar: () => {},
  classNameHeader: '',
};

export default ModuleInternalSidebar;
