import { styled } from '../../../stitches.config'

export const CardBookContainer = styled('div', {
  padding: '1rem 1.25rem',
  display: 'flex',
  gap: '1.25rem',

  backgroundColor: '$gray700',
})

export const CardBookContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'start',

  h4: {
    fontSize: '$md',

    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    '-webkit-box-orient': 'vertical',
    '-webkit-line-clamp': 2,
  },

  p: {
    fontSize: '$sm',
    color: '$gray100',
    opacity: '0.6',
  },
})
