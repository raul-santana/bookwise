import { ReactNode } from 'react'
import { LinkContainer } from './styles'

interface TextLinkProps {
  url: string
  text: string
  icon: ReactNode
}

function TextLink({ url, text, icon }: TextLinkProps) {
  return (
    <LinkContainer href={url}>
      {text}
      {icon}
    </LinkContainer>
  )
}

export default TextLink
