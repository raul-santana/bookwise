import StarRating from '@/components/StarRating'
import TitlePage from '../../components/TitlePaage'
import {
  CardUserRecentRating,
  ContentContainer,
  HomeContainer,
  LatestRatings,
  PopularBooksContainer,
  RecentAvaliationsContainer,
  UserRecentRatingContainer,
  UserRecentRatingInfoBook,
} from './styles'
import CardRating from '@/components/CardRating'
import TextLink from '@/components/TextLink'
import { prismaClient } from '@/lib/prisma'
import { ChartLineUp, ArrowRight } from '@phosphor-icons/react/dist/ssr'
import Image from 'next/image'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { dateRelativeToNow } from '@/utils/get-formatted-date'

export default async function Home() {
  const session = await getServerSession(authOptions)

  const userId = session?.user.id

  const ratings = await prismaClient.rating.findMany({
    include: {
      user: true,
      book: true,
    },
  })

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
    <HomeContainer>
      <TitlePage text="Início" icon={<ChartLineUp size={32} />} />

      <ContentContainer>
        <UserRecentRatingContainer>
          <header>
            <p>Sua última leitura</p>
            <TextLink
              url="/"
              text="Ver todas"
              icon={<ArrowRight size={16} />}
            />
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
                <span>
                  {dateRelativeToNow(userMoreRecentRating!.created_at!)}
                </span>
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

        <RecentAvaliationsContainer>
          <p>Avaliações mais recentes</p>
          {/* <p>{raitings[0].user.name}</p> */}

          <LatestRatings>
            {ratings.map((rating) => (
              <CardRating rating={rating} key={rating.id} />
            ))}
          </LatestRatings>
        </RecentAvaliationsContainer>
        <PopularBooksContainer></PopularBooksContainer>
      </ContentContainer>
    </HomeContainer>
  )
}
