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

export default async function Home() {
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
