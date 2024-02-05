import styled from 'styled-components'

export const Text = styled.h1`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.title};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  line-height: ${({ theme }) => theme.lineHeights.default};
  font-weight: ${({ theme }) => theme.fontWeights.normal};
`

export type TextProps = React.ComponentProps<typeof Text>

Text.displayName = 'Text'
