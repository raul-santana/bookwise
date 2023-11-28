import { styled } from '../../../stitches.config'

export const TitleContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '0.75rem',

  svg: {
    color: '$green100',
  },

  h1: {
    color: '$gray100',
    fontWeight: 700,
  },
})
