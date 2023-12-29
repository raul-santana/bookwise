import { styled } from '../../../../../stitches.config'

export const PopularBooksContainer = styled('div', {
  maxWidth: '28.25rem',

  '>header': {
    marginBottom: '1.25rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

    '>p': {
      color: '$gray100',
      opacity: '0.6',
    },
  },
})

export const ListBooks = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.75rem',
})
