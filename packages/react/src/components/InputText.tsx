import styled from 'styled-components'

export const InputText = styled.input`
  color: ${({ theme }) => theme.colors.primary};
  font-family: 'Space Grotesk', sans-serif;
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-style: normal;
  font-weight: 400;
  line-height: ${({ theme }) => theme.lineHeights.input};
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.nowLight};
  font-family: 'Space Grotesk', sans-serif;
  &::placeholder {
    color: ${({ theme }) => theme.colors.nowLight};
  }
  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
  }
  transition-property: color, background-color, border-color,
    text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
`

type InputTextProps = React.ComponentProps<typeof InputText>
export type { InputTextProps }
