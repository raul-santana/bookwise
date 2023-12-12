import TitlePage from '../../components/TitlePaage'
import {
  ContentContainer,
  HomeContainer,
  LatestRatings,
  PopularBooksContainer,
  RecentAvaliationsContainer,
} from './styles'
import CardRating from '@/components/CardRating'
import { prismaClient } from '@/lib/prisma'
import { ChartLineUp } from '@phosphor-icons/react/dist/ssr'
import UserRecentRating from './components/UserRecenteRating'

import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'

export default async function Home() {
  const session = await getServerSession(authOptions)

  const ratings = await prismaClient.rating.findMany({
    include: {
      user: true,
      book: true,
    },
  })

  return (
    <HomeContainer>
      <TitlePage text="Início" icon={<ChartLineUp size={32} />} />

      <ContentContainer>
        {session && <UserRecentRating userId={session.user.id} />}

        <RecentAvaliationsContainer>
          <p>Avaliações mais recentes</p>

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
