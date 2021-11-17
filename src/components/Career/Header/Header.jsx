import React from 'react';
import cn from 'classnames/bind';
import PropTypes from 'prop-types';
import SvgGenerator from '@/ui/SvgGenerator';
import useTheme from '@/hooks/useTheme';
import useScreen from '@/hooks/useScreen';
import styled from '@emotion/styled';

import styles from './styles.module.scss';

const cx = cn.bind(styles);

const HeaderStyled = styled.div`
  position: absolute;
  z-index: 1;
  left: ${({ isIntern }) =>
    isIntern ? 'calc((100% - 294px) / 2 + 294px)' : 'calc((100% - 714px) / 2 + 294px)'};
  transform: translate(-50%, 0);
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ isLight }) => (isLight ? '#5b5b5b' : '#FFFFFF')};

  @media (max-width: 1024px) {
    left: calc((100% - 294px) / 2 + 294px);
  }
  @media (max-width: 540px) {
    left: 50%;
  }

  .header {
    &__header-top {
      position: relative;
      display: flex;
    }
    &__header {
      font-size: 33px;
      line-height: 39px;
      font-weight: 700;

      @media (max-width: 540px) {
        font-size: 25px;
        line-height: 30px;
      }
    }
    &__icon {
      position: absolute;
      left: -38px;

      @media (max-width: 540px) {
        left: -28px;
      }
    }
    &__subtitle {
      margin-bottom: 50px;
      font-size: 16px;
      line-height: 19px;
      font-weight: 300;

      @media (max-width: 540px) {
        margin-bottom: 20px;
        font-size: 13px;
        line-height: 15px;
      }
    }
  }
`;

const Header = ({ vacancy, department, setOpenSidebar }) => {
  const { isLight } = useTheme();
  const { isMobile } = useScreen();
  return (
    <>
      {isMobile && (
        <button type="button" className={cx('come-back')} onClick={setOpenSidebar}>
          <SvgGenerator iconId="come-back" width={30} height={30} />
        </button>
      )}
      <HeaderStyled isLight={isLight} isIntern={vacancy.header.includes('intern')}>
        <span className="header__header-top">
          {vacancy.header.includes('intern') && (
            <SvgGenerator
              iconId="fire"
              width={isMobile ? 18 : 28}
              height={isMobile ? 23 : 35}
              classnames="header__icon"
            />
          )}
          <p className="header__header">{vacancy.header.toUpperCase()}</p>
        </span>
        <p className="header__subtitle">{department.header.toUpperCase()}</p>
      </HeaderStyled>
    </>
  );
};

Header.propTypes = {
  department: PropTypes.shape({
    header: PropTypes.string,
  }).isRequired,
  vacancy: PropTypes.shape({
    header: PropTypes.string,
  }).isRequired,
  setOpenSidebar: PropTypes.func.isRequired,
};

Header.defaultProps = {};

export default Header;
