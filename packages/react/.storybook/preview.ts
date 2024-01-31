import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import { defaultTheme, marketNodeTheme, darkTheme } from '@nowds/tokens';
import { ThemeProvider, GlobalStyles } from '../src'

export const decorators = [
  withThemeFromJSXProvider({
    themes: {
      default: defaultTheme,
      marketNode: marketNodeTheme,
      dark: darkTheme 
    },
    defaultTheme: 'default',
    Provider: ThemeProvider,
    GlobalStyles: GlobalStyles, // Adds your GlobalStyle component to all stories
  }),
];