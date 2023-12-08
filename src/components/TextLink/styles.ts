import { styled } from '../../../stitches.config'
import Link from 'next/link'

export const LinkContainer = styled(Link, {
  textDecoration: 'none',

  fontSize: '0.875rem',
  color: '$purple100',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '0.2rem',
})
