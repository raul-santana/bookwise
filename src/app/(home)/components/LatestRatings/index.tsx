import { LatestRatingsContainer, RecentAvaliationsContainer } from './style'
import CardRating from '@/components/CardRating'
import { prismaClient } from '@/lib/prisma'

async function LatestRatings() {
  const ratings = await prismaClient.rating.findMany({
    include: {
      user: true,
      book: true,
    },
  })

  return (
    <RecentAvaliationsContainer>
      <p>Avaliações mais recentes</p>

      <LatestRatingsContainer>
        {ratings.map((rating) => (
          <CardRating rating={rating} key={rating.id} />
        ))}
      </LatestRatingsContainer>
    </RecentAvaliationsContainer>
  )
}

export default LatestRatings
