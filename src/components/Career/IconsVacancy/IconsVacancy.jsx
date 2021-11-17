/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import SvgGenerator from '@/ui/SvgGenerator';
import useTheme from '@/hooks/useTheme';
import useResize from '@/hooks/useResize';
import Button from '@/ui/Button';
import styled from '@emotion/styled';
import ModuleBlockInfo from '@/ui/ModuleBlockInfo';

const frontStack = ['jQuery', 'Vue', 'Angular', 'React'];
const backStack = ['Laravel', 'Symfony', 'Yii'];
const bonuses = [
  'xbox',
  'icon-tennis',
  'office',
  'hookah',
  'team-building',
  'career',
  'education',
  'technology',
  'mentr',
];

const IconsVacancyStyled = styled.div`
  min-width: 420px;
  height: ${({ isIntern }) => (isIntern ? 'auto' : '100%')};
  border-left: 1px solid ${({ isLight }) => (isLight ? '#ececec' : '#49495B')};
  color: ${({ isLight }) => (isLight ? '#5b5b5b' : '#7f7e8c')};
  padding: 59px 43px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${({ isIntern }) => (isIntern ? 'margin: 0 auto' : '')};
  ${({ isIntern }) => (isIntern ? 'border: none' : '')};
  ${({ isIntern }) => (isIntern ? 'max-width: 500px' : '')};

  @media (max-width: 1024px) {
    margin-top: ${({ isIntern }) => (isIntern ? '60px' : '92px')};
    padding-top: 0;
    min-width: 100%;
    width: auto;
    height: auto;
  }
  @media (max-width: 540px) {
    margin-top: ${({ isIntern }) => (isIntern ? '20px' : '63px')};
    padding: 0 15px;
    border-left: none;
  }
  .icons-vacancy {
    &__icons {
      color: #5b5b5b;
      display: flex;
      padding: 0 20px;
    }
    &__icons-skill {
      margin: auto;
      text-align: center;
    }
    &__icon-skill {
      margin-bottom: 8px;

      & > path {
        fill: ${({ isLight }) => (isLight ? '#808080' : '#F5F5F5')};
        ${({ isLight }) => (!isLight ? 'opacity: 0.5' : '')};
      }
    }
    &__icons-bonus {
      width: calc(100% / 3);
      height: fit-content;
      margin-bottom: 16px;
      display: flex;
      justify-content: center;

      @media (max-width: 540px) {
        ${({ isAspectRatio }) => (isAspectRatio ? 'height: calc(100vh / 7)' : '')};
      }
    }
    & > svg {
      width: 79px;
      height: 79px;
    }
    &__icon-bonus {
      & > path,
      > g > path {
        ${({ isLight }) => (!isLight ? 'fill: #F5F5F5' : '')};
      }
    }
    &__title-sum {
      width: 100%;
      display: flex;
      justify-content: space-between;
      padding: 0 20px;

      @media (max-width: 540px) {
        font-size: 13px;
        line-height: 15px;
      }
    }
    &__title--bold {
      margin: 0 5px;
      font-size: 20px;
      line-height: 23px;
      font-weight: bold;

      @media (max-width: 540px) {
        font-size: 16px;
        line-height: 18px;
      }
    }
    &__send {
      ${({ isIntern }) => (!isIntern ? 'margin-top: 40px' : '')};
      ${({ isIntern }) => (isIntern ? 'position: absolute' : '')};
      ${({ isIntern }) => (isIntern ? 'bottom: 17px' : '')};
      @media (max-width: 540px) {
        ${({ isIntern }) => (isIntern ? 'position: unset' : '')};
      }
    }
    &__income {
      justify-content: space-between;
    }
    &__text {
      align-items: baseline;
    }
  }
`;

const IconsVacancy = ({ department, vacancy, link }) => {
  const { isLight } = useTheme();
  const [iconsSkill, setIconsSkill] = useState(backStack);
  const [iconsBonus, setIconsBonus] = useState(bonuses);
  const { widthWindow, heightWindow } = useResize();
  const isAspectRatio = heightWindow / widthWindow < 2;

  const [experience, setExperience] = useState([1, 'года']);
  const [price, setPrice] = useState('40 000');
  const isPageIntern = !vacancy?.titleDemand;

  useEffect(() => {
    if (vacancy.header.includes('middle')) {
      setExperience([2, 'лет']);
      setPrice('60 000');
    } else if (vacancy.header.includes('intern')) {
      setIconsBonus((bon) => bon.filter((el, index) => index < 6));
    } else {
      setExperience([1, 'года']);
      setPrice('40 000');
      setIconsBonus(bonuses);
    }
  }, [vacancy]);

  useEffect(() => {
    if (department.header.includes('frontend')) {
      setIconsSkill(frontStack);
    } else {
      setIconsSkill(backStack);
    }
  }, [department]);

  return (
    <IconsVacancyStyled isAspectRatio={isAspectRatio} isIntern={isPageIntern} isLight={isLight}>
      {!vacancy.header.includes('intern') && (
        <>
          <ModuleBlockInfo title="ТРЕБУЕМЫЙ ОПЫТ" className="icons-vacancy__text">
            от <strong className="icons-vacancy__title--bold">{experience[0]}</strong> {experience[1]}
          </ModuleBlockInfo>
          <ModuleBlockInfo title="ТЕХНОЛОГИИ">
            {iconsSkill.map((name, index) => (
              <span className="icons-vacancy__icons-skill" key={index}>
                <SvgGenerator iconId={name} width={50} height={50} classnames="icons-vacancy__icon-skill" />
                <p>{name}</p>
              </span>
            ))}
          </ModuleBlockInfo>
          <ModuleBlockInfo title="УСЛОВИЯ РАБОТЫ" className="icons-vacancy__income icons-vacancy__text">
            <p>
              доход от <strong className="icons-vacancy__title--bold">{price} ₽</strong>
            </p>
            <p>Ульяновск</p>
          </ModuleBlockInfo>
        </>
      )}
      <ModuleBlockInfo title="БОНУСЫ">
        {iconsBonus.map((name, index) => (
          <span className="icons-vacancy__icons-bonus" key={index}>
            <SvgGenerator iconId={name} classnames="icons-vacancy__icon-bonus" />
          </span>
        ))}
      </ModuleBlockInfo>
      {isPageIntern && (
        <Button to={link} className="icons-vacancy__send">
          Перейти на hh
        </Button>
      )}
    </IconsVacancyStyled>
  );
};

IconsVacancy.propTypes = {
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
  link: PropTypes.string,
};

IconsVacancy.defaultProps = {
  vacancy: PropTypes.shape({
    titleDemand: [],
    titleConditions: [],
    titleCapabilities: [],
  }),
  link: '*',
};

export default IconsVacancy;
