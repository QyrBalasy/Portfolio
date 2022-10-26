import React from "react";
import { StarIcon } from "../../../../assets/icons/Icons";

// TODO: Нужно полностью переделать рейтинг, в идеале нужно сделать так чтобы у клиента была возможность добавить свой рейтинг.


const StarRecomendations = () => {
  return (
    <div className="flex flex-row">
      {[...Array(5)].map((star, index) => {
        return <StarIcon className="w-5" key={index} color="#FFB400" />
      })}
    </div>
  )
}
export default StarRecomendations