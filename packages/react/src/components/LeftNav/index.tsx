import { IconContainer, LabelText, NavContainer, NavIcon } from './styles'
import apps from '../../../../assets/images/Apps.png'

export type LeftNavProps = {
  numberIcons: number
  label: string
}

export const LeftNav = ({ numberIcons = 0, label }: LeftNavProps) => {
  const iconsArray = Array.from({ length: numberIcons })

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
