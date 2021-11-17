/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import useTheme from '@/hooks/useTheme';
import styled from '@emotion/styled';

const TitleStyled = styled.span`
  margin-top: 45px;
  font-size: 16px;
  line-height: 19px;
  ${({ isLight }) => (!isLight ? 'color: #cdcdd2' : '')};

  @media (max-width: 1024px) {
    margin-top: 24px;
  }
`;
const VacancyListStyled = styled.ul`
  margin-top: 30px;
  max-width: 500px;
  width: 100%;
  ${({ isIntern }) => (isIntern ? 'max-height: 150px' : '')};
  ${({ isIntern }) => (isIntern ? 'list-style-position: inside' : '')};
  ${({ isIntern }) => (isIntern ? 'column-count: 2' : '')};

  @media (max-width: 1024px) {
    margin-top: 25px;
    max-width: fit-content;
    ${({ isIntern }) => (isIntern ? 'column-count: 1' : '')};
  }
  .vacancy-list {
    &__text {
      margin-top: ${({ isIntern }) => (isIntern ? '13px' : '6px')};
      max-width: 500px;
      font-size: 14px;
      line-height: 16px;
      font-weight: 400;
      margin-left: ${({ isIntern }) => (isIntern ? '0' : '20px')};

      &:first-of-type {
        margin-top: 0;
      }
      @media (max-width: 540px) {
        margin-top: 12px;
      }
    }
  }
`;

const VacancyList = ({ array, isIntern, title }) => {
  const { isLight } = useTheme();

  return (
    <>
      {title && <TitleStyled isLight={isLight}>{title}</TitleStyled>}
      <VacancyListStyled isIntern={isIntern} isLight={isLight}>
        {array &&
          array.map((text, index) => (
            <li className="vacancy-list__text" key={index}>
              {text}
            </li>
          ))}
      </VacancyListStyled>
    </>
  );
};

VacancyList.propTypes = {
  array: PropTypes.arrayOf(PropTypes.string).isRequired,
  isIntern: PropTypes.bool,
  title: PropTypes.string,
};

VacancyList.defaultProps = {
  isIntern: false,
  title: '',
};

export default VacancyList;
