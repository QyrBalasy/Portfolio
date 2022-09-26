import React from 'react'
import { Badge } from '../components/UI/text'

const WorkHistory = () => {
  return (
    <section>
      <div className="flex flex-col gap-y-12 ">
        <div className="mx-auto w-96 text-center ">
          <h2 className="text-headline3XL">Work History</h2>
          <p className="mt-6">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim
            velit mollit. lorem ipsum
          </p>
        </div>
        <WorkHistoryList />
      </div>
    </section>
  )
}
export default WorkHistory


const WorkHistoryList = () => {
  return (
    <div className="flex flex-col gap-7 divide-y divide-whiteFont bg-darkView1 py-10 px-8">
      <div className="flex justify-between">
        <div className="basis-1/3">
          <h4 className="pb-6 text-headlineLG text-whiteFont">Lead Web Designer</h4>
          <span className="flex gap-5">
            <p>Student</p>
            <Badge>Jan 1016 - Dec 2021</Badge>
          </span>
        </div>
        <div className="basis-2/3">
          <h4 className="pb-6 text-headlineLG text-whiteFont">Certificate of web training</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet
            porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et
            pellentesque. Molestie risus enim neque eget dui.
          </p>
        </div>
      </div>
      <div className="flex justify-between ">
        <div className="basis-1/3">
          <h4 className="pb-6 text-headlineLG text-whiteFont">Junior Web Designer</h4>
          <span className="flex gap-5">
            <p>Student</p>
            <Badge>Jan 1016 - Dec 2021</Badge>
          </span>
        </div>
        <div className="basis-2/3">
          <h4 className="pb-6 text-headlineLG text-whiteFont">Certificate of web training</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet
            porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et
            pellentesque. Molestie risus enim neque eget dui.
          </p>
        </div>
      </div>
      <div className="flex justify-between ">
        <div className="basis-1/3">
          <h4 className="pb-6 text-headlineLG text-whiteFont">Senior Web Designer</h4>
          <span className="flex gap-5">
            <p>Student</p>
            <Badge>Jan 1016 - Dec 2021</Badge>
          </span>
        </div>
        <div className="basis-2/3">
          <h4 className="pb-6 text-headlineLG text-whiteFont">Certificate of web training</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet
            porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et
            pellentesque. Molestie risus enim neque eget dui.
          </p>
        </div>
      </div>
    </div>
  )
}
