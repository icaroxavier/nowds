import { ThemeType } from '../../types'
import { colors } from './colors'
import { gradients } from './gradients'
import { commonTokens } from '../../commonTokens'

export const darkTheme = {
  isDarkTheme: true,
  colors,
  gradients,
  ...commonTokens,
} as ThemeType
