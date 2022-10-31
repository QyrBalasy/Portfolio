import styled, { css } from "styled-components";

type ButtonProps = {
  color?: 'primary' | 'secondary' | 'third' | 'empty'
}

export const Button = styled.button<ButtonProps>`
  padding-top: 16px;
  padding-bottom: 16px;
  border-radius: 5px;
  background-color: #ffb400;
  width: 160px;
  display: flex;
  align-items: center;
  gap: 15px;
  justify-content: center;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  transition: all ease 0.5s;
  &:hover {
    background-color: #fad783;
  }
  &:active {
    background-color: #ae7c07;
  }
  &:disabled {
    background-color: var(--element-blocked);
    color: var(--text-white);
    cursor: not-allowed;
  }
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
      box-shadow: rgba(4, 4, 4, 0.1) 4px 0px 10px;
      background-color: #ffffff;
    `};
  ${props =>
    props.color === 'third' &&
    css`
      border-radius: 0;
      padding-top: 10px;
      padding-bottom: 10px;
      width: 100%;
    `};
  ${props =>
    props.color === 'empty' &&
    css`
      background-color: transparent;
      outline: none;
      width: 100%;
      &:hover {
        background-color: transparent;
      }
    `};
`