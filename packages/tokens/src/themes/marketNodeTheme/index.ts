import { ThemeType } from '../../types'
import { colors } from './colors'
import { gradients } from './gradients'
import { commonTokens } from '../../commonTokens'

export const marketNodeTheme = {
  isDarkTheme: false,
  colors,
  gradients,
  ...commonTokens,
} as ThemeType
