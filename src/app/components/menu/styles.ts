import { styled } from '../../../../stitches.config'

export const MenuContainer = styled('aside', {
  height: '100vh',
  maxWidth: '14.5rem',

  padding: '1rem',

  backgroundColor: 'blue',
})

export const MenuCover = styled('div', {
  height: '100%',
  width: '100%',

  padding: '2.75rem 3.25rem ',

  background: "$gray700 url('/sidebar-bg.png') no-repeat top",
  backgroundSize: 'cover',
  borderRadius: 12,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
})
