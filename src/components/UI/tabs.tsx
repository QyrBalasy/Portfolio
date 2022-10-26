import React, {FC} from 'react'
import styled from 'styled-components'

const TabWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 36px;
`

type TabsT = {
  id?: string | number
  label?: string | number
}

type TabsProps = {
  className?: string
  tab?: TabsT[]
}

const Tabs: FC<TabsProps> = ({className, tab}) => {
  
  return (
    <TabWrapper>
      {tab && tab.map((tab)=>{
        return (
          <div key={tab.id}>
            {tab.label}
          </div>
        )
      })}
    </TabWrapper>
  )
}
export default Tabs
