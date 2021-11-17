import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Link, animateScroll as scroll } from 'react-scroll';

import useTheme from '@/hooks/useTheme';
import useScreen from '@/hooks/useScreen';
import useScroll from '@/hooks/useScroll';
import { dataCareerSidebar as dataSidebar, dataCareerVacances as data } from '@/static/data/dataCareer';
import ShowNext from '@/ui/ShowNext';
import InternalSidebar from '@/ui/InternalSidebar';

import styled from '@emotion/styled';
import TabContent from './TabContent';

import Vacancy from './Vacancy';
import IconsVacancy from './IconsVacancy';
import Header from './Header';

const CareerStyled = styled.div`
  position: relative;
  padding: 35px 0;
  height: 100%;
  display: flex;
  justify-content: space-between;

  @media (max-width: 1024px) {
    padding: 30px 0;
  }
  @media (max-width: 540px) {
    position: unset;
    padding: 20px 0;
  }
`;

const linkInternBackend = 'https://hh.ru/vacancy/42076998';
const linkInternFrontend = 'https://hh.ru/vacancy/42077040';

const CareerContentStyled = styled.div`
  width: 100%;
  ${({ isIntern }) => (!isIntern ? 'display: flex' : '')};

  @media (max-width: 1024px) {
    flex-direction: column-reverse;
    height: fit-content;
  }
  @media (max-width: 540px) {
    position: ${({ isIntern }) => (isIntern ? 'unset' : 'relative')};
  }
  .career {
    &__show-next {
      height: calc(100vh / 13.5);
      width: 100%;
      background-color: ${({ isLight }) => (isLight ? '#ffffff' : '#03031c')};
    }
    &__show-link {
      position: ${({ isScroll }) => (isScroll ? 'absolute' : 'fixed')};
      bottom: ${({ isScroll }) => (isScroll ? '70px' : '0')};
      z-index: 1;
      width: 100%;
    }
  }
`;

const Career = () => {
  const { isLight } = useTheme();
  const { isMobile } = useScreen();
  const router = useRouter();

  const [department, setDepartment] = useState(data.backend);
  const [vacancy, setVacancy] = useState(data.backend.intern);
  const [openTab, setOpenTab] = useState(0);
  const [openSidebar, setOpenSidebar] = useState(false);

  const { isScroll, setScroll } = useScroll(openSidebar, !vacancy?.titleDemand);

  const returnDepartament = () => {
    if (!router.query.vacancy) {
      router.push({
        pathname: router.pathname,
        query: { vacancy: 'backend_intern' },
      });
    }
    if (router.query.vacancy?.includes('frontend')) {
      setDepartment(data.frontend);
      return data.frontend;
    }
    setDepartment(data.backend);
    return data.backend;
  };

  useEffect(() => {
    const localDepartament = returnDepartament();
    if (router.query.vacancy?.includes('intern')) {
      setVacancy(localDepartament.intern);
    } else if (router.query.vacancy?.includes('junior')) {
      setVacancy(localDepartament.junior);
    } else if (router.query.vacancy?.includes('middle')) {
      setVacancy(localDepartament.middle);
    } else {
      setVacancy(localDepartament.intern);
    }
  }, [router.query]);

  useEffect(() => {
    if (router.query.vacancy?.includes('intern')) {
      setOpenTab(0);
    } else if (router.query.vacancy?.includes('backend')) {
      setOpenTab(1);
    } else if (router.query.vacancy?.includes('frontend')) {
      setOpenTab(2);
    }
  }, [router.query]);

  const openVacancy = ({ subtitle, title }) => {
    router.push({
      pathname: router.pathname,
      query: { vacancy: `${subtitle}_${title}` },
    });
    setOpenSidebar(false);
    if (isMobile) {
      scroll.scrollToTop();
      setScroll('fixed');
      document.body.style.width = '100%';
    }
  };

  useEffect(() => {
    if (isMobile) {
      setScroll('fixed');
    }
  }, [isMobile]);

  const handleOpenTabClick = (isCloseDefault, index) => {
    if (openTab === index || isCloseDefault) {
      setOpenTab(-1);
    } else {
      setOpenTab(index);
    }
  };

  return (
    <CareerStyled isLight={isLight} isIntern={!vacancy?.titleCapabilities}>
      {(!isMobile || !openSidebar) && (
        <Header department={department} vacancy={vacancy} setOpenSidebar={() => setOpenSidebar(true)} />
      )}
      {(openSidebar || !isMobile) && (
        <InternalSidebar
          data={dataSidebar}
          openTab={openTab}
          openSidebar={handleOpenTabClick}
          isDropDown
          showModuleContent={(infoVacancy) =>
            infoVacancy.map(({ title, sum, subtitle, key }) => (
              <TabContent
                description={sum}
                title={title}
                subtitle={subtitle}
                vacancy={vacancy}
                key={key}
                id={key}
                openVacancy={() => openVacancy({ subtitle, title })}
                isOpen={openTab}
                isActiveTab={key === 1}
              />
            ))}
        />
      )}
      {(!isMobile || !openSidebar) && (
        <CareerContentStyled
          isLight={isLight}
          isIntern={vacancy?.titleCapabilities}
          isScroll={isScroll.includes('unset')}
        >
          <Vacancy department={department} vacancy={vacancy} />
          <IconsVacancy
            department={department}
            vacancy={vacancy}
            link={vacancy.subtitle.includes('backend') ? linkInternBackend : linkInternFrontend}
          />
          {isMobile && vacancy?.titleDemand && (
            <Link to="start_page" className="career__show-link">
              <ShowNext
                className="career__show-next"
                onClick={() => setScroll(isScroll.includes('unset') ? 'fixed' : 'unset')}
                openSection={isScroll.includes('unset')}
              />
            </Link>
          )}
        </CareerContentStyled>
      )}
    </CareerStyled>
  );
};

Career.propTypes = {};

Career.defaultProps = {};

export default Career;
