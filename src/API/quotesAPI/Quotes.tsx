import axios from 'axios'
import React, { FC, useEffect, useState } from 'react'
import {QuoteLeftIcon} from '../../assets/icons/Icons'
import { Button } from '../../components/UI/buttons'

type QuoteType = {
  text?: string
  author?: string
}

const Quotes: FC<QuoteType> = () => {
  const [quote, setQuote] = useState<any>('')
  const [error, setError] = useState('')

  useEffect(() => {
    getRandomQuote()
  }, [])
  async function getRandomQuote() {
    try {
      setError('')
      const quotesData = await axios.get('https://type.fit/api/quotes')
      const rand: number = Math.floor(Math.random() * quotesData.data.length)
      setQuote(quotesData.data[rand])
      console.log(quotesData)
    } catch (error: any) {
      setError(error.message)
    }
  }
  return (
    <div className="flex justify-between gap-x-3">
      <div className="basis-1/12 self-center">
        <Button color="empty" onClick={() => getRandomQuote()}>
          <QuoteLeftIcon className="h-5 w-5 opacity-50 dark:fill-white" color=" fill-lightDark" />
        </Button>
      </div>
      <div className="basis-11/12 text-right">
        <h4 className="text-headlineLG dark:text-whiteFont ">{quote.text}</h4>
        <hr className="border-0 my-1 h-0.5 bg-gradient-to-l from-yellow" />
        <p className="text-default text-paragraphFont"> {quote.author}</p>
      </div>
    </div>
  )
}
export default Quotes