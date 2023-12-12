import Image from 'next/image'
import {
  CardUserRecentRating,
  UserRecentRatingContainer,
  UserRecentRatingInfoBook,
} from './styles'
import StarRating from '@/components/StarRating'
import TextLink from '@/components/TextLink'
import { dateRelativeToNow } from '@/utils/get-formatted-date'
import { ArrowRight } from '@phosphor-icons/react/dist/ssr'

import { prismaClient } from '@/lib/prisma'

interface UserRecentRatingProps {
  userId: string | undefined
}

async function UserRecentRating({ userId }: UserRecentRatingProps) {
  //   const userId = session?.user.id

  const userMoreRecentRating = await prismaClient.rating.findFirst({
    where: {
      user_id: userId,
    },
    orderBy: {
      created_at: 'desc',
    },
    include: {
      book: true,
    },
  })

  return (
    <UserRecentRatingContainer>
      <header>
        <p>Sua última leitura</p>
        <TextLink url="/" text="Ver todas" icon={<ArrowRight size={16} />} />
      </header>

      <CardUserRecentRating>
        <Image
          width={108}
          height={152}
          alt="book"
          src={userMoreRecentRating!.book.cover_url!}
          style={{
            height: 'auto',
            width: 'auto',
            maxWidth: '6.75rem',
          }}
        />

        <UserRecentRatingInfoBook>
          <header>
            <span>{dateRelativeToNow(userMoreRecentRating!.created_at!)}</span>
            <StarRating ratings={[userMoreRecentRating!.rate!]} />
          </header>
          <div>
            <h3>{userMoreRecentRating?.book.name}</h3>
            <span> {userMoreRecentRating?.book.author} </span>
          </div>
          <p>{userMoreRecentRating?.description}</p>
        </UserRecentRatingInfoBook>
      </CardUserRecentRating>
    </UserRecentRatingContainer>
  )
}

export default UserRecentRating
