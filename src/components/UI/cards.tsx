import {FC, ReactNode} from 'react'
import styled from 'styled-components'

const CardsWrapper = styled.div`
  cursor: pointer;
  min-height: 225px;
  overflow: hidden;
  position: relative;
  & div:nth-child(1) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    justify-self: center;
    height: 100%;
    gap: 16px;
    text-align: center;
    transition: 0.5s;
  }
  &:hover div:nth-child(1) {
    opacity: 0.5;
    transform: translateX(30%); /*100%*/
  }
  & div:nth-child(2) {
    position: absolute;
    top: 0;
    left: 0;
    width: 70%; /*100%*/
    height: 100%;
    background: #ffc107;
    transition: 0.5s;
    transform-origin: left;
    transform: perspective(2000px) rotateY(-90deg);
    display: flex;
    row-gap: 25px;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
  }
  &:hover div:nth-child(2) {
    transform: perspective(2000px) rotateY(0deg);
  }
`
type CardsProps = {
  children: ReactNode
  className: string
}

const Cards: FC<CardsProps> = ({children, className}) => {
  return <CardsWrapper className={className}>{children}</CardsWrapper>
}

export default Cards
