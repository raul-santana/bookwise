import { Nunito } from 'next/font/google'
import { globalCss } from '../../stitches.config'

const nunito = Nunito({ subsets: ['latin'] })

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  html: {
    fontFamily: nunito.style.fontFamily,
  },

  body: {
    backgroundColor: '$gray800',
    color: '$gray100',
    '-webkit-font-smoothing': 'antialiased',
  },

  a: {
    color: 'inherit',
  },

  button: {
    cursor: 'pointer',
  },

  'button, input, textarea': {
    fontFamily: 'inherit',
  },
})
