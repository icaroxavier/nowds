import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import { defaultTheme, marketNodeTheme } from '@nowds/tokens';
import { ThemeProvider, GlobalStyles } from '../src'

export const decorators = [
  withThemeFromJSXProvider({
    themes: {
      default: defaultTheme,
      marketNode: marketNodeTheme,
    },
    defaultTheme: 'default',
    Provider: ThemeProvider,
    GlobalStyles: GlobalStyles, // Adds your GlobalStyle component to all stories
  }),
];