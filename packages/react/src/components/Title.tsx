import styled from 'styled-components'

export const Text = styled.h1`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.title};
`

export type TextProps = React.ComponentProps<typeof Text>

Text.displayName = 'Text'
