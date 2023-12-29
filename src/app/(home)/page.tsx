import TitlePage from '../../components/TitlePaage'
import {
  ContentContainer,
  HomeContainer,
  RecentsRatingsContainer,
} from './styles'
import { ChartLineUp } from '@phosphor-icons/react/dist/ssr'
import UserRecentRating from './components/UserRecenteRating'

import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import LatestRatings from './components/LatestRatings'
import PopularBooks from './components/PopularBooks'

export default async function Home() {
  const session = await getServerSession(authOptions)

  return (
    <HomeContainer>
      <TitlePage text="Início" icon={<ChartLineUp size={32} />} />

      <ContentContainer>
        <RecentsRatingsContainer>
          {session && <UserRecentRating userId={session.user.id} />}

          <LatestRatings />
        </RecentsRatingsContainer>

        <PopularBooks />
      </ContentContainer>
    </HomeContainer>
  )
}
