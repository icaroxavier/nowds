import styled from 'styled-components'

export const InputText = styled.input`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  line-height: ${({ theme }) => theme.lineHeights.input};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  border: 1px solid ${({ theme }) => theme.colors.nowLight};
  &::placeholder {
    color: ${({ theme }) => theme.colors.nowLight};
  }
  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
    outline: none;
  }
  transition-property: color, background-color, border-color,
    text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  padding-top: calc(${({ theme }) => theme.spacing[2]} - 1px);
  padding-bottom: calc(${({ theme }) => theme.spacing[2]} - 1px);
  padding-left: ${({ theme }) => theme.spacing[6]};
  padding-right: ${({ theme }) => theme.spacing[6]};
`

type InputTextProps = React.ComponentProps<typeof InputText>
export type { InputTextProps }

InputText.displayName = 'InputText'
