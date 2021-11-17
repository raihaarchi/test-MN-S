/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import useTheme from '@/hooks/useTheme';
import useScreen from '@/hooks/useScreen';
import ShowNext from '@/ui/ShowNext';
import Button from '@/ui/Button';
import styled from '@emotion/styled';
import List from './VacancyList';

const VacancyStyled = styled.div`
  position: relative;
  margin-top: 100px;
  padding: 0 47px;
  min-height: ${({ isIntern }) => (isIntern ? '170px' : '300px')};
  max-width: ${({ isIntern }) => (isIntern ? '500px' : 'calc(100% + 200px)')};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ isLight }) => (isLight ? '#5b5b5b' : '#7f7e8c')};
  ${({ isIntern }) => (isIntern ? 'margin: 100px auto 0' : '')};

  @media (max-width: 1024px) {
    margin-top: ${({ isIntern }) => (isIntern ? '138px' : '0')};
    min-height: auto;
    padding-bottom: 0;
  }
  @media (max-width: 768px) {
    ${({ isIntern }) => (isIntern ? 'padding-bottom: 20px' : '')};
  }
  @media (max-width: 540px) {
    padding: 0 30px 12px;
    ${({ isIntern }) => (isIntern ? 'margin-top: 63px' : '')};
    ${({ isIntern }) => (isIntern ? 'min-height: auto' : '')};
  }
  .vacancy {
    &__text {
      margin-top: 6px;
      max-width: 500px;
      font-size: 14px;
      line-height: 16px;
      font-weight: 400;
      margin-left: 20px;
      text-indent: 1.5em;

      &:first-of-type {
        margin-top: 0;
      }
      @media (max-width: 1024px) {
        display: none;
      }
    }
    &__send {
      position: absolute;
      bottom: 0;

      @media (max-width: 1024px) {
        position: unset;
        margin-top: 18px;
      }
      @media (max-width: 540px) {
        margin-top: 88px;
      }
    }
    &__show-more {
      margin-top: 18px;
    }
  }
`;

const Vacancy = ({ department, vacancy }) => {
  const isPageIntern = !vacancy?.titleDemand;
  const router = useRouter();
  const { isLight } = useTheme();
  const { isMiddleTablet, isMobile } = useScreen();
  const [openConditions, setOpenConditions] = useState(!isPageIntern);

  return (
    <VacancyStyled isIntern={isPageIntern} isLight={isLight}>
      {vacancy?.titleDemand ? (
        <>
          <span className="vacancy__text">{department.title}</span>
          <List array={vacancy.titleDemand} title="Требования к кандидату" />
          {(!isMiddleTablet || isMobile || openConditions) && (
            <List array={vacancy.titleConditions} title="Условия работы" />
          )}
          {isMiddleTablet && !isMobile && (
            <ShowNext
              className="vacancy__show-more"
              onClick={() => setOpenConditions(!openConditions)}
              isAppowUp={openConditions}
            />
          )}
          <Button className="vacancy__send" onClick={() => router.push('/contacts')}>
            Обсудить
          </Button>
        </>
      ) : (
        <List
          array={vacancy.titleCapabilities}
          isIntern={vacancy?.titleCapabilities && !isMiddleTablet && !isMobile}
        />
      )}
    </VacancyStyled>
  );
};

Vacancy.propTypes = {
  department: PropTypes.shape({
    header: PropTypes.string.isRequired,
    title: PropTypes.string,
  }).isRequired,
  vacancy: PropTypes.shape({
    header: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    titleDemand: PropTypes.arrayOf(PropTypes.string),
    titleConditions: PropTypes.arrayOf(PropTypes.string),
    titleCapabilities: PropTypes.arrayOf(PropTypes.string),
    key: PropTypes.number.isRequired,
  }),
};

Vacancy.defaultProps = {
  vacancy: PropTypes.shape({
    titleDemand: [],
    titleConditions: [],
    titleCapabilities: [],
  }),
};

export default Vacancy;
