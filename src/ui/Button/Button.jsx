import React from 'react';
import useTheme from '@/hooks/useTheme';
import PropTypes from 'prop-types';

import styled from '@emotion/styled';

const ButtonStyled = styled.button`
  width: 200px;
  height: 42px;
  outline: none;
  background-color: ${({ isLight }) => (isLight ? '#5b5b5b' : 'transparent')};
  border: ${({ isLight }) => (isLight ? 'none' : '1px solid #ffffff')};
  border-radius: 10px;
  color: #ffffff;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  cursor: pointer;
  ${({ className }) => className}
`;
const IconButtonStyled = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  ${({ className }) => className}
`;

const Button = ({ children, className, to, onClick, type, buttonIcon }) => {
  const { isLight } = useTheme();
  const returnButton = () =>
    to ? (
      // eslint-disable-next-line react/jsx-no-target-blank
      <a href={to} target="_blank" className={className}>
        <ButtonStyled type={type} isLight={isLight} onClick={onClick}>
          {children}
        </ButtonStyled>
      </a>
    ) : (
      <ButtonStyled type={type} isLight={isLight} onClick={onClick} className={className}>
        {children}
      </ButtonStyled>
    );
  return (
    <>
      {buttonIcon ? (
        <IconButtonStyled type={type} isLight={isLight} onClick={onClick} className={className}>
          {children}
        </IconButtonStyled>
      ) : (
        returnButton()
      )}
    </>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string.isRequired,
  to: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
  buttonIcon: PropTypes.bool,
};

Button.defaultProps = {
  to: '',
  onClick: () => {},
  type: 'button',
  buttonIcon: false,
};

export default Button;
