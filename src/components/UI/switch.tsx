import styled from 'styled-components'

export const ToggleSwitch = styled.input.attrs({type: 'checkbox'})`
  position: relative;
  padding: 0;
  width: 40px;
  height: 24px;
  background-color: #005da1;
  border-radius: 12px;
  border: 1px solid #e8ecee;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  transition: 0.3s;
  cursor: pointer;
  &:disabled {
    background-color: #e8ecee;
  }
  &::after {
    content: '';
    position: absolute;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background-color: #ffffff;
    box-shadow: 0px 1px 1px #000000;
    top: 2px;
    left: 1px;
    transition: all 0.5s;
  }
  &:checked {
    background-color: #e8ecee;
  }
  &:checked::after {
    left: 19px;
  }
  &:disabled::after {
    background-color: #486377;
  }
`
