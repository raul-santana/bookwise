import TitlePage from '../../components/TitlePaage'
import {
  BookInfo,
  CardRating,
  ContentContainer,
  HomeContainer,
  InfoBookContainer,
  InfoProfile,
  LatestRatings,
  PopularBooksContainer,
  RecentAvaliationsContainer,
} from './styles'
import { Avatar } from '@/components/Avatar'
import StarRating from '@/components/StarRating'
import { prismaClient } from '@/lib/prisma'
import { ChartLineUp } from '@phosphor-icons/react/dist/ssr'

import Image from 'next/image'

export default async function Home() {
  const raitings = await prismaClient.rating.findMany({
    include: {
      user: true,
      book: true,
    },
  })

  console.log('Aqui:: ' + raitings)

  return (
    <HomeContainer>
      <TitlePage text="Início" icon={<ChartLineUp size={32} />} />

      <ContentContainer>
        <RecentAvaliationsContainer>
          <p>Avaliações mais recentes</p>
          {/* <p>{raitings[0].user.name}</p> */}

          <LatestRatings>
            {raitings.map((raiting) => (
              <CardRating key={raiting.id}>
                <header>
                  <InfoProfile>
                    {/* {raiting.user.image && (
                      // <Avatar
                      //   src={raiting.user.image ? raiting.user.image : ''}
                      //   alt="user image"
                      // />
                    )} */}
                    <div>
                      <p>{raiting.user.name}</p>
                      <span>Hoje</span>
                    </div>
                  </InfoProfile>
                  <div>
                    <StarRating />
                  </div>
                </header>

                <InfoBookContainer>
                  {/* <Image
                    width={108}
                    height={152}
                    alt="book"
                    src={raiting.book.cover_url}
                    style={{
                      height: 'auto',
                      width: 'auto',
                      maxWidth: '6.75rem',
                    }}
                  /> */}
                  <BookInfo>
                    <header>
                      <b>{raiting.book.name}</b>
                      <span>J.R.R Tolkien</span>
                    </header>
                    <div>
                      <p>
                        Semper et sapien proin vitae nisi. Feugiat neque integer
                        donec et aenean posuere amet ultrices. Cras fermentum id
                        pulvinar varius leo a in. Amet libero pharetra nunc
                        elementum fringilla velit ipsum. Sed vulputate massa
                        velit nibh...
                      </p>
                    </div>
                  </BookInfo>
                </InfoBookContainer>
              </CardRating>
            ))}

            <CardRating>
              <header>
                <InfoProfile>
                  {/* <Avatar /> */}
                  <div>
                    <p>Jaxson Dias</p>
                    <span>Hoje</span>
                  </div>
                </InfoProfile>
                <div>
                  <StarRating />
                </div>
              </header>

              <InfoBookContainer>
                <Image
                  width={108}
                  height={152}
                  alt="book"
                  src={'/o-hobbit.png'}
                  style={{ height: 'auto', width: 'auto', maxWidth: '6.75rem' }}
                />
                <BookInfo>
                  <header>
                    <b>O Hobbit</b>
                    <span>J.R.R Tolkien</span>
                  </header>
                  <div>
                    <p>
                      Semper et sapien proin vitae nisi. Feugiat neque integer
                      donec et aenean posuere amet ultrices. Cras fermentum id
                      pulvinar varius leo a in. Amet libero pharetra nunc
                      elementum fringilla velit ipsum. Sed vulputate massa velit
                      nibh...
                    </p>
                  </div>
                </BookInfo>
              </InfoBookContainer>
            </CardRating>
          </LatestRatings>
        </RecentAvaliationsContainer>
        <PopularBooksContainer></PopularBooksContainer>
      </ContentContainer>
    </HomeContainer>
  )
}
