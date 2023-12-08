'use client'

import { Star } from '@phosphor-icons/react'
import { StarRatingContainer } from './styles'

interface StarRatingProps {
  ratings: number[]
}

export default function StarRating({ ratings }: StarRatingProps) {
  /*
    Passo 1 - Pegar o quantidade de avaliações e multiplicar por 5

    Passo 2 - somar todas as avaliações

    Passo 3 - pegar o total de todas as avaliações, dividir pela quantidade de avaliações e multiplicar por 100. (isso nos trará a porcentagem)
    
    Passo 4 - Porcentagem: 20%(1), 40%(2), 60%(3), 80%(4), 100%(5)
*/
  if (!ratings) {
    return
  }

  const quantityRatings = ratings.length
  const totalRatings = ratings.reduce((acc, currentValue) => {
    return acc + currentValue
  }, 0)

  const percentRating = (totalRatings / (quantityRatings * 5)) * 100

  return (
    <StarRatingContainer>
      <Star size={16} weight={percentRating >= 20 ? 'fill' : 'regular'} />
      <Star size={16} weight={percentRating >= 40 ? 'fill' : 'regular'} />
      <Star size={16} weight={percentRating >= 60 ? 'fill' : 'regular'} />
      <Star size={16} weight={percentRating >= 80 ? 'fill' : 'regular'} />
      <Star size={16} weight={percentRating === 100 ? 'fill' : 'regular'} />
    </StarRatingContainer>
  )
}
