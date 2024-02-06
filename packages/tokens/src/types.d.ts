import { BorderRadius } from './borderRadius'
import { FontSizes } from './fontSizes'
import { FontWeights } from './fontWeights'
import { Fonts } from './fonts'
import { LineHeights } from './lineHeights'
import { Spacing } from './spacing'
import { Colors } from './themes/defaultTheme/colors'
import { Gradients } from './themes/defaultTheme/gradients'

export type { FontSizes, LineHeights, Spacing, Colors, Gradients }

export type ThemeType = {
  isDarkTheme: boolean
  colors: Colors
  gradients: Gradients
  spacing: Spacing
  fontSizes: FontSizes
  lineHeights: LineHeights
  fonts: Fonts
  fontWeights: FontWeights
  borderRadius: BorderRadius
}
