import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import PropTypes from 'prop-types';

import useScreen from '@/hooks/useScreen';
import SvgGenerator from '@/ui/SvgGenerator';
import useTheme from '@/hooks/useTheme';
import styled from '@emotion/styled';
import ModuleBlockInfo from '@/ui/ModuleBlockInfo';

const InfoBonusesStyled = styled.div`
  margin: 0 auto;
  min-width: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ isLight }) => (isLight ? '#5b5b5b' : '#434057')};
  @media (max-width: 1024px) {
    width: 100%;
    padding: 0 38px;
  }
  @media (max-width: 540px) {
    width: 100%;
    padding: 0 21px;
  }

  .info-bonuses {
    &__abvantage {
      max-width: 540px;
      width: 100%;
      display: flex;
      justify-content: space-between;
      text-align: center;
      font-size: 12px;
      line-height: 14px;

      @media (max-width: 1024px) {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    }
    &__header {
      margin-bottom: 50px;
      text-align: center;
      font-size: 24px;
      font-weight: 300;
      line-height: 28px;
      padding: 30px 0;
      color: ${({ isLight }) => (isLight ? '#b3b3b3' : '#434057')};
      @media (max-width: 1024px) {
        margin-bottom: 0;
        font-size: 18px;
        line-height: 21px;
      }
    }
    &__icon {
      & > svg > path {
        fill: ${({ isLight }) => (isLight ? '#808080' : '#7d7b8a')};
        opacity: 1;
        fill-opacity: 1;
      }
      @media (max-width: 1024px) {
        display: flex;
        align-items: center;
        min-width: 185px;
        & > * {
          margin-right: 28px;
        }
      }
      & > *:first-of-type {
        margin-bottom: 35px;
      }
      & > *:not(:first-of-type) {
        margin-top: 32px;

        @media (max-width: 1024px) {
          margin-top: 0;
          margin-left: 28px;
        }
      }
    }
    &__bonus {
      max-width: 540px;
      @media (max-width: 1024px) {
        max-width: 297px;
      }
    }
    &__bonuses {
      margin-top: 30px;
      width: 110px;
      max-height: 65px;
      display: flex;
      align-items: center;
      justify-content: center;
      & > svg {
        width: 100%;
        height: 100%;
      }
      & > svg > path,
      > svg > g > path {
        fill: ${({ isLight }) => (isLight ? '#808080' : '#7d7b8a')};
        opacity: 1;
        fill-opacity: 1;
      }
      & > svg > g {
        opacity: 1;
      }
      @media (max-width: 1024px) {
        width: 95px;
        margin: 11px 0;
      }
    }
    &__button {
      margin-top: 70px;
      @media (max-width: 1024px) {
        margin-top: 72px;
      }
      @media (max-width: 540px) {
        margin-top: 88px;
      }
    }
  }
`;

const InfoBonuses = ({ faculty, setButtonSend }) => {
  const { isLight } = useTheme();
  const { isTablet } = useScreen();

  const { title: nameAdvantage, content: contentAdvantage } = faculty[4];
  const { title: nameBonuses, content: contentBonuses, contentTablet: contentTabletBonuses } = faculty[5];

  const returnBonuses = (content) =>
    content.map(({ name }, index) => (
      <div className="info-bonuses__bonuses" key={index}>
        <SvgGenerator iconId={name} width={82} height={65} />
      </div>
    ));

  return (
    <InfoBonusesStyled isLight={isLight}>
      <p className="info-bonuses__header">{nameAdvantage}</p>
      <div className="info-bonuses__abvantage">
        {contentAdvantage.map(({ title, name }, index) => (
          <div className="info-bonuses__icon" key={index}>
            <SvgGenerator iconId={name} width={isTablet ? 32 : 105} height={isTablet ? 32 : 105} />
            <p>{ReactHtmlParser(title)}</p>
          </div>
        ))}
      </div>
      <ModuleBlockInfo title={nameBonuses} className="info-bonuses__bonus">
        {!isTablet ? returnBonuses(contentBonuses) : returnBonuses(contentTabletBonuses)}
      </ModuleBlockInfo>
      {setButtonSend('info-bonuses__button')}
    </InfoBonusesStyled>
  );
};

InfoBonuses.propTypes = {
  faculty: PropTypes.arrayOf(PropTypes.any),
  setButtonSend: PropTypes.func,
};

InfoBonuses.defaultProps = {
  faculty: [],
  setButtonSend: () => {},
};

export default InfoBonuses;
