import { MouseEvent, ReactNode } from 'react'
import {
  ArrowNavContainer,
  IconContainer,
  LabelText,
  NavArrow,
  NavContainer,
  NavIcon,
} from './styles'

export type MenuItemsProps = {
  icon: string
  label: ReactNode
  children?: ReactNode
  onClick?: (event: MouseEvent) => void
}

export type LeftNavProps = {
  menuItems: MenuItemsProps[]
  navArrow: string
}

export const LeftNav = ({ menuItems, navArrow }: LeftNavProps) => {
  return (
    <NavContainer>
      {menuItems.map(({ icon, label, onClick }, index) => (
        <IconContainer onClick={onClick} key={index}>
          <ArrowNavContainer>
            <NavIcon src={icon} />
            <NavArrow src={navArrow} />
          </ArrowNavContainer>
          <LabelText>{label}</LabelText>
        </IconContainer>
      ))}
    </NavContainer>
  )
}

LeftNav.displayName = 'LeftNav'
