import React from "react";
import { JavaScriptIcon, ReactIcon, TypeScriptIcon } from "../assets/icons/Icons";
import DeadlineTimer from "../components/Other/DeadlineTimer";
import { Button } from "../components/UI/buttons";
import Cards from "../components/UI/cards";

const Certificates = () => {
  return (
    <section>
      <div className="flex flex-col gap-y-12 ">
        <div className="mx-auto w-96 text-center ">
          <h2 className="text-headline3XL dark:text-whiteFont">Сертификаты</h2>
        </div>
        <div className="grid grid-cols-3 gap-5">
          <Cards className="bg-white dark:bg-darkView1">
            <div>
              <ReactIcon className="w-12" />
              <h4 className="text-headlineLG dark:text-whiteFont">React+JS</h4>
            </div>
            <div>
              <p className="text-lightDark dark:text-whiteFont">React, Hooks, Redux</p>
              <Button color="secondary" disabled={true}>
                перейти
              </Button>
              <DeadlineTimer finalDate="2022-12-20T00:00:00" />
            </div>
          </Cards>
          <Cards className="bg-white dark:bg-darkView1">
            <div>
              <JavaScriptIcon className="w-12" />
              <h4 className="text-headlineLG dark:text-whiteFont">Advansed JS</h4>
            </div>
            <div>
              <p className="text-lightDark dark:text-whiteFont">Testing, OOP, Module Bundlers</p>
              <Button color="secondary" disabled={true}>
                перейти
              </Button>
              <DeadlineTimer finalDate="2023-01-01T00:00:00" />
            </div>
          </Cards>
          <Cards className="bg-white dark:bg-darkView1">
            <div>
              <TypeScriptIcon className="w-12" />
              <h4 className="text-headlineLG dark:text-whiteFont">TypeScript</h4>
            </div>
            <div>
              <p className="text-lightDark dark:text-whiteFont">TypeScript basics</p>
              <Button color="secondary" disabled={true}>
                перейти
              </Button>
              <DeadlineTimer finalDate="2023-02-01T00:00:00" />
            </div>
          </Cards>
        </div>
      </div>
    </section>
  )
}
export default Certificates