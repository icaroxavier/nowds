import styled from 'styled-components'

export const Text = styled.span`
  color: ${({ theme }) => theme.colors.text};
  font-family: 'Space Grotesk', sans-serif;
`

export type TextProps = React.ComponentProps<typeof Text>

Text.displayName = 'Text'
