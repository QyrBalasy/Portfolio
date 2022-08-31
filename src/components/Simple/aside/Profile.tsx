import React from 'react'

const Profile = () => {
  return (
    <div className='mb-6'>
      <div className="xs:h-[150px] bg-stone-400 mx-auto mt-12 mb-7 w-[150px] overflow-hidden rounded-[50%] text-center">
        <img src="http://dummyimage.com/150x150/c0c0c0" />
      </div>
      <h4 className="mb-4 text-center text-lg font-medium text-white">Rayan Adlardard</h4>
      <p className="text-mainTextColor mb-4 text-center text-base font-normal text-paragraphFont">Font-end Developer</p>
      <ul className="flex justify-between">
        <li className="h-6 w-6 rounded-[50%] bg-yellow text-center">1</li>
        <li className="h-6 w-6 rounded-[50%] bg-yellow text-center">1</li>
        <li className="h-6 w-6 rounded-[50%] bg-yellow text-center">1</li>
        <li className="h-6 w-6 rounded-[50%] bg-yellow text-center">1</li>
        <li className="h-6 w-6 rounded-[50%] bg-yellow text-center">1</li>
        <li className="h-6 w-6 rounded-[50%] bg-yellow text-center">1</li>
      </ul>
    </div>
  )
}
export default Profile