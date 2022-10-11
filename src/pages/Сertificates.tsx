import React from "react";
import { Button } from "../components/UI/buttons";
import Cards from "../components/UI/cards";

const Certificates = () => {
  return (
    <section>
      <div className="flex flex-col gap-y-12 ">
        <div className="mx-auto w-96 text-center ">
          <h2 className="text-headline3XL dark:text-whiteFont">Сертификаты</h2>
          <p className="mt-6">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim
            velit mollit. lorem ipsum
          </p>
        </div>
        <div className="grid grid-cols-3 gap-5">
          <Cards className="bg-white dark:bg-darkView1">
            <div>
              <p>image is here</p>
              <h4 className="text-headlineLG dark:text-whiteFont">title</h4>
            </div>
            <div>
              <p className="text-lightDark dark:text-whiteFont">description</p>
              <Button color="secondary">перейти</Button>
            </div>
          </Cards>
          <Cards className="bg-white dark:bg-darkView1">
            <div>
              <p>image is here</p>
              <h4 className="text-headlineLG dark:text-whiteFont">title</h4>
            </div>
            <div>
              <p className="text-lightDark dark:text-whiteFont">description</p>
              <Button color="secondary">перейти</Button>
            </div>
          </Cards>
          <Cards className="bg-white dark:bg-darkView1">
            <div>
              <p>image is here</p>
              <h4 className="text-headlineLG dark:text-whiteFont">title</h4>
            </div>
            <div>
              <p className="text-lightDark dark:text-whiteFont">description</p>
              <Button color="secondary">перейти</Button>
            </div>
          </Cards>
        </div>
      </div>
    </section>
  )
}
export default Certificates