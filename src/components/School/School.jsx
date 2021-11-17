import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import { dataSidebarFaculty as data, dataContent as faculty } from '@/static/data/dataSchool';
import useTheme from '@/hooks/useTheme';
import useScreen from '@/hooks/useScreen';
import useScroll from '@/hooks/useScroll';
import InternalSidebar from '@/ui/InternalSidebar';
import SvgGenerator from '@/ui/SvgGenerator';
import Button from '@/ui/Button';
import styled from '@emotion/styled';
import { isTablet } from 'react-device-detect';
import TabContent from './TabContent';
import InfoFaculty from './InfoFaculty';
import InfoBonuses from './InfoBonuses';

const SchoolStyled = styled.div`
  position: relative;
  display: flex;
  height: 100%;
  padding: 35px 0;
  color: ${({ isLight }) => (isLight ? '#5b5b5b' : '#ffffff')};
  @media (max-width: 540px) {
    padding: 16px 0;
  }
  .school {
    &__header {
      margin-bottom: 21px;
      text-align: center;
      font-size: 16px;
      line-height: 19px;
      color: ${({ isLight }) => (isLight ? '#5b5b5b' : '#ffffff')};
      @media (max-width: 540px) {
        font-size: 13px;
        line-height: 15px;
      }
      & > *:first-of-type {
        font-weight: bold;
        font-size: 33px;
        line-height: 39px;
        @media (max-width: 540px) {
          font-size: 25px;
          line-height: 29px;
        }
      }
    }
    &__content-right {
      display: flex;
      width: 100%;

      @media (max-width: 1024px) {
        flex-direction: column;
      }
    }
    &__come-back {
      position: absolute;
      top: 15px;
      left: 19px;
      & > svg > path {
        ${({ isLight }) => !isLight && 'fill: #ffffff'}
      }
    }
    &__sidebar {
      margin-top: 0;
      padding-top: 147px;
      @media (max-width: 1024px) {
        padding-top: 132px;
      }
      @media (max-width: 540px) {
        padding-top: ${({ openSidebar }) => (openSidebar ? '95px' : '0')};
        ${({ openSidebar }) => !openSidebar && 'position: unset'}
      }
    }
    &__tab-sidebar {
      @media (max-width: 540px) {
        padding: 0;
      }
    }
  }
`;

const School = () => {
  const { isLight } = useTheme();
  const { isMobile } = useScreen();
  const router = useRouter();

  const [header, setHeader] = useState('BACKEND');
  const [openSidebar, setOpenSidebar] = useState(false);
  const { isScroll, setScroll } = useScroll(openSidebar, false);

  const openContent = (val) => {
    setHeader(val);
    if (isMobile) {
      setOpenSidebar(false);
    }
  };

  useEffect(() => {
    if (isMobile) {
      setScroll('fixed');
    } else {
      setScroll('unset');
    }
  }, [isMobile]);

  const setHeaderSidebar = () => (
    <>
      <TabContent
        title="BACKEND"
        sum="факультет"
        isOpenTab={header.includes('BACKEND')}
        onClick={() => openContent('BACKEND')}
      />
      <TabContent
        title="FRONTEND"
        sum="факультет"
        isOpenTab={header.includes('FRONTEND')}
        onClick={() => openContent('FRONTEND')}
      />
    </>
  );
  const setHeaderPage = () => (
    <div className="school__header">
      <p>{header}</p>
      <p>ФАКУЛЬТЕТ</p>
    </div>
  );
  return (
    <SchoolStyled isLight={isLight} openSidebar={openSidebar}>
      {isMobile && !openSidebar && (
        <Button buttonIcon className="school__come-back" onClick={() => setOpenSidebar(true)}>
          <SvgGenerator iconId="come-back" width={30} height={30} />
        </Button>
      )}
      {(openSidebar || !isMobile) && (
        <InternalSidebar
          classNameHeader="school__tab-sidebar"
          data={data}
          showInsteadHeader={setHeaderSidebar}
          className="school__sidebar"
        />
      )}
      {(!openSidebar || !isMobile) && (
        <div className="school__content-right">
          <InfoFaculty
            faculty={faculty}
            setHeaderPage={setHeaderPage}
            setScroll={() => setScroll(isScroll.includes('unset') ? 'fixed' : 'unset')}
            isScroll={isScroll.includes('unset')}
          />
          <InfoBonuses
            faculty={faculty}
            setButtonSend={(className) => (
              <Button className={className} onClick={() => router.push('/contacts')}>
                {isTablet ? 'Обсудить' : 'Поступить'}
              </Button>
            )}
          />
        </div>
      )}
    </SchoolStyled>
  );
};

School.propTypes = {};

School.defaultProps = {};

export default School;
