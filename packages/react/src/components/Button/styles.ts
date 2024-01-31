import styled from 'styled-components'

type ButtonContainerProps = {
  $variant: 'primary' | 'secondary'
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  color: ${({ theme, $variant }) => {
    if ($variant === 'primary') {
      if (theme.isDarkTheme) return '#292929'
      return theme.colors.white
    }
    if ($variant === 'secondary') {
      return theme.colors.text
    }
  }};
  background: ${({ theme }) => theme.gradients.primary};
  border-radius: ${({ theme }) => theme.spacing[8]};
  font-weight: 500;
  line-height: 1;
  letter-spacing: 0.24px;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  border: none;
  padding: 1px;
  font-family: 'Space Grotesk', sans-serif;
  cursor: pointer;
`

type ButtonContentProps = {
  $variant: 'primary' | 'secondary'
}

export const ButtonContent = styled.span<ButtonContentProps>`
  width: 100%;
  height: 100%;
  padding-top: calc(${({ theme }) => theme.spacing[5]} - 1px);
  padding-bottom: calc(${({ theme }) => theme.spacing[5]} - 1px);
  padding-left: calc(${({ theme }) => theme.spacing[8]} - 1px);
  padding-right: calc(${({ theme }) => theme.spacing[8]} - 1px);
  border-radius: calc(${({ theme }) => theme.spacing[8]} - 1px);
  background: ${({ $variant, theme }) => {
    if ($variant === 'secondary') {
      if (theme.isDarkTheme) return '#292929'
      return theme.colors.white
    }
  }};
`
