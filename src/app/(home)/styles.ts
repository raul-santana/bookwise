import { styled } from '../../../stitches.config'

export const HomeContainer = styled('section', {
  flex: 1,
  marginTop: '4.5rem',
  padding: '0 6rem',
})

export const ContentContainer = styled('section', {
  width: '100%',

  marginTop: '2.5rem',

  display: 'flex',
  gap: '4rem',
})

export const RecentAvaliationsContainer = styled('div', {
  width: '100%',

  '>p': {
    color: '$gray100',
    opacity: '0.6',
  },
})

export const LatestRatings = styled('div', {
  marginTop: '1rem',
  width: '100%',

  display: 'flex',
  flexDirection: 'column',
  gap: '0.75rem',
})

export const CardRating = styled('div', {
  padding: '1.5rem',

  width: '100%',

  backgroundColor: '$gray700',

  header: {
    display: 'flex',
    justifyContent: 'space-between',
  },
})

export const InfoProfile = styled('div', {
  display: 'flex',
  gap: '1rem',

  span: {
    fontSize: '0.875rem',
    color: '$gray400',
  },
})

export const InfoBookContainer = styled('div', {
  marginTop: '2rem',

  maxHeight: '9.5rem',

  display: 'flex',
  gap: '1.25rem',
})

export const BookInfo = styled('div', {
  header: {
    display: 'flex',
    flexDirection: 'column',

    span: {
      fontSize: '0.875rem',
      color: '$gray400',
    },
  },

  div: {
    marginTop: '1.25rem',
    p: {
      color: '$gray400',
      fontSize: '0.875rem',
      fontWeight: 700,
    },
  },
})

// ********* Popular Books *********

export const PopularBooksContainer = styled('div', {
  width: '20.25rem',
})
