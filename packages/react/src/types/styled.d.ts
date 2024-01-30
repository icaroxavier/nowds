import 'styled-components'
import { ThemeType } from '@nowds/tokens'
declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType, ThemeType {}
}
