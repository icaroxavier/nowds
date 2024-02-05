import { ReactNode } from 'react'
import { ButtonContainer, ButtonContent } from './styles'

export type ButtonProps = {
  variant?: 'primary' | 'secondary'
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export function Button({
  children,
  variant = 'primary',
  ...props
}: ButtonProps): ReactNode {
  return (
    <ButtonContainer $variant={variant} {...props}>
      <ButtonContent $variant={variant}>{children}</ButtonContent>
    </ButtonContainer>
  )
}

Button.displayName = 'Button'
