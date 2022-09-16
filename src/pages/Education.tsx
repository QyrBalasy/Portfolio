import React from "react";
import { Badge } from "../components/UI/text";

const Education = () => {
  return (
    <section>
      <div className="flex flex-col gap-y-12 ">
        <div className="mx-auto w-96 text-center ">
          <h2 className="text-headline3XL">Education</h2>
          <p className="mt-6">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim
            velit mollit. lorem ipsum
          </p>
        </div>
        <EducationList />
      </div>
    </section>
  )
}
export default Education

const EducationList = () => {
  return (
    <div className="bg-darkView1 flex flex-col gap-7 divide-y divide-whiteFont py-10 px-8">
      <div className="flex justify-between">
        <div className="basis-1/3">
          <h4 className="pb-6 text-headlineLG text-whiteFont">University of Toronto</h4>
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
          <h4 className="pb-6 text-headlineLG text-whiteFont">University of Toronto</h4>
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
          <h4 className="pb-6 text-headlineLG text-whiteFont">University of Toronto</h4>
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