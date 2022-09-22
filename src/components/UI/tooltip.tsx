import React, { FC, ReactNode } from "react";
import styled from 'styled-components'

const TooltipStyled = styled.div`
  position: relative;
  &:hover > span {
    visibility: visible;
  }
  & > span {
    position: absolute;
    background-color: #fafafa;
    top: -16px;
    left: 50%;
    transform: translateX(-50%) translateY(-100%);
    padding: 3px 10px;
    border-radius: 5px;
    text-align: center;
    min-width: max-content;
    visibility: hidden;
  }
  & > span:before {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    left: calc(50% - 8px);
    top: 100%;
    border-top: 10px solid #fafafa;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 1px solid transparent;
  }
  & > span > p {
    font-size: 12px;
    font-weight: 500;
    line-height: 15px;
    color: #2b2b2b;
  }
`

type TooltipProps = {
  content: string
  children?: ReactNode

}

const Tooltip:FC<TooltipProps> = ({content, children}) => {
  return (
    <TooltipStyled>
      <span>
        <p>{content}</p>
      </span>
      {children}
    </TooltipStyled>
  )
}
export default Tooltip