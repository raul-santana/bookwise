import { styled } from '../../../../../stitches.config'

export const UserRecentRatingContainer = styled('div', {
  width: '100%',

  header: {
    display: 'flex',
    justifyContent: 'space-between',

    '>p': {
      color: '$gray100',
      opacity: '0.6',
    },
  },
})

export const CardUserRecentRating = styled('div', {
  marginTop: '1.25rem',
  padding: '1.5rem',

  width: '100%',

  backgroundColor: '$gray600',

  display: 'flex',
  gap: '1.5rem',
})

export const UserRecentRatingInfoBook = styled('div', {
  flex: 1,

  maxHeight: '9.5rem',

  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

    span: {
      fontSize: '$sm',
      color: '$gray300',
      opacity: '0.7',
    },
  },

  div: {
    marginTop: '0.75rem',

    h3: {
      fontSize: '$md',
    },
    span: {
      fontSize: '$sm',
      color: '$gray400',
    },
  },

  p: {
    marginTop: '1.5rem',

    fontSize: '$sm',
    color: '$gray300',

    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    '-webkit-box-orient': 'vertical',
    '-webkit-line-clamp': 2,
  },
})
