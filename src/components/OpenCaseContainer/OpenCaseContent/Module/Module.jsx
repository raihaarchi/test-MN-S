import React, { useState, useEffect } from 'react';
import ReactHtmlParser from 'react-html-parser';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import SvgGenerator from '@/ui/SvgGenerator';
import ModuleBlockInfo from '@/ui/ModuleBlockInfo';
import ShowMore from '@/ui/ShowNext';
import useTheme from '@/hooks/useTheme';

const NameStyled = styled.strong`
  width: 100%;
  text-align: center;
  min-height: 80px;
  padding-bottom: 30px;
  border-bottom: 1px solid ${({ isLight }) => (isLight ? '#ECECEC' : '#1B1B31')};
  font-size: 20px;
  line-height: 23px;

  @media (max-width: 1024px) {
    padding-bottom: 70px;
    min-height: 127px;
  }
  @media (max-width: 540px) {
    padding-bottom: 30px;
  }
`;

const DescriptionStyled = styled.p`
  max-width: 480px;
  padding-top: 43px;
  font-size: 14px;
  line-height: 17px;
  text-align: justify;
  height: ${({ isShowMore }) => (isShowMore ? 'calc(22px*5)' : 'auto')};
  overflow: ${({ isShowMore }) => (isShowMore ? 'hidden' : 'auto')};

  @media (max-width: 1024px) {
    max-width: 450px;
    height: ${({ isShowMore }) => (isShowMore ? 'calc(23px*7)' : 'auto')};
    overflow: ${({ isShowMore }) => (isShowMore ? 'hidden' : 'auto')};
  }
  @media (max-width: 768px) {
    max-width: 316px;
  }
  @media (max-width: 540px) {
    text-align: center;
    padding-top: 25px;
  }
`;

const TechnologyStyled = styled.span`
  font-size: 12px;
  line-height: 14px;
  display: flex;
  justify-content: space-around;

  .technology {
    &__icon {
      padding: 0 23px;

      & > svg > path {
        fill: ${({ isLight }) => (isLight ? '#808080' : '#7d7b8a')};
        opacity: 1;
        fill-opacity: 1;
      }
    }
    &__icon-name {
      text-align: center;
    }
  }
`;

const Module = ({ description, frameworks, name, className }) => {
  const { isLight } = useTheme();
  const [isShowMore, setIsShowMore] = useState(false);

  useEffect(() => {
    if (description.length > 300) {
      setIsShowMore(true);
    }
  }, [description.length]);
  return (
    <>
      <NameStyled isLight={isLight}>{name}</NameStyled>
      <DescriptionStyled isShowMore={isShowMore}>
        {ReactHtmlParser(description.replace(/<div>/g, '').replace(/<\/div>/g, ''))}
      </DescriptionStyled>
      {isShowMore && <ShowMore className={className} onClick={() => setIsShowMore(!isShowMore)} isAppowUp />}
      {Boolean(frameworks?.length) && (
        <ModuleBlockInfo
          title="ТЕХНОЛОГИИ"
          styleTitle={{ 'font-size': '12px', 'line-height': '14px', width: '160px' }}
        >
          <TechnologyStyled isLight={isLight}>
            {frameworks.map(({ name: iconId }, index) => (
              <span className="technology__icon" key={index}>
                <SvgGenerator iconId={iconId} height={45} width={45} />
                <p className="technology__icon-name">{iconId}</p>
              </span>
            ))}
          </TechnologyStyled>
        </ModuleBlockInfo>
      )}
    </>
  );
};

Module.propTypes = {
  description: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  frameworks: PropTypes.arrayOf(PropTypes.any),
};

Module.defaultProps = {
  description: '',
  name: '',
  frameworks: [],
  className: '',
};

export default Module;
