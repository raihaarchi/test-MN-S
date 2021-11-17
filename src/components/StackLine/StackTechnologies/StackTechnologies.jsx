/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import SvgGenerator from '@/ui/SvgGenerator';
import useScreen from '@/hooks/useScreen';
import useTheme from '@/hooks/useTheme';

const StackLineStyled = styled.div`
  position: relative;

  @media (max-width: 1024px) {
    border-right: none;
    padding: 15px 40px;

    order: 2;
  }
  @media (max-width: 540px) {
    height: 196px;
    padding: 15px 0px;
    border-bottom: none;
  }

  .technologies {
    &-box {
      width: 100%;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
    }

    &-item {
      height: 54px;
      width: 80px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-end;
      color: ${({ isLight }) => (isLight ? '#7f7e8c' : '#7f7e8c')};

      @media (max-width: 540px) {
        width: 25%;
      }

      & > * {
        font-size: 12px;
        text-align: center;
        padding-top: 5px;
        white-space: nowrap;
        @media (max-width: 540px) {
          font-size: 10px;
        }
      }
    }
    &-icons {
      margin-bottom: 30px;
      display: flex;
      width: fit-content;

      &:last-of-type {
        margin-bottom: 0;
      }
      @media (max-width: 1024px) {
        margin-bottom: 15px;
      }
      @media (max-width: 540px) {
        flex-wrap: wrap;
      }
    }
    &-icon {
      & > path {
        fill: ${({ isLight }) => (isLight ? '#808080' : '#7f7e8c')};
        opacity: 1;
      }
      @media (max-width: 1024px) {
        width: 42px;
        height: 25px;
      }
    }
  }
`;

const StackLine = ({ technologies }) => {
  const [rowTechologies, setRowTechologies] = useState({ one: [], two: [] });
  const { isLight } = useTheme();
  const { isMobile } = useScreen();
  useEffect(() => {
    const counterRow = Math.ceil(technologies.length / 2);

    setRowTechologies({
      one: technologies.filter((el, index) => index + 1 > counterRow),
      two: technologies.filter((el, index) => index + 1 <= counterRow),
    });
  }, [technologies]);

  const setRow = (arr) => (
    <div className="technologies-icons">
      {arr.map(({ Icon, id, title }) => (
        <span className="technologies-item" key={id}>
          <SvgGenerator iconId={Icon} classnames="technologies-icon" />
          <p>{title}</p>
        </span>
      ))}
    </div>
  );

  return (
    <StackLineStyled isLight={isLight}>
      {isMobile && setRow(technologies)}
      {!isMobile && setRow(rowTechologies.two)}
      {!isMobile && setRow(rowTechologies.one)}
    </StackLineStyled>
  );
};

StackLine.propTypes = {
  technologies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default StackLine;
