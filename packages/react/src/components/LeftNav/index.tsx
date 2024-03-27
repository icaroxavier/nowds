import { MouseEvent, ReactNode } from 'react'
import { IconContainer, LabelText, NavContainer, NavIcon } from './styles'

export type MenuItemsProps = {
  icon: ReactNode
  label: ReactNode
  onClick: (event: MouseEvent) => void
}

export type LeftNavProps = {
  menuItems: MenuItemsProps[]
}

export const LeftNav = ({ menuItems }: LeftNavProps) => {
  return (
    <NavContainer>
      {iconsArray.map((_, index) => (
        <IconContainer key={index}>
          <NavIcon src={apps} />
          <LabelText>{label}</LabelText>
        </IconContainer>
      ))}
    </NavContainer>
  )
}

LeftNav.displayName = 'LeftNav'
