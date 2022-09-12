import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../components/UI/buttons'


const Error404:FC = () => {
  const history = useNavigate()
   const handleClick = () => {
    history('/', {replace: true});
  };
  return (
    <section>
      <div className="container">
        <h2>Sorry i can't found this page!</h2>
        <Button onClick={handleClick}>Go back</Button>
      </div>
    </section>
  )
} 
export default Error404
