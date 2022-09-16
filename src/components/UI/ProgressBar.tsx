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

type ProgressBarDataType = {
  Title: string
  completed: string
  fill: string
}

const ProgressBar: FC<ProgressBarDataType> = ({Title, completed, fill}) => {
  return (
    <>
      <li>
        <p className="float-left text-whiteFont">{Title}</p>
        <p className="text-right text-whiteFont">{completed}</p>
        <div className="mt-[5px] h-[9px] w-full rounded border border-yellow bg-lightDark p-[3px]">
          <ProgressbarStyled width={fill} />
        </div>
      </li>
    </>
  )
}

export default ProgressBar
