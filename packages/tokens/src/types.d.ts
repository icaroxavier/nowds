import { FontSizes } from './fontSizes'
import { LineHeights } from './lineHeights'
import { Spacing } from './spacing'

export type Colors = {
  primary: string
  nowPurple: string
  nowGreen: string
  nowLight: string
  white: string
}

export type Gradients = {
  primary: string
}

export type ThemeType = {
  colors: Colors
  gradients: Gradients
  spacing: Spacing
  fontSizes: FontSizes
  lineHeights: LineHeights
}