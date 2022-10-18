import React, {FC} from 'react'

const Containers: FC<any> = ({children}) => {
  return <div className="flex flex-col gap-y-16 pt-12">{children}</div>
}
export default Containers
