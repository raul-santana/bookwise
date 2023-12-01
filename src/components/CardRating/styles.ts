import { styled } from '../../../stitches.config'

export const CardRatingContainer = styled('div', {
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
