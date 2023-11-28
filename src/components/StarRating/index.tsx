'use client'

import { Star } from '@phosphor-icons/react'
import { StarRatingContainer } from './styles'

export default function StarRating() {
  /*
    Passo 1 - Pegar o total de avaliações e multiplicar por 5

    Passo 2 - somar todas as avaliações

    Passo 3 - pegar o total de todas as avaliações, dividir pela quantidade de avaliações e multiplicar por 100. (isso nos trará a porcentagem)
    
    Passo 4 - Porcentagem: 20%(1), 40%(2), 60%(3), 80%(4), 100%(5)
*/

  return (
    <StarRatingContainer>
      <Star size={16} weight={'fill'} />
      <Star size={16} weight={'fill'} />
      <Star size={16} weight={'regular'} />
      <Star size={16} />
      <Star size={16} />
    </StarRatingContainer>
  )
}
