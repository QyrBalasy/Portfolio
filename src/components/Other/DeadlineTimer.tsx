import React, {FC, useEffect, useState} from 'react'
import styled from 'styled-components'

const TimerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 5px;
`

const CounterStyled = styled.span`
  min-width: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 14px;
  font-weight: 400;
  line-height: '16px';
  background-color: white;
  border-radius: 5px;
  padding: 5px;
`

type DeadlineTimerP = {
  finalDate: string
}

type StateT = {
  days: number
  hours: number
  minuts: number
  seconds: number
}

const DeadlineTimer: FC<DeadlineTimerP> = props => {
  const [state, setState] = useState<StateT>({
    days: 0,
    hours: 0,
    minuts: 0,
    seconds: 0,
  })
  useEffect(() => {
    setInterval(() => {
      const then = new Date(props.finalDate).getTime()
      const now = new Date().getTime()
      const remaining = then - now
      setState({
        days: Math.floor(remaining / (1000 * 60 * 60 * 24)),
        hours: Math.floor((remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minuts: Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((remaining % (1000 * 60)) / 1000),
      })
    }, 1000)
  }, [props.finalDate])
  console.log(props.finalDate)

  return (
    <TimerWrapper>
      <CounterStyled>
        {state.days}
        <p>дней</p>
      </CounterStyled>
      <CounterStyled>
        {state.hours}
        <p>часов</p>
      </CounterStyled>
      <CounterStyled>
        {state.minuts}
        <p>мин.</p>
      </CounterStyled>
      <CounterStyled>
        {state.seconds}
        <p>сек.</p>
      </CounterStyled>
    </TimerWrapper>
  )
}
export default DeadlineTimer
