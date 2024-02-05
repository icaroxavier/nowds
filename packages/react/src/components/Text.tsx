import styled from 'styled-components'

export const Text = styled.span`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.body};
`

export type TextProps = React.ComponentProps<typeof Text>

Text.displayName = 'Text'
