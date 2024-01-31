import { FontSizes } from './fontSizes'
import { LineHeights } from './lineHeights'
import { Spacing } from './spacing'

export type { FontSizes, LineHeights, Spacing }

export type Colors = {
  primary: string
  nowPurple: string
  nowGreen: string
  nowLight: string
  white: string
  text: string
}

export type Gradients = {
  primary: string
}

export type ThemeType = {
  isDarkTheme: boolean
  colors: Colors
  gradients: Gradients
  spacing: Spacing
  fontSizes: FontSizes
  lineHeights: LineHeights
}
