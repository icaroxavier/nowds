import { withThemeFromJSXProvider } from "@storybook/addon-themes";
import { defaultTheme, marketNodeTheme, darkTheme } from "@nowds/tokens";
import { ThemeProvider, GlobalStyles } from "../src";
import { themes } from "@storybook/theming";

export const decorators = [
  withThemeFromJSXProvider({
    themes: {
      default: defaultTheme,
      marketNode: marketNodeTheme,
      dark: darkTheme,
    },
    defaultTheme: "default",
    Provider: ThemeProvider,
    GlobalStyles: GlobalStyles, // Adds your GlobalStyle component to all stories
  }),
];

export const parameters = {
  docs: {
    theme: themes.dark,
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/i,
    },
  },
};
