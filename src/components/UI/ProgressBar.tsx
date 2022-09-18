import React, {FC} from 'react'
import styled from 'styled-components'

type ProgressbarStyledType = {
  width: string
}
const ProgressbarStyled = styled.div`
  border-radius: 4px;
  height: 2px;
  background-color: #ffb400;
  width: ${(p: ProgressbarStyledType) => p.width}%;
`

export type ProgressBarDataType = {
  Title: string
  Content: {
    description: string
    completed: string
    fill: string
  }[]
}

const ProgressBar: FC<{Item:ProgressBarDataType}> = ({Item}) => {
  return (
    <ul className="mt-6">
      <h4 className="mb-4 text-headlineLG">{Item.Title}</h4>
      {Item.Content.map((elem, index) => (
        <li key={index}>
          <p className="float-left text-whiteFont">{elem.description}</p>
          <p className="text-right text-whiteFont">{elem.completed}%</p>
          <div className="mt-[5px] h-[9px] w-full rounded border border-solid border-yellow p-[3px]">
            <ProgressbarStyled width={elem.fill} />
          </div>
        </li>
      ))}
    </ul>
  )
}

export default ProgressBar
