import React from 'react';
import PropTypes from 'prop-types';
import SvgGenerator from '@/ui/SvgGenerator';
import useTheme from '@/hooks/useTheme';

import styled from '@emotion/styled';

import ModuleSidebar from './ModuleInternalSidebar';

const InternalSidebarStyled = styled.div`
  margin-top: 25px;
  min-width: 295px;
  border-right: 1px solid ${({ isLight }) => (isLight ? '#ececec' : '#49495B')};
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 540px) {
    /* position: absolute; */
    margin-top: 0;
    min-width: 100%;
    border-right: none;
    background-color: ${({ isLight }) => (isLight ? '#ffffff' : '#03031c')};
    /* top: 65px; */
    /* bottom: 0; */
    height: 100%;
  }
  ${({ className }) => className};
  .icon {
    margin-right: 10px;
  }
`;
// ui-компонент возвращает sidebar внутри страницы
const InternalSidebar = ({
  openTab,
  data,
  showInsteadHeader,
  openSidebar,
  showModuleContent,
  className,
  isDropDown,
}) => {
  const { isLight } = useTheme();
  return (
    <InternalSidebarStyled isLight={isLight} className={className}>
      {data.map((infoVacancy, index) => (
        <ModuleSidebar
          infoVacancy={infoVacancy}
          // eslint-disable-next-line react/no-array-index-key
          key={index}
          icon={!index && <SvgGenerator iconId="fire" width={16} height={20} classnames="icon" />}
          index={index}
          isDropDown={isDropDown}
          openTab={openTab}
          openSidebar={() => openSidebar(infoVacancy.close, index)}
          showInsteadHeader={showInsteadHeader}
          showModuleContent={showModuleContent}
        />
      ))}
    </InternalSidebarStyled>
  );
};

InternalSidebar.propTypes = {
  openTab: PropTypes.number,
  isDropDown: PropTypes.bool,
  openSidebar: PropTypes.func,
  className: PropTypes.string,
  vacancy: PropTypes.shape({}),
  showInsteadHeader: PropTypes.func,
  showModuleContent: PropTypes.func,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

InternalSidebar.defaultProps = {
  openTab: 0,
  vacancy: {},
  className: '',
  isDropDown: false,
  openSidebar: () => {},
  showInsteadHeader: () => {},
  showModuleContent: () => {},
};

export default InternalSidebar;
