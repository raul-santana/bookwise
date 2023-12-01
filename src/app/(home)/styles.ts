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

// ********* Popular Books *********

export const PopularBooksContainer = styled('div', {
  width: '20.25rem',
})
