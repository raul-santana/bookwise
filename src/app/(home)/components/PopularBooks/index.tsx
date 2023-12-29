import TextLink from '@/components/TextLink'
import { ListBooks, PopularBooksContainer } from './styles'

import { ArrowRight } from '@phosphor-icons/react/dist/ssr'
import CardBook from '@/components/CardBook'
import { prismaClient } from '@/lib/prisma'
import { Book } from '@prisma/client'

interface BooksWithRating extends Book {
  totalRatings: number
}

async function PopularBooks() {
  const popularBooks: BooksWithRating[] = await prismaClient.$queryRaw`
    select *,
      (select count(R.rate) from ratings R where R.book_id = B.id) as totalRatings
    from books B
    order by totalRatings desc
    limit 4
  `

  // console.log('popularbooks: ' + popularBooks)

  return (
    <PopularBooksContainer>
      <header>
        <p>Livros populares</p>
        <TextLink
          url="/explore"
          text="Ver todos"
          icon={<ArrowRight size={16} />}
        />
      </header>
      <ListBooks>
        {popularBooks.map((book) => (
          <CardBook key={book.id} book={book} />
        ))}
      </ListBooks>
    </PopularBooksContainer>
  )
}

export default PopularBooks
