import { styled } from '../../../stitches.config'

export const Container = styled('section', {
  height: '100vh',
  width: '100vw',

  display: 'flex',
  justifyContent: 'space-between',
})

export const ImageArea = styled('div', {
  width: '41.5rem',
  height: '100%',
  background: 'url(/bookwise-cover.svg) no-repeat center',
  backgroundSize: 'cover',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 10,
})

export const LoginArea = styled('div', {
  padding: '0 1rem',

  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',

  p: {
    color: '$gray200',
  },
})

export const LoginTypes = styled('div', {
  marginTop: '2.5rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
})

export const LoginButton = styled('button', {
  display: 'flex',
  width: '23.25rem',
  padding: '1.25rem 1.5rem',
  alignItems: 'center',
  gap: '1.25rem',
  borderRadius: '0.5rem',
  backgroundColor: '$gray600',
})
