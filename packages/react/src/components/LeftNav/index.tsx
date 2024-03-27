import { MouseEvent, ReactNode } from 'react'
import { IconContainer, LabelText, NavContainer, NavIcon } from './styles'

export type MenuItemsProps = {
  icon: string
  label: ReactNode
  onClick?: (event: MouseEvent) => void
}

export type LeftNavProps = {
  menuItems: MenuItemsProps[]
}

export const LeftNav = ({ menuItems }: LeftNavProps) => {
  return (
    <NavContainer>
      {menuItems.map(({ icon, label, onClick }, index) => (
        <IconContainer onClick={onClick} key={index}>
          <NavIcon src={icon} />
          <LabelText>{label}</LabelText>
        </IconContainer>
      ))}
    </NavContainer>
  )
}

LeftNav.displayName = 'LeftNav'
