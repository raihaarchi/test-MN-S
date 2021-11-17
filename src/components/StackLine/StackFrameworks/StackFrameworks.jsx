import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import useScreen from '@/hooks/useScreen';
import SvgGenerator from '@/ui/SvgGenerator';
import useTheme from '@/hooks/useTheme';

const StackFrameworksStyled = styled.ul`
  margin: 0 20px;
  width: 165px;
  height: fit-content;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: end;
  align-items: center;
  align-content: stretch;
  & > * {
    list-style-type: none;
  }

  @media (max-width: 1024px) {
    width: auto;
  }
  @media (max-width: 540px) {
    margin: 0;
  }
  .frameworks {
    &-item {
      height: min-content;
      margin: 13px;

      @media (max-width: 1024px) {
        margin: 23px 34px;
      }
      @media (max-width: 540px) {
        margin: 22px 0 22px 22px;
        &:first-of-type {
          margin-left: 0;
        }
      }

      & > * {
        color: #7f7e8c;
        font-size: 14px;
        text-align: center;
        padding-top: 5px;

        @media (max-width: 1024px) {
          font-size: 13px;
        }
        @media (max-width: 540px) {
          font-size: 12px;
        }
      }
    }
    &-icon > path {
      fill: ${({ isLight }) => (isLight ? '#808080' : '#7f7e8c')};
    }
  }
`;

const StackFrameworks = ({ frameworks }) => {
  const { isLight } = useTheme();
  const { isTablet } = useScreen();
  return (
    <StackFrameworksStyled isLight={isLight}>
      {frameworks.map(({ Icon, id, title }) => {
        const nameStack =
          title.length > 9 && !isTablet ? (
            <p>
              {title.split(' ')[0]}
              <br />
              {title.split(' ')[1]}
            </p>
          ) : (
            <p>{title}</p>
          );
        return (
          <li className="frameworks-item" key={id}>
            <SvgGenerator iconId={Icon} width={50} height={50} classnames="frameworks-icon" />
            {nameStack}
          </li>
        );
      })}
    </StackFrameworksStyled>
  );
};

StackFrameworks.propTypes = {
  frameworks: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default StackFrameworks;
