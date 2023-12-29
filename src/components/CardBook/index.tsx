import Image from 'next/image'
import { CardBookContainer, CardBookContent } from './styles'
import StarRating from '../StarRating'
import { Book } from '@prisma/client'
import { prismaClient } from '@/lib/prisma'

interface CardBookProps {
  book: Book
}

async function CardBook({ book }: CardBookProps) {
  const infoRatings = await prismaClient.rating.findMany({
    where: {
      book_id: book.id,
    },
  })

  const ratings = infoRatings.reduce((acc: number[], currentValue) => {
    return acc.concat(currentValue.rate)
  }, [])
  return (
    <CardBookContainer key={book.id}>
      <Image
        width={108}
        height={152}
        alt="book"
        //   src={userMoreRecentRating!.book.cover_url!}
        src={book.cover_url}
        style={{
          height: 'auto',
          width: 'auto',
          maxWidth: '4rem',
        }}
      />
      <CardBookContent>
        <header>
          <h4> {book.name} </h4>
          <p> {book.author} </p>
        </header>

        <StarRating ratings={ratings} />
      </CardBookContent>
    </CardBookContainer>
  )
}

export default CardBook
