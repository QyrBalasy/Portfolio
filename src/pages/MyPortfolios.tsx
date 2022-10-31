import React from 'react'
import Tabs from '../components/UI/tabs'

const MyPortfolios = () => {
  const TabData = [
    {
      id: 1,
      label: '121212',
    },
    {
      id: 2,
      label: 'sdfsdf',
    },
  ]
  return (
    <section>
      <div className="flex flex-col gap-y-12 ">
        <div className="mx-auto w-96 text-center ">
          <h2 className="text-headline3XL dark:text-whiteFont">Портфолио</h2>
          {/* <p className="mt-6">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim
            velit mollit. lorem ipsum
          </p> */}
        </div>
        {/* {TabData.map((tab1, index)=> {
          return <Tabs key={index} tab={tab1}/>
        })} */}
        
      </div>
    </section>
  )
}
export default MyPortfolios
