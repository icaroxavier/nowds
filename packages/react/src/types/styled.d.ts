import 'styled-components'
import { ThemeType } from '@nowds/tokens/src/types'
declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType, ThemeType {}
}
