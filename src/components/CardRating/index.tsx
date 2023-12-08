import Image from 'next/image'
import StarRating from '../StarRating'
import { Avatar } from '@/components/Avatar'

import {
  BookInfo,
  CardRatingContainer,
  InfoBookContainer,
  InfoProfile,
} from './styles'
import { getDateWithTodayOrYesterday } from '@/utils/get-formatted-date'
import { prismaClient } from '@/lib/prisma'

interface CardRatingProps {
  rating: {
    id: string
    description: string
    created_at: Date

    book: {
      id: string
      name: string
      author: string
      summary: string
      cover_url: string
      total_pages: number
      created_at: Date
    }

    user: {
      id: string
      name: string | null
      email: string | null
      emailVerified: Date | null
      image: string | null
    }
  }
}

async function CardRating({ rating }: CardRatingProps) {
  const infoRatings = await prismaClient.rating.findMany({
    where: {
      book_id: rating.book.id,
    },
  })

  const ratingDate = getDateWithTodayOrYesterday(rating.created_at)

  const ratings = infoRatings.reduce((acc: number[], currentValue) => {
    return acc.concat(currentValue.rate)
  }, [])

  // const quantityRatings = infoRatings.length
  // const totalRatings = infoRatings.reduce((acc, rating) => {
  //   return acc + rating.rate
  // }, 0)

  // const percentRating = (totalRatings / (quantityRatings * 5)) * 100

  return (
    <CardRatingContainer key={rating.id}>
      <header>
        <InfoProfile>
          {rating.user.image && (
            <Avatar
              src={rating.user.image ? rating.user.image : ''}
              alt="user image"
            />
          )}
          <div>
            <p>{rating.user.name}</p>
            <span>{ratingDate}</span>
          </div>
        </InfoProfile>
        <div>
          <StarRating ratings={ratings} />
        </div>
      </header>

      <InfoBookContainer>
        <Image
          width={108}
          height={152}
          alt="book"
          src={rating.book.cover_url}
          style={{
            height: 'auto',
            width: 'auto',
            maxWidth: '6.75rem',
          }}
        />
        <BookInfo>
          <header>
            <b>{rating.book.name}</b>
            <span>J.R.R Tolkien</span>
          </header>
          <div>
            <p>{rating.description}</p>
          </div>
        </BookInfo>
      </InfoBookContainer>
    </CardRatingContainer>
  )
}

export default CardRating
