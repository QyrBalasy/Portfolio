import styled, { css } from "styled-components";

type tooltipProps ={
  position: 'top' | 'right' | 'bottom' | 'left'
}

export const Tooltip = styled.div<tooltipProps>`
  padding: 6px 15px;
  background-color: #fff;
  font-size: 12px;
  line-height: 15px;
  font-weight: 500;
  color: #2b2b2b;
  ${props =>
    props.position === 'top' &&
    css`
      position: absolute;
      top: 0;
    `};
  ${props =>
    props.position === 'right' &&
    css`
      position: absolute;
      right: 0;
    `};
  ${props =>
    props.position === 'bottom' &&
    css`
      position: absolute;
      bottom: 0;
    `};
  ${props =>
    props.position === 'left' &&
    css`
      position: absolute;
      left: 0;
    `};
`