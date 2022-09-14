import styled, { css } from "styled-components";

type ButtonProps = {
  color?: 'primary' | 'secondary'
  size?: 'default' | 'big'
}

export const Button = styled.button<ButtonProps>`
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: #ffb400;
  width: 220px;
  display: flex;
  align-items: center;
  gap: 15px;
  justify-content: center;
  ${props =>
    props.color === 'primary' &&
    css`
      padding: 8px 32px;
    `};
  ${props =>
    props.color === 'secondary' &&
    css`
      padding: 8px 32px;
      border-radius: 30px;
    `};
`