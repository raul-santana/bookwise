import { styled } from '../../../../../stitches.config'

export const RecentAvaliationsContainer = styled('div', {
  width: '100%',

  '>p': {
    color: '$gray100',
    opacity: '0.6',
  },
})

export const LatestRatingsContainer = styled('div', {
  marginTop: '1rem',
  width: '100%',

  display: 'flex',
  flexDirection: 'column',
  gap: '0.75rem',
})
